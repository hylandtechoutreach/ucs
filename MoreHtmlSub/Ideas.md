# Ideas
🤔💭

## Change the Font
In the [starter project](https://vscodeedu.com/9PVuag6hDfE6U4sdd8tt), there are a lot of fonts imported into the site. Open the **style.css** file to see the code that does that - there is a big list of fonts at the bottom of the file!

### Setting Up
If you're using a previous project and you don't have the right code, copy this code to the top of your **style.css** file:

```css
@import url('https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Butterfly+Kids&family=Dancing+Script:wght@400..700&family=Honk&family=Lacquer&family=Limelight&family=Oswald&family=Pirata+One&family=Single+Day&family=Slackey&family=Workbench&family=Yarndings+12&display=swap');
```

Then, you can replace the font name after `font-family` with one of these fonts, like this:

```css
body {
  /* ... */
  font-family: "Workbench";
  /* ... */
}
```

### Full List of Fonts
[Click here for a full list of fonts you can use if you copy the `@import` statement into your CSS file.](FontList.md)

## Add Pictures
Create a whole gallery of pictures on your website. See if you can add up to five more pictures to the bottom of your page! An image looks like this:

```html
<img src="REPLACETHISWITHAURLFORAPICTURE">
```

The thing that goes in between the quotation marks should be a URL for your picture. You should choose "Copy image URL" to make sure you have it, then paste it into your code between the quotation marks.

## Add a Story
Add a lot more text, using `<p>` elements. You can tell a story, or you can share more about the topic of your site. It could look something like this:

```html
<p>This is one line of my story. It's kind of long, but not too long.</p>
<p>This is another line, because it's in its own paragraph element.</p>
<p>This is the third line.</p>
```

## Create a Gradient Background or a Background Image
Currently, the background of the website is just a solid color. But it can be a gradient color, or even an image!

### Background Gradient
Luckily, there is a website that generates CSS code for gradients.

1. Open a new tab and go to [cssgradient.io](https://cssgradient.io)
1. Play around with the color selection tools to find a nice gradient to use
    - Select different colors for each point on the line
    - Change angles or gradient type
    - Add new color points
    - Do whatever makes it look the best!
1. Once a good gradient is found, scroll down a bit to the **CSS** section
1. Click the "Copy to Clipboard" button at the bottom of the **CSS** box
1. Go back to the code, and open the **style.css** file for editing
1. Within the `body` rule, (between `{` and `}`), paste the code (starting with `background`)
1. Save the project to see the background change!

That should be it! The code should end up looking something like this:

```css
body {
  background: rgb(34,193,195);
  background: linear-gradient(163deg, rgba(34,193,195,1) 0%, rgba(104,191,147,1) 10%, rgba(101,175,65,1) 40%, rgba(253,240,45,1) 100%);
}
```

### Background Image
It is also possible to give the page a background image. 

1. Find an image online
1. Copy the image address
1. Open the **style.css** file
1. Remove the value for the `background` property
1. Replace the value with `url("")`
1. Inside the quotes, paste the image address
1. Save the project to see the background change!

It should look something like this:

```css
body {
    background: url("https://cdn.wallpaperhub.app/cloudcache/6/9/0/e/e/f/690eefe3ba1f553e0ea527f51ee407b604b681b4.jpg");
}
```

## CSS: Header Text Shadow
Another neat CSS trick is to add text shadow. For this example, add text shadow _only_ to the `h1` header.

1. In the **style.css** file, make a new line at the very bottom under everything
1. Create a new rule for the top header by adding `h1` and `{`
    - This will mean that all styles apply to each `h1` HTML element
1. Make a new line, and press space a couple times
1. There, add a new property: `text-shadow: red -1px 1px`
1. Make another new line, and add the closing `}` curly bracket
1. Save the project to see the shadow!
1. Update the numbers and the color to see how it changes the effect

The code should look something like this:

```css
h1 {
    text-shadow: red -1px 1px;
}
```

## CSS: Change Text Color on Hover
To make the website feel a bit more **🌟 i n t e r a c t i v e 🌟**, update the styles when hovering over certain elements on the page!

1. In the **style.css** file, create a new rule for `p` at the bottom of the file
    - The styles in this rule will only affect `p` elements
1. Add the `color` property with a value of `orange`
    - Notice that the text color changed
1. Update the beginning part so that instead of `p`, it is `p:hover`
    - This means the styles will only apply when the user hovers over the `p` elements
1. Save the project, and hover over the list items to see them change!
1. Update the values to change the effect

```css
p:hover {
  color: orange;
}
```

## CSS: Animations
[Click here for a guide to CSS animations.](https://www.w3schools.com/css/css3_animations.asp)
