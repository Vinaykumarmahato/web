const questions = [
    {
        question: "What is the purpose of the 'break' statement in Java?",
        answers: [
            { text: "Terminate the loop or switch statement" , correct: true },
            { text: "Continue to the next iteration of the loop" , correct: false },
            { text: "Exit the entire program" , correct: false },
            { text: "Jump to a specified label" , correct: false }
        ]
    },
    {
        question: "Which of the following is not a primitive data type in Java?",
        answers: [
            { text: "int" , correct: false },
            { text: "boolean" , correct: false },
            { text: "string" , correct: true },
            { text: "char" , correct: false }
        ]
    },
    {
        question: "What does the 'final' keyword signify in Java?",
        answers: [
            { text: "The variable can be modified" , correct: false },
            { text: "The class cannot be extended" , correct: true },
            { text: "The method can be overridden" , correct: false },
            { text: "The interface can have multiple implementations" , correct: false }
        ]
    },
    {
        question: "How is an interface different from an abstract class in Java?",
        answers: [
            { text: "An interface cannot have abstract methods" , correct: false },
            { text: "An abstract class can have constructors" , correct: false },
            { text: "A class can implement multiple interfaces" , correct: true },
            { text: "An abstract class cannot have fields" , correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'super' keyword in Java?",
        answers: [
            { text: "Refers to the superclass object" , correct: true },
            { text: "Declares a superclass method" , correct: false },
            { text: "Calls the superclass constructor" , correct: false },
            { text: "Defines a superclass variable" , correct: false }
        ]
    },
    {
        question: "What is the default value of the local variables in Java?",
        answers: [
            { text: "0" , correct: false },
            { text: "null" , correct: false },
            { text: "Depends on the variable type" , correct: false },
            { text: "No default value" , correct: true }
        ]
    },
    {
        question: "Which method is called when an object is garbage collected in Java?",
        answers: [
            { text: "delete()" , correct: false },
            { text: "cleanup()" , correct: false },
            { text: "finalize()" , correct: true },
            { text: "dispose()" , correct: false }
        ]
    },
    {
        question: "In Java, what is the purpose of the 'this' keyword?",
        answers: [
            { text: "Refers to the current instance of the class" , correct: true },
            { text: "Refers to the parent class" , correct: false },
            { text: "Refers to the subclass" , correct: false },
            { text: "Refers to the static variable" , correct: false }
        ]
    },
    {
        question: "What is the output of the following code snippet? `System.out.println(5 / 2);`",
        answers: [
            { text: "2.5" , correct: false },
            { text: "2" , correct: true },
            { text: "2.0" , correct: false },
            { text: "Error" , correct: false }
        ]
    },
    {
        question: "Which of the following is true about the 'HashMap' class in Java?",
        answers: [
            { text: "It allows duplicate keys" , correct: false },
            { text: "It is synchronized" , correct: false },
            { text: "It allows null keys and values" , correct: true },
            { text: "It maintains the order of elements" , correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'try', 'catch', and 'finally' blocks in Java?",
        answers: [
            { text: "To handle runtime errors" , correct: true },
            { text: "To define a custom exception" , correct: false },
            { text: "To declare variables" , correct: false },
            { text: "To create a new thread" , correct: false }
        ]
    },
    {
        question: "Which keyword is used to define an interface in Java?",
        answers: [
            { text: "interface" , correct: true },
            { text: "implements" , correct: false },
            { text: "interfaceOf" , correct: false },
            { text: "interfaceWith" , correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'static' keyword in Java?",
        answers: [
            { text: "Makes a variable non-modifiable" , correct: false },
            { text: "Associates the method with the class rather than the instance" , correct: true },
            { text: "Declares a constant variable" , correct: false },
            { text: "Enforces encapsulation" , correct: false }
        ]
    },
    {
        question: "Which of the following is not a valid modifier in Java?",
        answers: [
            { text: "abstract" , correct: false },
            { text: "virtual" , correct: true },
            { text: "final" , correct: false },
            { text: "public" , correct: false }
        ]
    },
    {
        question: "What is the role of the 'break' statement in a 'switch' statement in Java?",
        answers: [
            { text: "Exit the entire program" , correct: false },
            { text: "Terminate the loop" , correct: false },
            { text: "Exit the switch statement" , correct: true },
            { text: "Skip to the next case" , correct: false }
        ]
    },
    {
        question: "How are exceptions handled in Java?",
        answers: [
            { text: "Using 'if-else' statements" , correct: false },
            { text: "By declaring a 'throws' clause" , correct: false },
            { text: "Using 'try', 'catch', and 'finally' blocks" , correct: true },
            { text: "By using the 'ignoreExceptions' keyword" , correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'instanceof' operator in Java?",
        answers: [
            { text: "Check if an object is null" , correct: false },
            { text: "Check if an object is an instance of a specific class" , correct: true },
            { text: "Check if an object is immutable" , correct: false },
            { text: "Check if an object is a primitive type" , correct: false }
        ]
    },
    {
        question: "Which of the following is true about the 'StringBuilder' class in Java?",
        answers: [
            { text: "Immutable" , correct: false },
            { text: "Synchronized" , correct: false },
            { text: "Mutable" , correct: true },
            { text: "Final" , correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'continue' statement in Java?",
        answers: [
            { text: "Terminate the loop" , correct: false },
            { text: "Skip to the next iteration of the loop" , correct: true },
            { text: "Exit the entire program" , correct: false },
            { text: "Restart the loop" , correct: false }
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score=0;
function StartQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;
    questionElement.innerHTML=questionNumber+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");//create a button
        button.innerHTML=answer.text;//we will add the answer
        button.classList.add("btn");//adding the class in the button
        answerButton.appendChild(button);//display button inside the div answer-buttons
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;//store the selected answer
    const isCorrect=selectedBtn.dataset.correct==="true";//compare the selected button with true
    if(isCorrect){
        selectedBtn.classList.add("correct");//add className correct
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");//add className incorrect
    }
    Array.from(answerButton.children).forEach(button=>{//for each button will check the dataset if it is true will mark it green if it is false then it will be red and further marking is disbaled
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="PLAY AGAIN";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex< questions.length ) {
    handleNextButton();
    }
    else{
        StartQuiz();
    }
});
StartQuiz();