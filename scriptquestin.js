
// set attributes
function Question(text, choice, answer) {
    this.text = text;
    this.answer = answer;
    this.choice = choice;

}
Question.prototype.correct.Annswer = function (choice) {
    return choice === this.answer;
}

