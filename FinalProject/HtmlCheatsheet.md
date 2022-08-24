# HTML Elements Cheatsheet
## HTML - `html`
Surrounds the entire HTML document

```html
<html>

</html>
```

## Body - `body`
Represents the **content** of an HTML document

```html
<html>
    <body>
    
    </body>
</html>
```

## Header - `h1`-`h6`
Represents different sizes of section headings

```html
<h1>I am the biggest header</h1>
<h6>I am the smallest header</h6>
```

## Paragraph - `p`
Represents a paragraph, usually blocks of text

```html
<p>Normal text</p>
```

## Link - `a`
Creates a hyperlink to another URL that will navigate when clicked

```html
<a href="https://google.com">Google</a>
```

### Attributes
- `href`: The URL where the link will navigate

## Image - `img`
Embeds an image into a webpage

```html
<img src="dog.jpg">
```

### Attributes
- `src`: The URL of the image

### Notes
- Does not require a closing tag
- Right-click an image on the web and click "Copy Image URL" or "Copy Image Address" to copy the proper pointer to the picture

## Embedding YouTube Videos
HTML uses an `iframe` element to embed content like YouTube videos onto a website. Follow these instructions to copy the embed code and paste it into your page: [https://support.google.com/youtube/answer/171780?hl=en](https://support.google.com/youtube/answer/171780?hl=en)

## Lists - `ul`, `ol`, `li`
Represents a list of items, rendered as a bulleted or numbered list

```html
<p>Shopping List</p>
<ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Cheese</li>
</ul>

<p>Recipe</p>
<ol>
    <li>Scramble Eggs</li>
    <li>Add Milk</li>
    <li>Add Cheese</li>
    <li>Fry</li>
</ol>
```