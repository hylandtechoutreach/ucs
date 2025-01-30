# UCS Academy Crossover Episode: Poetry + Coding
In this lesson, students will write a poem, and put it on a website.

## Learning Objectives
Students will be able to...

- Recognize an additional use case for websites
- Publish their personal creative work for all to see
- Write the content of their poetry with HTML
- Customize the appearance of their poetry with CSS
- Make the computer read their poetry with JavaScript

## Agenda
This lesson consists of these components:

| Time | Activity |
|-|-|
| 10m | Poem Writing |
| 10m | VS Code Edu Setup |
| 10m | Poem Coding |
| 20m | Website Customization |
| 15m | Website Sharing |
| 5m | Conclusion |

## Component Breakdown
Here is a brief rundown of each part of the lesson.

### Poem Writing
For the first part of the lesson, students will take some time to write out poems on paper. The important thing is that each poem should have at least eight lines. Alternatively, a student could create multiple shorter poems. If they really do not want to write a poem, they can find a poem online to transcribe.

### VS Code Edu Setup
Students can click the link on the [lesson homepage](StudentDesc.md) to open their own starter project on VS Code for Education. They can get to the lesson homepage from **bit.ly/ucshyland**, and clicking on today's date.

#### VS Code Edu
**VS Code for Education** (or VS Code Edu) is basically a website that lets you make websites. You can choose files and share your work on the left, write code in the middle, and see the website you're building on the right. Every website is made of HTML - web browsers like Google Chrome take that HTML and turn it into a nice looking page.

#### Setup Instructions
Once the students click the link, here's what they should do next:

1. They should sign in with Google
1. When the project loads, they should click "Save a copy and edit" in the lower left corner
1. On the left, they should click the **index.html** file to open it

From there, they are ready to start coding.

### Poem Coding: HTML
The actual code for their poems should be fairly simple. Basically, they should change the text in the middle so it matches their poem. This is all within the **index.html** file, and is working with HTML code.

#### Title & Author
For example, the code starts like this:

```html
<h2>Poem Title</h2>
<h4>Poem Author</h4>
```

They should change that so that instead of "Poem Title" it has the title of their poem. They should **not** change any of the other symbols (`<h2>`, `</h2>`, or anything like that) - they just have to change the text. It could look something like this:

```html
<h2>The Red Wheelbarrow</h2>
<h4>William Carlos Williams</h4>
```

#### Poem Content
After that, there are some lines that look like this:

```html
<p>First line of the poem</p>
```

Each of those things makes a new line on the website. There are currently four lines. First, students should change the text in those four lines. Next, they should add _more_ new lines using the exact same format.

Every new line should start with `<p>`. That's `<` (less-than sign), `p` (the letter **p**), and `>` (greater-than sign).

After that, there should be the text for the line, e.g., `glazed with rain`.

After that, to end the line, there should be `</p>`. That's `<` (less-than), `/` (slash), `p`, (**p**), `>` (greater-than).

They should continue until there are at least eight lines - they should put their whole poem on their websites! By the end, it may look like this:

```html
<p>so much depends</p>
<p>upon</p>
<p></p>
<p>a red wheel</p>
<p>barrow</p>
<p></p>
<p>glazed with rain</p>
<p>water</p>
<p></p>
<p>beside the white</p>
<p>chickens</p>
```

_IMPORTANT NOTE: empty lines in the code do not create empty lines on the website. They can add a blank `<p></p>` to make space between lines._

### Website Customization: CSS
Once each student has updated the HTML code, and their poem is on the site - they can start to play around with the _appearance_ of their poem using CSS. CSS can change things like colors and fonts. On the left side, students should click **style.css** to open that file. There, they can change the background color, text color, font size, and font. There is a list of fonts below. They should make sure everything stays in the same format, and they only change the color/font names/sizes. The `body {`, `:`, `;`, and `}` all must stay in the same place.

There are a ton of additional things they can do - if a student wants to do something to change the appearance in a different way, they should ask!

They can also add images, or videos, or background music, or change the voice that reads the text, or any number of other things.

### Website Sharing
Students can share their sites using the link on the [lesson homepage](StudentDesc.md). The responses should appear on [this sheet](https://hylandsw-my.sharepoint.com/:x:/g/personal/joseph_maxwell_hyland_com/EbG-pbt-ErhAinTvxAFkmskBrFXAz1RavYVGuH2PpJXlgg?e=XtBaTX). Students are welcome to present if they'd like.

### Conclusion
At the end of the lesson, sum up the main takeaway: you can use HTML, CSS, and JavaScript to publish your creative work online. The possibilities of the web are endless, and it is a fantastic platform for many forms of artistic expression.
