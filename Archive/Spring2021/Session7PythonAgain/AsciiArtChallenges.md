# ASCII Art Challenges
After completing the [code-along](AsciiArtCodeAlong.md), work on adding more functions.

## 1. A Fish Function
Define a new function to draw a fish, and then call it a couple of times.

Drawing a fish looks like this:

```py
print('  _')
print('><_>')
```

### Defining the Function
First, _define_ the function.

1. In the **main.py** file, find the `draw_owl` function definition
1. Make a few new lines under that
1. Define a new function named `draw_fish`
    - Start with the `def` keyword
    - Then, on the same line, add the function name
    - After that, on the same line, add parentheses and a colon
1. Make a new line, and _indent_ it
    - This will be the _body_ of the `draw_fish` function
1. Add the two `print` statements to draw the fish, both indented

That should be it! Now the function has been defined.

### Calling the Function
Now that the function definition is there, it will be possible to _call_ the function.

1. In the **main.py** file, make a new line at the bottom
1. Use the `change_color` command to change to color to `'orange'`
1. Under that, call the `draw_fish` function
    - Use the function name, followed by parentheses
1. Under that, change the color to another color
1. Under that, call the `draw_fish` function again

At this point, it should be possible to run the code and see the two fish appear! Try adding more fish of different colors as well.

## 2. A Duck Function
Define a new function to draw a duck, and then call it a couple of times.

Drawing a duck looks like this:

```py
print('  __    ')
print('<(o )___')
print(' ( ._> /')
print('  `---/ ')
```

### Defining the Function
First, _define_ the function.

1. In the **main.py** file, find the `draw_fish` function definition
1. Make a few new lines under that
1. Define a new function named `draw_duck`
    - Start with the `def` keyword
    - Then, on the same line, add the function name
    - After that, on the same line, add parentheses and a colon
1. Make a new line, and _indent_ it
    - This will be the _body_ of the `draw_duck` function
1. Add the four `print` statements to draw the duck, all indented

That should be it! Now the function has been defined.

### Calling the Function
Now that the function definition is there, it will be possible to _call_ the function.

1. In the **main.py** file, make a new line at the bottom
1. Use the `change_color` command to change to color to `'red'`
1. Under that, call the `draw_duck` function
    - Use the function name, followed by parentheses
1. Under that, change the color to another color
1. Under that, call the `draw_duck` function again

At this point, it should be possible to run the code and see the two ducks appear! Try adding more ducks of different colors as well.

## 3. More ASCII Art
Try to create some additional ASCII art to print out to the console! Find some online by Google searching "ASCII Art" or make up your own! It can be helpful to start in the **art.txt** file before trying to write code.

>NOTE: Using the backslash (`\`) character can cause issues when writing text to the screen. To avoid this, use `\\` instead of `\`, and only one `\` will appear.