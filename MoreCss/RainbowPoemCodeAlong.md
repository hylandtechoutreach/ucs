# Rainbow Poem Code-Along
In this activity, take an existing poem and make it your own!

**[Click here for the starter website project.](https://replit.com/@HylandOutreach/FreshPrince#index.html)** Fork the project to begin.

## Current Site
Start by taking a look at the existing website. Try to figure out what it does! In the HTML, it has a header, a picture, and a few paragraphs with lines from a poem. In the CSS, it sets some of the basic colors and creates a couple classes. The first two lines of the poem are rainbow, but the rest are plain white. In this activity, update the HTML and CSS so that the whole poem is a rainbow!

## First - Fixing the Image
Before updating the text, start by updating the CSS for the image. Set its width and its [border](https://www.w3schools.com/css/css_border.asp).

1. Find the `<style></style>` element
1. Create a new ruleset for `img`
  - Start with `img`
  - Then add `{` and `}`
  - Press Enter between them to open up a new line
1. On the new line, create a declaration setting `width` to `150px`
1. Make another line under that
1. Create another declaration setting `border` to `1px solid pink`

The code should look something like this:

```css
img {
  height: 150px;
  border: 5px solid pink;
}
```

## A Green Line
In the HTML, the first _three_ `<p>` elements for the poem have `class` attributes. Two of these are doing what they are supposed to-- the `class="red"` is setting the color to red, and the `class="yellow"` is setting the color to yellow. Why is the `class="green"` not working? Take a look at the CSS.

In the CSS, there are two rulesets that change the color: `.red` and `.yellow`. These set the `<p class="red">` to red and the `<p class="yellow">` to yellow.

**Add another ruleset to set all `<p class="green">` elements to be green.**

>Hint: for a nice bright green, use `lime`.

```css
.green {
    color: lime;
}
```

After adding that CSS, the third line should turn green!

## A Blue Line
Setting the fourth line to blue will be very similar to the first three lines - this time, it will be necessary to update both the HTML and the CSS.

### CSS
First, create a new ruleset to select elements with a `class` of `blue`: `.blue { }`

Within that ruleset, set the color to a nice light blue: `color: cyan`

```css
.blue {
    color: cyan;
}
```

After adding that CSS, nothing should happen - the HTML still needs to be updated.

### HTML
Now that a ruleset has been created, it can be used to style HTML elements.

1. In the HTML file, find the `<p>` element with the fourth line of the poem
1. Add a `class` attribute to the paragraph
1. Set the value of the `class` attribute to `blue`

```html
<p class="blue">I'll tell you how I became the prince of a town called Bel-Air</p>
```

After adding that in the HTML, the fourth line should become blue!

## The Second Verse
For the second verse, only the HTML will need to change. Update te next four `<p>` elements so that they show up in rainbow colors!

For each paragraph, add a `class` attribute with a value for either `red`, `yellow`, `green`, or `blue`. After updating the HTML, check out the site and make sure the text changes color properly!

## Final Code
By the end of the activity, the code should look something like this!

```html
<html>
  <head>
    <style>
      body {
        background: black;
        color: white;
      }

      .red {
        color: red;
      }

      .yellow {
        color: yellow;
      }

      img {
        height: 150px;
        border: 5px solid pink;
      }

      .green {
        color: lime;
      }

      .blue {
        color: cyan;
      }
    </style>
  </head>
  <body>
    <h1>My Poem</h1>
    <img src="fresh.jpg">
    <p class="red">Now this is a story all about how</p>
    <p class="yellow">My life got flipped turned upside down</p>
    <p class="green">And I'd like to take a minute, just sit right there</p>
    <p class="blue">I'll tell you how I became the prince of a town called Bel-Air</p>
    
    <p class="red">In West Philadelphia born and raised</p>
    <p class="yellow">On the playground is where I spent most of my days</p>
    <p class="green">Chillin' out, maxin', relaxin' all cool</p>
    <p class="blue">And all shootin' some b-ball outside of the school</p>
  </body>
</html>
```
