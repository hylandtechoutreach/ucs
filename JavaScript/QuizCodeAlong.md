# About Me Quiz - JavaScript Lesson
Learn how JavaScript can make websites interactive by building a simple quiz about yourself.

## Starting Point
Start by forking [this Repl project](https://replit.com/@HylandOutreach/JavaScriptLessonStarter#index.html). It contains some HTML and CSS starter code for the About Me website.

### Update the Starter HTML
Wherever the word "blank" appears in the **index.html** file, update it to personalize your website! For example, where it says "I'm blank," replace the "blank" with your name.

### Update the Starter CSS
In the **style.css** file, change the background color, text color, and font!

## Interactivity with JavaScript
JavaScript is the programming language of the web; it allows webpages to be _interactive_. Developers use JavaScript to trigger events, create animations, make games, and much more!

The next step for the site is to add functionality to the "Quiz Me" button. It should pop up a quiz that allows the user to answer some questions and receive a final score. This is possible with JavaScript!

### Defining the Function
Developers use _functions_ in JavaScript to trigger certain actions. In this example, clicking the "Quiz Me" button will _call_ a JavaScript function. That means it triggers some actions! `alert` is the command that lets developers show messages to the user on a webpage.

1. Open the **script.js** file in the Repl project
1. Create an empty function definition for the `startQuiz` function
    - This requires the `function` keyword, the function name, parentheses, and curly brackets
1. In the _body_ of the function, add an `alert` statement that welcomes the user

The code so far should look something like this:

```js
function startQuiz() {
    alert("Welcome to my quiz :)");
}
```

Run the program. On the webpage, click the button to make sure it is hooked up properly! Note that this is possible because of the `onclick` attribute on the HTML button.

### Receiving Information from the User
`prompt` is a command that allows us to ask questions to the user. When the user answers, the computer stores that text in a _variable_. Developers can then reference that information in the future!

1. Under the `alert`, above the `}`, create a couple new lines
1. Declare a `name` _variable_, and use a `prompt` to ask for the user's name
1. On the next line, use an `alert` to say "Good luck" to the user (using their name!)

```js
var name = prompt("What is your name?");
alert("Good luck " + name);
```

Run the program, click the button again, and make sure the prompt appears. The site should say good luck!

### Setting up the Quiz Variables
1. Under the previous `alert`, above the `}`, create a couple new lines
1. Declare a `points` variable
    - This will be used to keep track of how many points the user has earned (i.e., how many questions they have answered correctly)
    - How many points should the user have at the beginning? (`0`)
1. Declare a `numberOfQuestions` variable
    - To start, set this value to `2`

```js
var points = 0;
var numberOfQuestions = 2;
```

### Asking a Question
`if` statements allow developers to change the program flow based on certain information. It works just like in English; for example, "if it is raining, I will wear a raincoat." In code, the program will do different things based on what the user says! For the quiz, the `points` should go up every time the user answers correctly. So, "if the answer from the user is equal to the correct answer, increase the points!"

1. Under the `numberOfQuestions` variable declaration, above the `}`, create a couple new lines
1. Ask the user a question using `prompt` (e.g., "What is my name?")
1. Store the user's answer in a variable called `answer1`
1. Under the `prompt`, create an `if` statement
    - What should happen based on the user's answer?
    - If the user is correct, they should get a point. Otherwise, they should not.
1. Use `if`, parentheses, `===`, and curly brackets to set up the `if`
1. Within the curly brackets, use `++` to increment the value of the `points` variable

```js
var answer1 = prompt("What is my name?");
if (answer1 === "Joseph") {
    points++;
}
```

Run the program and click the button again. It should ask the question, and allow the user to answer!

### Asking another Question
1. Repeat the steps above to ask another question underneath the first question
1. The differences will be:
    - `answer2` instead of `answer1` for the variable
    - Ask a different question
    - Check a different answer

```js
var answer2 = prompt("Where do I live?");
if (answer2 === "Lakewood") {
    points++;
}
```

Run the program, click the button, and see the second question!

### Calculating the Final Score
Finally, it is possible to use the `points` variable to determine an overall score. Do some math to calculate the percentage against the total number of questions!

>NOTE: This section can be skipped and replaced with an `alert` that simply displays the number of points at the end

1. Consider how to calculate the final score
    - The score will be the number of points the user has, divided by the total number of questions
    - Multiply this by 100 to show a percentage
1. Under the final question, declare a `finalScore` variable
1. Calculate the final score by dividing the `points` variable by the `numberOfQuestions` variable
    - Multiply this by 100 to show a percentage
1. Use an `alert` to show the final score to the user

```js
var finalScore = (points / numberOfQuestions) * 100;
alert("Final score: " + finalScore + "%");
```

Run the program, click the button, and take the quiz. The final score should change based on the answers to the questions!

## Final JavaScript Code
```js
function startQuiz() {
  alert("Welcome to the quiz :)");

  var name = prompt("What is your name?");
  alert("Good luck " + name);

  var points = 0;
  var numberOfQuestions = 2;

  var answer1 = prompt("What is my name?");
  if (answer1 === "Joseph") {
    points++;
  }

  var answer2 = prompt("Where do I live?");
  if (answer2 === "Lakewood") {
    points++;
  }

  var finalScore = (points / numberOfQuestions) * 100;
  alert("Final score: " + finalScore + "%");
}
```

## Individual Work
If there is time remaining, work on [these individual exercises](QuizIndividual.md).