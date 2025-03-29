document.addEventListener('DOMContentLoaded', function() {
    const correctAnswers = {
        answer1: 'q1-option4', // France
        answer2: 'q2-option2', // Meta
        answer3: 'q3-option1', // Canada
        answer4: 'q4-option1', // Climate Action
        answer5: 'q5-option2', // China
        answer6: 'q6-option1', // Netflix
        answer7: 'q7-option1', // Los Angeles
        answer8: 'q8-option2', // The Marvels
        answer9: 'q9-option3', // UK
        answer10: 'q10-option4' // Fusion Energy
    };

    const submitButton = document.getElementById('submit-btn');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function() {
        let score = 0;
        let wrongQuestions = [];

        for (let [question, correctOptionId] of Object.entries(correctAnswers)) {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.id === correctOptionId) {
                score++;
            } else {
                const questionNumber = question.replace('answer', '');
                wrongQuestions.push(questionNumber);
            }
        }

        const totalQuestions = Object.keys(correctAnswers).length;
        let resultMessage = `Your score: ${score}/${totalQuestions}`;

        if (wrongQuestions.length > 0) {
            resultMessage += `. Incorrect answers for questions: ${wrongQuestions.join(', ')}.`;
        }

        resultText.textContent = resultMessage;
    });
});
