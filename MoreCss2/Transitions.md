# Transitions
Follow this guide to learn how to add a transition to a website using the [`transition`](https://www.w3schools.com/css/css3_transitions.asp) CSS property! This also makes use of the `hover` [pseudo-class](https://www.w3schools.com/css/css_pseudo_classes.asp).

## Setup
The setup for this concept will be a little more involved than other concepts.

1. [Click here to go to the Starter Repl project](https://replit.com/@HylandOutreach/MoreCssStartStyle)
1. Fork the project
1. Open the **index.html** file for editing
1. Add a `class` attribute to the second `<p>` element that says "Style this paragraph..."
1. Set the `class` to be `update`
1. Find the `<style></style>` element
1. Create a new ruleset to style the paragraph by its class
    - Use `.update` as the selector
    - After the selector, add curly brackets (`{` and `}`)
1. Create _another_ new ruleset, this one styling the paragraph _when it is hovered_
    - Use `.update:hover` as the selector
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

.update:hover {

}
```

The project should be ready for styling.

## Adding the Hover State
First, set some styles that will only apply when you _hover over_ the `<p>` element on the website.

1. Open the **index.html** file for editing, and locate the `<style></style>` element
1. Find the `.update:hover` ruleset
    - This sets styles for the `<p>` _only when someone has their cursor on top of it_
1. In between the `{` and `}`, create a new property declaration with `color`
1. Set the value for the `color` property to be `blue`

Load up the page, hover over the paragraph, make sure it turns blue!

The CSS code for this part should look something like this:

```css
.update:hover {
  color: blue;
}
```

## Adding the Transition
Right now, hovering over the paragraph will update it immediately. However, sometimes a smoother transition is desired. That's where the `transition` property comes in handy.

1. In the **index.html** file, locate the `<style></style>` element
1. Find the `.update` ruleset
1. In between the `{` and `}`, create a new property declaration with `transition`
1. Set the value for the `transition` property to `color 1s`
    - This will mean that when someone hovers over the paragraph, it will take one second to turn blue!

Load up the page and hover over the paragraph. Make sure it takes a second for the text color to change to blue!

The CSS code within the `<style></style>` element should look something like this:

```css
.update {
  transition: color 1s;
}

.update:hover {
  color: blue;
}
```
