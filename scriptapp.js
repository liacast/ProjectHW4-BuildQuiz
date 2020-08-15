// Click the button to start the quiz
// you will have 10 seconds to answer 
// if answer is correct or incorrect  you will see feedback
// see progress
// you will the the score at the end

// create function populate questions
function populate() {
    if (quiz.isEnded()) {
        showScores()
    }
    else {
        // show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // populate the answers:
        // show choices:
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress()
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// set the questions:

var questions = [
    new Question("Sometimes students have a lower tolerance for ambiguity. What is the most appropriate strategy to handle this?", ["Repeat multiple times the same phrase in the target language", "Use full-phrase translation to help the student understand in English", "Provide comprehensible input", "Do nothing"], "Provide comprehensible input"),
    new Question("This is a type of comprehension check that helps students develop vocabulary", ['Bookending', 'Binary option', 'Venn diagram', 'Text alerts'], "Binary option"),
    new Question("Describing or defining a concept instead of saying or writing the specific words, usually in order to fill in a lexical gap. What strategy does this refer to?", ['Cognates', 'Circumlocution', 'Glossing', 'Discussion'], 'Circumlocution'),
    new Question('How long is an appropriate time for small talk in class?', ['20 min ', '5 min', 'As long as it takes', 'No small talk in class'], '5 min'),
    new Question('What does it mean to modify your speech for students?', ["translate for students", "speak slower", "reduce your rate of speech", "speak louder"], "reduce your rate of speech")
];

var quiz = new Quiz(questions);

populate();