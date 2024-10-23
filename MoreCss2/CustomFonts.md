# Custom Fonts
Follow this guide to learn how to add a custom font to a website using [Google Fonts](https://fonts.google.com/)!

## Setup
Follow these steps to set up a new project.

1. [Click here to go to the Starter project](https://vscodeedu.com/vrOC9IIT1pw19o5loViI)
1. Open the **index.html** file for editing
1. Add a `class` attribute to the second `<p>` element that says "Style this paragraph..."
1. Set the `class` to be `update`
1. Find the `<style></style>` element
1. There, create a new ruleset to style the paragraph by its class
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

## Getting the Font Code
The cool thing about Google Fonts is that it will provide all the code needed to add the custom font. The first step is to copy that code.

### Copying the `@import`
First, copy the `@import` code for a selected font.

1. [Click here to go to Google Fonts](https://fonts.google.com/)
1. Search through and find a nice font to use
    - For example, [Ms Madi](https://fonts.google.com/specimen/Ms+Madi)
1. Click on the desired font  
    ![](Assets/ClickMsMadi.png)
1. Scroll down on the page, and find the "Regular 400 ⊕" button  
    ![](Assets/AddFont.png)
1. The "Selected family" pane should appear on the right  
    ![](Assets/SelectedFamily.png)
1. In that pane, under the "Use on the web" section, click the "@import" selector  
    ![](Assets/AtImport.png)
1. Highlight the code within the `<style></style>` tags (starting with `@import`) and copy it  
    ![](Assets/CopyImport.png)
1. Go back to the Glitch project, and open the **index.html** file for editing
1. Make space at the very top of the `<style></style>` element, and paste the code (starting with `@import`)
    - This should be above any ruleset, outside of any `{` and `}`

The code at the top of the `<style></style>` element should end up looking something like this:

```css
@import url('https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap');
```

### Copying the `font-family` Property
Now that the font has been imported, it will be possible to use it in the CSS!

1. Go back to [Google Fonts](https://fonts.google.com/)
1. Back in the "Selected family" pane, find the "CSS rules to specify families" section
1. In there, highlight and copy the code starting with `font-family:`  
    ![](Assets/CopyFontFamily.png)
1. Go back to the Glitch project, and open the **index.html** file for editing
1. Within the `.update` ruleset, (between `{` and `}`), paste the code (starting with `font-family`)

That should be it! Try running the project and viewing the page. The `<p>` element should be styled with the new font!

The code should end up looking something like this:

```css
@import url('https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap');

.update {
  font-family: 'Ms Modi', cursive;
}
```
