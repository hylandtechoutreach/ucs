# Go Bananas: Code-Along Activity
Add some styling to a website advertising bananas.

**[Click here for the Starter Project.](https://replit.com/@HylandOutreach/GoBananas#index.html)** Fork the project to begin.

## Current Webpage
So far, there is a simple website that has a lot of information about a banana. All of the information is there, but the page doesn't really pop in the right way.

There is an **index.html** file that includes a `<style></style>` element. There is already some CSS there, but not much!

## Updating the First Style
Bananas are often yellow, so it would make sense to make the background of the page a nice yellow-ish color. This is possible with the `background` property.

1. Open the **index.html** file for editing, and find the `<style>` element
1. Notice the `body` selector - this will style the whole page!
1. Notice the curly brackets (`{}`): these open the new block, also called a **ruleset**
1. Within the curly brackets, update the **declaration** so that sets the background color to yellow-ish
    - Notice where it says `background`
    - That is followed by a colon (`:`)
    - After that, provide the name of the yellow-ish color (`lightgoldenrodyellow`)
    - Make sure the line still ends with a semi-colon (`;`)
1. Run the code, and verify that the background changes color!

The CSS should look something like this:

```css
body {
    background: lightgoldenrodyellow;
    color: purple;
}
```

## Adding More `body` Styles
Any **declaration** within the `body` **ruleset** will apply by default to any element on the webpage.

1. Make the text color for the page a deep blue - update the text color property that exists already
	- Property: `color`
	- Value: `darkblue`
1. Make the font for the page a nice sans-serif font - create a new declaration on its own line in the `body` ruleset
	- Property: `font-family`
	- Value: `Tahoma`

At this point, the CSS should look like this:

```css
body {
    background: lightgoldenrodyellow;
    color: darkblue;
    font-family: Tahoma;
}
```

## Styling the Images
The images on the page are good, but they are a little too big. Use CSS to update their size.

1. Within the `<style></style>` element, create a new ruleset for images
	- Start on a new line under the `body` ruleset (outside of the `{}`)
	- Create an image ruleset with `img` and opening/closing curly brackets (`{}`)
1. Within the `img` ruleset, add a declaration for height
	- Property: `height`
	- Value: `150px`

The new ruleset should look like this:

```css
img {
    height: 150px;
}
```

## Styling the Main Header
The top `h1` should have some special styling as the header for the whole page.

1. Within the `<style></style>` element, create a new ruleset for `h1`
1. In the `h1` ruleset, create a declaration setting the color to goldenrod
	- Property: `color`
	- Value: `goldenrod`
1. In the `h1` ruleset, create a declaration setting the font to comic sans
	- Property: `font-family`
	- Value: `cursive`
1. In the `h1` ruleset, create a declaration setting the text size to 50 pixels
	- Property: `font-size`
	- Value: `50px`

The `h1` ruleset should look like this:

```css
h1 {
    color: goldenrod;
    font-family: cursive;
    font-size: 50px;
}
```

## Final CSS
By the end of the activity, the code within the `<style></style>` element should look something like this:

```css
body {
    background: lightgoldenrodyellow;
    color: darkblue;
    font-family: Tahoma;
}

img {
    height: 150px;
}

h1 {
    color: goldenrod;
    font-family: cursive;
    font-size: 50px;
}
```
