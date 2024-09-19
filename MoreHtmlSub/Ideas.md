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