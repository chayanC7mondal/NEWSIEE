import requests
import os
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables
load_dotenv()

# Fetch the API key from environment variables
api_key = os.getenv('NEWS_API_KEY')

if not api_key:
    raise ValueError("API key not found. Please set your API key in the environment variables.")

class NewsAPI:
    def __init__(self, api_key):
        self.api_key = api_key

    def get_news(self, query, num_news):
        # Use current date or a recent date within your API plan's range
        # query = "technology"
        # num_news = 3
        current_date = "2024-08-30" 
        url = f'https://newsapi.org/v2/everything?q={query}&from={current_date}&sortBy=popularity&pageSize={num_news}&language=en&apiKey={self.api_key}'

        response = requests.get(url)
        
        if response.status_code == 200:
            news_data = response.json()
            return news_data.get("articles", [])
        else:
            # Print error details for debugging
            print(f"Error: {response.status_code}")
            print(f"Response: {response.text}")
            return []

    def get_news_descriptions(self, query, num_news):
        news = self.get_news(query, num_news)
        # Use a default value for 'description' if not present
        desc_list = [news_item.get('description', 'No description available') for news_item in news]
        return desc_list

    def get_news_string(self, query, num_news):
        desc_list = self.get_news_descriptions(query, num_news)
        desc_string = ". ".join(desc_list)
        return desc_string
