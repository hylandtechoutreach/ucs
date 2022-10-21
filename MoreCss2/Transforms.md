# Transforms
Follow this guide to learn how to add a transform to a website using the [`transform`](https://www.w3schools.com/cssref/css3_pr_transform.asp) CSS property!

## Setup
Follow these steps to set up a new project for transforms.

1. [Click here to go to the Starter Repl project](https://replit.com/@HylandOutreach/MoreCssStartStyle)
1. Fork the project
1. Open the **index.html** file for editing
1. Add a `class` attribute to the second `<p>` element that says "Style this paragraph..."
1. Set the `class` to be `update`
1. Find the `<style></style>` element
1. Create a new ruleset to style the paragraph by its class
    - Use `.update` as the selector
    - After the selector, add curly brackets (`{` and `}`)

At this point, the added code should look something like this:

**HTML**

```html
<p class="update">Style this paragraph...</p>
```

**CSS**

```css
.update {

}
```

The project should be ready for styling.

## Adding a Transform
The cool thing about the `transform` property is that there are a ton of different possibilities. You can do things like rotate, scale, move, and skew! This guide will only show one of the functions - the `skewY` function.

1. Open the **index.html** file for editing, and find the `<style></style>` element
1. In the `.update` ruleset (between `{` and `}`), create a new property declaration with `transform`
1. Set the value for the `transform` property to be `skewY(-20deg)`

Load up the page, and see the text skew The code in the `<style></style>` element should look something like this:

```css
.update {
  transform: skewY(-20deg);
}
```

Try playing around with the different values to see where it leads. Some different functions to try include `rotate`, `scale`, `translate`, and `perspective`.

[Click here for an interactive `transform` generator tool!](https://html-css-js.com/css/generator/transform/) This site will allow you play around with the different possibilities, and will give you code to copy and paste at the end.
