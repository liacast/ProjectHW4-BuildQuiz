// Click the button to start the quiz
// you will have 10 seconds to answer 
// if answer is correct or incorrect  you will see feedback
// see progress
// you will the the score at the end


// here will be functions to populate the questions:

var questions = [
    new Question("Students that have a lower tolerance for ambiguity may be uncomfortable not understanding everything they see and hear and may be more anxious about their performance in the classroom.’ What is the most appropriate strategy to handle this?", ["<Repeat multiple times the same phrase in the target language>", "<Use full-phrase translation to help the student understand in English", "Provide comprehensible input", "Do nothing"], "Provide comprehensible input"),
    new Question("This is a type of comprehension check that helps students develop vocabulary", ['Bookending', 'Binary option', 'Venn diagram', 'Text alerts'], "Binary option"),
    new Question("Describing or defining a concept instead of saying or writing the specific words, usually in order to fill in a lexical gap.’ What strategy does this refer to?", ['Cognates', 'Circumlocution', 'Glossing', 'Discussion'], 'Circumlocution'),
    new Question('How long is an appropriate time for small talk in class?', ['20 min ', '5 min;', 'As long as it takes', 'It should not be any small talk in class'], '5 min'),
    new Question('What does it mean to modify your speech for students?'["translate for students", "speak slower", "reduce your rate of speech", "speak louder"], "reduce your rate of speech")
];

var quiz = new Quiz(questions)