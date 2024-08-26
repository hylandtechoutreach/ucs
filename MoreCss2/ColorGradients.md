# Color Gradients
Follow this guide to learn how to add a color gradient to a website using [CSS Gradient](https://cssgradient.io/)!

## Setup
The setup for this concept is fairly simple.

1. [Click here to go to the Starter project](https://glitch.com/edit/#!/remix/more-css-start-style)
1. Open the **index.html** file, and find the `<style></style>` element
1. Create a new ruleset to style the whole page
    - Use `body` as the selector
    - After the selector, add curly brackets (`{` and `}`)

At this point, the CSS code within the `<style></style>` element should look something like this:

```css
body {

}
```

The project should be ready for styling.

## Getting the Gradient Code
The cool thing about CSS Gradient is that it will provide all the code needed to add the colors. Copy that code, and paste it into the CSS for the Glitch site.

1. [Click here to go to CSS Gradient](https://cssgradient.io/)
1. Play around with the color selection tools to find a nice gradient to use
    - Select different colors for each point on the line
    - Change angles or gradient type
    - Add new color points
    - Do whatever makes it look the best!
1. Once a good gradient is found, scroll down a bit to the **CSS** section
1. Click the "Copy to Clipboard" button at the bottom of the **CSS** box  
    ![](Assets/CopyGradientCss.png)
1. Go back to the Glitch project, and open the **index.html** file for editing
1. Within the `body` ruleset, (between `{` and `}`), paste the code (starting with `background`)

That should be it! The code within the `<style></style>` element should end up looking something like this:

```css
body {
  background: rgb(34,193,195);
  background: linear-gradient(163deg, rgba(34,193,195,1) 0%, rgba(104,191,147,1) 10%, rgba(101,175,65,1) 40%, rgba(253,240,45,1) 100%);
}
```
