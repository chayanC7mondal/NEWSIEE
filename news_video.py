import requests
import json
import time

class VideoGenerator:
    def __init__(self, api_key):
        self.api_key = api_key

    def generate_video(self, input_text, source_url):
        url = "https://api.d-id.com/talks"

        payload = {
            "script": {
                "type": "text",
                "subtitles": "false",
                "provider": {
                    "type": "microsoft",
                    "voice_id": "en-US-JennyNeural"
                },
                "ssml": "false",
                "input": input_text
            },
            "config": {
                "fluent": "false",
                "pad_audio": "0.0"
            },
            "source_url": source_url
        }

        headers = {
            "accept": "application/json",
            "content-type": "application/json",
            "authorization": f"Bearer {self.api_key}"
        }

        # Initial request to generate video
        response = requests.post(url, json=payload, headers=headers)
        _response = response.json()
        print("Initial Response: ", _response)

        if 'status' not in _response:
            print("Error in initial response:", _response)
            return None

        # Polling until the status is 'created'
        while _response["status"] != "created":
            print("Polling for status...")
            time.sleep(10)  # Wait before polling again
            response = requests.post(url, json=payload, headers=headers)
            _response = response.json()
            if 'status' not in _response:
                print("Error in polling response:", _response)
                return None

        talk_id = _response['id']
        talk_url = f"{url}/{talk_id}"

        headers = {
            "accept": "application/json",
            "authorization": f"Bearer {self.api_key}"
        }

        # Polling until the video generation is done
        while True:
            print("Polling for video status...")
            response = requests.get(talk_url, headers=headers)
            video_response = response.json()

            if 'status' not in video_response:
                print("Error in video response:", video_response)
                return None

            if video_response["status"] == "done":
                break
            time.sleep(10)  # Wait before polling again

        video_url = video_response["result_url"]
        return video_url

