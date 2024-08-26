const homeSection = document.getElementById("home-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const usernameInput = document.getElementById("username");
const startQuizButton = document.getElementById("start-quiz");
const categoryHeading = document.getElementById("category-heading");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const finalScoreElement = document.getElementById("final-score");
const restartButton = document.getElementById("restart-button");
let playerName = ""; 

// Quiz data structure 
const quizData = {
    "Pipes and Cisterns": [
        { question: "A pipe can fill a tank in 6 hours. Another pipe can fill the same tank in 4 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["2.4 hours", "3 hours", "4 hours", "6 hours"], correct: 0 },
        { question: "Two pipes A and B can fill a cistern in 12 hours and 18 hours respectively. If both pipes are opened together, how long will it take to fill the cistern?", options: ["7.2 hours", "9 hours", "10 hours", "15 hours"], correct: 0 },
        { question: "A pipe can fill a tank in 10 hours. Another pipe can empty the same tank in 15 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["30 hours", "20 hours", "15 hours", "10 hours"], correct: 1 },
        { question: "A cistern has two inlets A and B and an outlet C. A can fill the cistern in 10 hours, B in 15 hours and C can empty the full cistern in 20 hours. If all the three pipes are opened simultaneously, in how many hours will the cistern be full?", options: ["8 hours", "10 hours", "12 hours", "15 hours"], correct: 0 },
        { question: "A pipe can fill a tank in 8 hours and another pipe can empty the same tank in 12 hours. If both pipes are opened together, how long will it take to fill the tank?", options: ["24 hours", "16 hours", "12 hours", "8 hours"], correct: 1 },
        { question: "Three pipes A, B and C can fill a tank in 10, 15 and 20 hours respectively. If all the three pipes are opened together, in how many hours will the tank be full?", options: ["6 hours", "5 hours", "4 hours", "3 hours"], correct: 2 },
        { question: "A pipe can fill a tank in 12 hours. Another pipe can fill the same tank in 18 hours. A third pipe can empty the tank in 36 hours. If all the three pipes are opened together, how long will it take to fill the tank?", options: ["6 hours", "8 hours", "10 hours", "12 hours"], correct: 1 },
        { question: "A cistern has two inlets A and B and an outlet C. A can fill the cistern in 6 hours, B in 8 hours and C can empty the full cistern in 12 hours. If all the three pipes are opened simultaneously, in how many hours will the cistern be full?", options: ["4 hours", "5 hours", "6 hours", "7 hours"], correct: 2 },
        { question: "A pipe can fill a tank in 10 hours and another pipe can empty the same tank in 12 hours. If both pipes are opened together, what fraction of the tank will be filled in 2 hours?", options: ["1/10", "1/6", "1/5", "1/4"], correct: 2 },
        { question: "Two pipes can fill a cistern in 10 hours and 15 hours respectively. If both pipes are opened together, how much time will they take to fill the cistern?", options: ["6 hours", "8 hours", "10 hours", "12 hours"], correct: 0 }
    ],
    "Probability": [
        { question: "What is the probability of getting a head when a coin is tossed once?", options: ["1/2", "1/4", "1/3", "1"], correct: 0 },
        { question: "A bag contains 5 red balls and 3 green balls. What is the probability of drawing a red ball?", options: ["5/8", "3/8", "1/2", "1/3"], correct: 0 },
        { question: "A die is rolled. What is the probability of getting a number greater than 4?", options: ["1/3", "1/2", "2/3", "1/6"], correct: 0 },
        { question: "Two coins are tossed. What is the probability of getting at least one head?", options: ["1/4", "1/2", "3/4", "1"], correct: 2 },
        { question: "A bag contains 4 red balls, 3 blue balls, and 2 green balls. What is the probability of drawing a green ball?", options: ["1/9", "2/9", "1/3", "1/2"], correct: 1 },
        { question: "What is the probability of drawing a king from a standard deck of 52 cards?", options: ["1/13", "1/52", "4/52", "1/4"], correct: 0 },
        { question: "A box contains 10 balls numbered 1 to 10. What is the probability of drawing a ball with an even number?", options: ["1/2", "1/5", "1/10", "1/4"], correct: 0 },
        { question: "Two dice are rolled. What is the probability of getting a sum of 7?", options: ["1/6", "1/12", "1/4", "1/3"], correct: 0 },
        { question: "A bag contains 5 red balls, 4 blue balls, and 3 green balls. What is the probability of drawing a red ball or a blue ball?", options: ["1/4", "1/2", "3/4", "1"], correct: 2 },
        { question: "What is the probability of getting a tail when a coin is tossed once?", options: ["1/2", "1/4", "1/3", "1"], correct: 0 }
    ],
    "Problems on Ages": [
        { question: "The sum of the ages of a father and his son is 50 years. Five years ago, the father's age was 4 times the son's age. Find their present ages.", options: ["40 years, 10 years", "35 years, 15 years", "45 years, 5 years", "30 years, 20 years"], correct: 0 },
        { question: "A man is 3 times as old as his son. After 10 years, he will be twice as old as his son. Find their present ages.", options: ["30 years, 10 years", "40 years, 10 years", "35 years, 15 years", "45 years, 15 years"], correct: 0 },
        { question: "The ratio of the present ages of a father and his son is 7:3. Five years ago, the father's age was 4 times the son's age. Find their present ages.", options: ["35 years, 15 years", "42 years, 18 years", "49 years, 21 years", "56 years, 24 years"], correct: 2 },
        { question: "The sum of the ages of a mother and her daughter is 45 years. Five years ago, the mother's age was 6 times the daughter's age. Find their present ages.", options: ["35 years, 10 years", "40 years, 5 years", "30 years, 15 years", "36 years, 9 years"], correct: 1 },
        { question: "A man is 24 years older than his son. Five years ago, he was 5 times as old as his son. Find their present ages.", options: ["34 years, 10 years", "39 years, 15 years", "44 years, 20 years", "29 years, 5 years"], correct: 2 },
        { question: "The ratio of the present ages of a brother and sister is 5:3. Four years ago, the brother's age was twice the sister's age. Find their present ages.", options: ["20 years, 12 years", "25 years, 15 years", "30 years, 18 years", "15 years, 9 years"], correct: 1 },
        { question: "The sum of the ages of a father and his two sons is 60 years. The father's age is twice the sum of the ages of his sons. Find the age of the father.", options: ["30 years", "36 years", "40 years", "48 years"], correct: 3 },
        { question: "The present age of a father is 3 times the age of his son. Five years ago, the father was 4 times as old as his son. Find their present ages.", options: ["40 years, 10 years", "45 years, 15 years", "35 years, 10 years", "50 years, 10 years"], correct: 0 },
        { question: "A man is 4 times as old as his son. Five years ago, he was 7 times as old as his son. Find their present ages.", options: ["35 years, 8 years", "40 years, 10 years", "45 years, 11 years", "50 years, 12 years"], correct: 1 },
        { question: "The ratio of the present ages of a mother and her daughter is 8:3. Five years ago, the mother's age was 5 times the daughter's age. Find their present ages.", options: ["40 years, 15 years", "48 years, 18 years", "56 years, 21 years", "64 years, 24 years"], correct: 2 }
    ],
    "Profit and Loss": [
        { question: "A shopkeeper buys an article for Rs. 100 and sells it for Rs. 120. What is his profit percentage?", options: ["10%", "15%", "20%", "25%"], correct: 2 },
        { question: "A man buys a watch for Rs. 500 and sells it for Rs. 400. What is his loss percentage?", options: ["10%", "20%", "25%", "30%"], correct: 1 },
        { question: "A shopkeeper buys a chair for Rs. 600 and sells it for Rs. 720. What is his profit percentage?", options: ["15%", "20%", "25%", "30%"], correct: 1 },
        { question: "A man buys a car for Rs. 5,00,000 and sells it for Rs. 4,50,000. What is his loss percentage?", options: ["5%", "10%", "15%", "20%"], correct: 1 },
        { question: "A shopkeeper buys a bicycle for Rs. 1,200 and sells it for Rs. 1,500. What is his profit percentage?", options: ["15%", "20%", "25%", "30%"], correct: 2 },
        { question: "A man buys a house for Rs. 10,00,000 and sells it for Rs. 12,00,000. What is his profit percentage?", options: ["10%", "15%", "20%", "25%"], correct: 2 },
        { question: "A shopkeeper buys a table for Rs. 800 and sells it for Rs. 960. What is his profit percentage?", options: ["15%", "20%", "25%", "30%"], correct: 1 },
        { question: "A man buys a laptop for Rs. 40,000 and sells it for Rs. 35,000. What is his loss percentage?", options: ["5%", "10%", "12.5%", "15%"], correct: 1 },
        { question: "A shopkeeper buys a refrigerator for Rs. 15,000 and sells it for Rs. 18,000. What is his profit percentage?", options: ["10%", "15%", "20%", "25%"], correct: 2 },
        { question: "A man buys a plot of land for Rs. 2,00,000 and sells it for Rs. 2,50,000. What is his profit percentage?", options: ["15%", "20%", "25%", "30%"], correct: 1 }
    ]
};

let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let startTime;

// Function to display the home section
function showHome() {
    homeSection.style.display = "block";
    quizSection.style.display = "none";
    resultSection.style.display = "none";
}

// Function to display the quiz section
function showQuiz() {
    homeSection.style.display = "none";
    quizSection.style.display = "block";
    resultSection.style.display = "none";
    loadQuestion();
    startTimer(); 
}

// Function to display the result section
function showResult() {
    homeSection.style.display = "none";
    quizSection.style.display = "none";
    resultSection.style.display = "block";

    const totalQuestions = quizData[currentCategory].length;
    const attemptedQuestions = currentQuestionIndex;
    const correctQuestions = score;
    const wrongQuestions = attemptedQuestions - correctQuestions;
    const percentage = (correctQuestions / totalQuestions) * 100;
    const endTime = new Date(); 
    const timeTaken = (endTime - startTime) / 1000; 

    finalScoreElement.innerHTML = `
    <span class="result-info"><b>${playerName}</b> &nbsp; your result is:</span>
    <br>
    <span class="result-info">Total Time Taken:<b> ${timeTaken.toFixed(2)}</b> seconds</span>
    <br>
    <span class="result-info">Total Questions:<b> ${totalQuestions}</b></span>
    <br>
    <span class="result-info">Attempted: <b>${attemptedQuestions}</b></span>
    <br>
    <span class="result-info">Correct Answers:<b> ${correctQuestions}</b></span>
    <br>
    <span class="result-info">Percentage: <b>${percentage.toFixed(2)}</b>%</span> 
`;

{/* <span class="result-info">Wrong Answers: <b>${wrongQuestions}</b></span> */}

    // Add Start Again button
    restartButton.textContent = "Start Again";
    restartButton.style.display = "block" ; 

    // Add Home Page button 
    const homeButton = document.createElement('button');
    homeButton.textContent = "Home Page";
    homeButton.addEventListener('click', () => location.reload());
    resultSection.appendChild(homeButton);
}

// Function to load a question
function loadQuestion() {
    const currentQuestion = quizData[currentCategory][currentQuestionIndex];
    questionText.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`; 
    optionsList.innerHTML = ''; 

    currentQuestion.options.forEach((option, index) => {
        const optionItem = document.createElement("li");
        optionItem.textContent = option;
        optionItem.dataset.index = index; 
        optionItem.addEventListener("click", checkAnswer);
        optionsList.appendChild(optionItem);
    });
}

// Function to check the answer
function checkAnswer(event) {
    const selectedOptionIndex = parseInt(event.target.dataset.index);
    const currentQuestion = quizData[currentCategory][currentQuestionIndex];

    if (selectedOptionIndex === currentQuestion.correct) {
        score++;
        scoreElement.innerHTML = `Score : <b>${score}</b>` ;
        event.target.classList.add("correct");
    } else {
        event.target.classList.add("incorrect");
    }

    // Move to the next question or show the result
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData[currentCategory].length) {
            loadQuestion();
        } else {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000); 
}

// Function to start the timer
function startTimer() {
    startTime = new Date(); 
    timerInterval = setInterval(() => {
        const timeRemaining = parseInt(timerElement.textContent);
        if (timeRemaining > 0) {
            timerElement.textContent = timeRemaining - 1;
        } else {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000);
}

// Event listeners
startQuizButton.addEventListener("click", () => {
    playerName = usernameInput.value.trim(); 
    if (playerName !== "") {
        homeSection.style.display = "block"; 
        quizSection.style.display = "none";
        resultSection.style.display = "none";
    } else {
        alert("Please enter your name!");
    }
});

submitButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[currentCategory].length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        showResult();
    }
});

restartButton.addEventListener("click", () => {
    location.reload();
});

// Event listeners for category selection
document.getElementById("Pipes-and-Cisterns-button").addEventListener("click", () => {
    if (playerName !== "") {
        currentCategory = "Pipes and Cisterns";
        showQuiz();
        categoryHeading.textContent = "Pipes and Cisterns";
    } else {
        alert("Please enter your name first!");
    }
});

document.getElementById("Probability-button").addEventListener("click", () => {
    if (playerName !== "") { 
        currentCategory = "Probability";
        showQuiz();
        categoryHeading.textContent = "Probability";
    } else {
        alert("Please enter your name first!");
    }
});

document.getElementById("Problems-on-Ages-button").addEventListener("click", () => {
    if (playerName !== "") { 
        currentCategory = "Problems on Ages";
        showQuiz();
        categoryHeading.textContent = "Problems on Ages";
    } else {
        alert("Please enter your name first!");
    }
});

document.getElementById("Profit-and-Loss-button").addEventListener("click", () => {
    if (playerName !== "") { 
        currentCategory = "Profit and Loss";
        showQuiz();
        categoryHeading.textContent = "Profit and Loss";
    } else {
        alert("Please enter your name first!");
    }
});