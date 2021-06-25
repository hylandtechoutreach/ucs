# ASCII Art Code-Along
Follow the instructions below to build a Python program that prints out some text-based animal art in different colors.

## Getting Started
Start by forking the starter Repl project and adding some starter code.

1. Go to the [starter Repl project](https://replit.com/@HylandOutreach/AsciiArtStart#main.py)
1. Click the "Fork" button in the upper left
1. Make sure to log in!
1. When the project opens, open the **main.py** file

In the **main.py** file, add this code:

```py
from colors import change_color

change_color('blue')
print('Hello!')
print('')
```

Click the "Run" button to see what happens. A message of "Hello!" should appear in the console, and it should be blue!

### Breaking Down the Code
What does each line of code actually do?

```py
# This line imports the change_color function - so that it is usable in the main.py file
from colors import change_color
```

```py
# This line changes the text color to blue in the console
change_color('blue')
```

```py
# This line prints "Hello!" to the console
print('Hello!')
```

```py
# This line prints an empty line in the console
print('')
```

## Drawing Some Bunnies
Now the console is up and running, but it has not printed anything too interesting yet. Use more `print` commands to draw some text-art bunnies!

The bunny should look like this:

```
() ()
(^ ^)
(u u)
```

1. Make a new line under the existing code in the **main.py** file
1. Use the `change_color` command to change the text to `'cyan'`
1. Under that, use the `print` command to print bunny ears: `() ()`
1. Under that, use another `print` to print a bunny face: `(^ ^)`
1. Under that, use one more `print` to print the bunny body: `(u u)`
1. Next, print an empty line just to add some space under the bunny

Click the "Run" button, and verify that a light blue bunny appears!

The code should look something like this:

```py
change_color('cyan')
print('() ()')
print('(^ ^)')
print('(u u)')
print('')
```

### Drawing a Second Bunny
Repeat the steps above to draw another bunny. This time, the bunny should be `'magenta'`!

The code should look something like this:

```py
change_color('magenta')
print('() ()')
print('(^ ^)')
print('(u u)')
print('')
```

## Using a Function
The code works alright for now, but it's kind of annoying to copy all of the commands to draw a bunny each time. Instead of copying the code, it can be placed within a _function_. Follow the steps below to define a `draw_bunny` function, and call it twice!

### Defining the Function
In the **main.py** file, make a couple of new lines right under the first line. For organizational purposes, functions can be defined at the top of the file.

1. On the new line, add the `def` keyword
1. On the same line, add the name of the function: `draw_bunny`
1. Still on that same line, add parentheses: `()`
1. For the last thing on that line, add a colon: `:`
1. Next, make a new line
    - The new line should be _indented_; Repl should handle this
1. Add the `print` command to print the bunny ears
1. Under that, still indented, print the bunny's face
1. Under that, still indented, print the bunny's body
1. Under that, still indented, print an empty line

The code for the _function definition_ should look something like this:

```py
def draw_bunny():
  print('() ()')
  print('(^ ^)')
  print('(u u)')
  print('')
```

### Calling the Function
Now, the cool thing is that the code never has to print the bunny out again! Other parts of the code can simply call the `draw_bunny` function.

Replace all of the existing bunny-drawing code with one command: `draw_bunny()`

The code should look something like this:

```py
change_color('cyan')
draw_bunny()

change_color('magenta')
draw_bunny()
```

Click the "Run" button and verify that everything works the same as it did before! Now, it is much easier to draw other bunnies with different colors.

## Adding Whiskers
One of the other benefits of having the `draw_bunny` function is that if the bunny needs to change, it only needs to be updated in _one place_. For example, it may be desirable to add whiskers to the bunny art! Update the code in the `draw_bunny` function definition to add some whiskers.

1. Find the `def draw_bunny():` part of the code
1. Add a space in front of each printed line
1. Add a `>` on the left side of the bunny face, and a `<` on the right side
1. Run the code again, and verify that both bunnies have whiskers!

The new code for the `draw_bunny` function definition should look something like this:

```py
def draw_bunny():
  print(' () () ')
  print('>(^ ^)<')
  print(' (u u) ')
  print('')
```

## Defining an Owl Function
This same pattern can be followed to create all sorts of text-based art. For example, it may be desirable to have the program draw an owl:

```
 ,_,
(O,O)
(   )
-m-m-
```

Define a new function named `draw_owl` that prints a text-based owl to the screen.

1. In the **main.py** file, make a couple new lines under the `draw_bunny` function definition
  - Make sure to keep all the code in the `draw_bunny` body intact
1. Add the `def` keyword on the new line
1. On the same line, add the name of the function: `draw_owl`
1. Still on that line, add parentheses and a colon: `():`
1. Make a new line (it should be indented automatically)
1. Add an indented `print` command for each line of the owl
  - `' ,-, '`
  - `'(0,0)'`
  - `'(   )'`
  - `'-m-m-'`
1. Add another empty `print` command

The code for the `draw_owl` function definition should look something like this:

```py
def draw_owl():
  print(' ,_,')
  print('(O,O)')
  print('(   )')
  print('-m-m-')
  print('')
```

Note that nothing will happen when the code runs - this function has been _defined_, but it still needs to be _called_!

## Calling the Owl Function
Calling the `draw_owl` function will be similar to calling the `draw_bunny` function. Change the colors, and call the function with `draw_owl()` to see some owls in the console!

1. In the **main.py** file, find the first `draw_bunny` function call, and make a new line
1. Add code to change the text color to `'green'`
1. Under that, call the `draw_owl` function
1. Make a new line under that, and change the text color to `'orange'`
1. Under that, call the `draw_owl` function again
1. Run the program, and verify that two colorful owls appear in the console!

The code for this part should look something like this:

```py
change_color('green')
draw_owl()

change_color('orange')
draw_owl()
```

## Final Code
The code in the **main.py** file should look something like this:

```py
from colors import change_color

change_color('blue')
print('Hello!')
print('')

def draw_bunny():
  print(' () () ')
  print('>(^ ^)<')
  print(' (u u) ')
  print('')

def draw_owl():
  print(' ,_,')
  print('(O,O)')
  print('(   )')
  print('-m-m-')
  print('')

change_color('cyan')
draw_bunny()

change_color('green')
draw_owl()

change_color('orange')
draw_owl()

change_color('magenta')
draw_bunny()
```