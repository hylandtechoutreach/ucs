# Text Shadows
Follow this guide to learn how to add a text shadow to a website using the [`text-shadow`](https://www.w3schools.com/cssref/css3_pr_text-shadow.asp) CSS property!

## Setup
The setup for each new concept will be very similar.

1. [Click here to go to the Starter Repl project](https://replit.com/@HylandOutreach/MoreCssStart)
1. Fork the project
1. Open the **index.html** file for editing
1. Add a `class` attribute to the second `<p>` element that says "Style this paragraph..."
1. Set the `class` to be `update`
1. Open the **style.css** file for editing
1. Create a new ruleset to style the paragraph by its class
    - Use `.update` as the selector
    - After the selector, add curly brackets (`{` and `}`)

At this point, the added code should look something like this:

**index.html**

```html
<p class="update">Style this paragraph...</p>
```

**style.css**

```css
.update {

}
```

The project should be ready for styling.

## Adding the Shadow
The cool thing about the `text-shadow` property is that there are a ton of different possibilities. You can control the color, location, and blur of the shadow!

### Example
It looks something like this:

```css
text-shadow: 1px 4px 8px blue;
```

Here is what each item does:

- _h-shadow_ (`1px` in the example): position of the horizontal shadow
- _v-shadow_ (`4px` in the example): position of the vertical shadow
- _blur-radius_ (`8px` in the example): how much to blur the shadow
- _color_ (`blue` in the example): the color the shadow should be

Adding the property example above to a piece of text would make it look like this:

![](Assets/BlueShadow.png)

### Updating the Project
Now, put some of that code in the Repl project.

1. Open the **style.css** file for editing
1. In the `.update` ruleset (between `{` and `}`), create a new property declaration with `text-shadow`
1. Set the value for the `text-shadow` property to be `1px 4px 8px blue`

Load up the page, and see the shadow appear! The code in the **style.css** file should look something like this:

```css
.update {
  text-shadow: 1px 4px 8px blue;
}
```

Try playing around with the different values to see where it leads.

[Click here for an interactive `text-shadow` generator tool!](https://cssgenerator.org/text-shadow-css-generator.html) This site will allow you play around with the values, and will give you code to copy and paste at the end.