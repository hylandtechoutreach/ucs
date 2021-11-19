# Quiz Individual Exercises
Work on completing these exercises to make your quiz even better.

## Adding a Question
1. In the **script.js** file, update the value of the `numberOfQuestions` variable to be `3` instead of `2`
1. Underneath the `}` for the second `if` statement, add a new line
1. Ask the user a third question using `prompt`, and store the user's answer in a variable named `answer3`
    - Ask any appropriate question!
1. Add an `if` statement checking if the user entered the correct answer
1. If the user _did_ enter the correct answer, increase their points!
2. Repeat these steps to add more questions if desired!

_HINT: Use the existing questions in the code as a guide for creating new questions._

## Final Message
Instead of simply showing the final score to the user, display a message about the score. If they score 100%, display a message that says "Good Job!"

Under the `alert` at the bottom of the JavaScript `startQuiz` function, create an `if` statement:
1. Start with `if`
1. Add parentheses (`()`)
1. Within the parentheses, compare the `finalScore` to `100` with a triple-equals sign
1. After the parentheses, add curly brackets (`{` and `}`) and make a new line between them
1. In the _body_ of the `if`, use an `alert` to display a message of "Good Job!"
    - Note that the program will only display this message _if_ `finalScore` is equal to `100`!

_HINT: Use the existing `if` statements in the code as a guide for creating this `if` statement._

### Extra Challenge: Background Change
Update the code so that _if_ the user scores a 100, the background color changes!

Use this line of code to change the background color:
```js
document.body.style.background = "green";
```