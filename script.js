document.getElementById("submit-btn").addEventListener("click", function() {
    const correctAnswers = ["Argentina", "Meta", "Greece", "Tech for Good", "India", "Netflix", "Paris", "Avatar 3", "UK", "Fusion Energy"];
    let score = 0;
    let wrongQuestions = [];

    for (let i = 1; i <= 10; i++) {
        const options = document.getElementsByName(`answer${i}`);
        let selectedAnswer = "";
        for (const option of options) {
            if (option.checked) {
                selectedAnswer = option.nextElementSibling.textContent;
                break;
            }
        }
        if (selectedAnswer === correctAnswers[i - 1]) {
            score++;
        } else {
            wrongQuestions.push(i);
        }
    }

    let resultText = `You scored ${score} out of 10.`;
    if (wrongQuestions.length > 0) {
        resultText += ` You got the following questions wrong: ${wrongQuestions.join(", ")}.`;
    }

    document.getElementById("result-text").textContent = resultText;
});
