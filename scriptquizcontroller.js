

// this page is for scores and  number of questions
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];

}
Quiz.prototype.isEnded = function () {
    return this.questionIndex.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {
    this.questionIndex++;
    if (this.getQuestionIndex().correctAnswer(answer))
        this.score++;
}