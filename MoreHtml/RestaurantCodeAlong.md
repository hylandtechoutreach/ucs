# Restaurant Website: Code-Along Activity
Congratulations, you just won $250,000 in a prestigious cooking competition! The only catch is that all of that money has to go toward starting a restaurant. You can serve any type of food you'd like, but you _also_ have to make a website for your new endeavor. Follow the instructions below!

[**Click here to open the Restaurant Website Repl project.**](https://replit.com/@HylandOutreach/RestaurantWebsiteStart) Fork the project to begin!

## Setup
Make sure to log into your Repl account before proceeding!

1. Open and fork the [Restaurant Website Repl project](https://replit.com/@HylandOutreach/RestaurantWebsiteStart) to begin
1. In your new project, open up the **index.html** file
1. Add the `html` tags (opening and closing)
1. Add the `body` tags within the `html` tags

It should look something like this:

```html
<html>
    <body>
    </body>
</html>
```

## Adding the Basics
Add a header, image, and paragraph to the site. For this example, we will be making a Pizza restaurant - but feel free to choose a different food, and a different restaurant name.

1. Add an `h1` header that says "Alfredo's Pizza Cafe" between the `<body>` and `</body>`
1. Under the `h1`, add an `<img >` of the pizza
    - Set the `src` attribute to "pizza.jpg"
    - Feel free to use a different image for a different restaurant
1. Under the `img`, add a `p` that says "WE'RE NOT FINE DINING; WE'RE JUST FINE FOOD!"
    - Note that this is the actual slogan of the actual Alfredo's Pizza Cafe
1. Open your webpage in a browser and make sure it appears as expected!

At the end of this section, your code should look like this:

```html
<html>
    <body>
        <h1>Alfredo's Pizza Cafe</h1>
        <img src="pizza.jpg">
        <p>WE'RE NOT FINE DINING; WE'RE JUST FINE FOOD!</p>
    </body>
</html>
```

## Adding a YouTube Video
One fun way to attract customers is to add a video to the site! This is possible using YouTube's built-in embedding feature.

1. Go to [YouTube](https://youtube.com)
1. Find a video that would make sense on your website (like [this one](https://www.youtube.com/watch?v=wusGIl3v044) for a pizza restaurant)
1. From the YouTube video, click on the "SHARE" button
1. In the pop-up, click on the "Embed" button
1. In the lower right corner, click "COPY" to copy the code
1. Go back into Replit, and paste the code into the **index.html** file, under the `<p></p>` element
1. Run the program, and verify that the video appears on the page!

It should look something like this:

```html
<html>
    <body>
        <h1>Alfredo's Pizza Cafe</h1>
        <img src="pizza.jpg">
        <p>WE'RE NOT FINE DINING; WE'RE JUST FINE FOOD!</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/wusGIl3v044" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </body>
</html>
```

## Adding Locations
Next, it's important to have the locations for the restaurant.

1. Add an `h2` header that says "Locations" under the `</iframe>`
1. Under the `h2`, add some locations within `p` elements
   - There should be at least _three_ locations
1. Open your webpage in a browser and make sure it appears as expected!

At the end of this section, your code should look something like this:

```html
<html>
    <body>
        <h1>Alfredo's Pizza Cafe</h1>
        <img src="pizza.jpg">
        <p>WE'RE NOT FINE DINING; WE'RE JUST FINE FOOD!</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/wusGIl3v044" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <h2>Locations</h2>
        <p>Scranton, PA</p>
        <p>Albany, NY</p>
        <p>Utica, NY</p>
    </body>
</html>
```

## Adding a Menu
The website has information now, but we still need to add in a menu!

1. Under the other code in the `<body></body>`, add an `<h2><h2>` element
    - It should say "Menu"
1. Add some specialty pizzas under the header, each in `<p></p>` elements

```html
<h2>Menu</h2>
<p>Hawaiian Pizza</p>
<p>Meat Lovers Pizza</p>
<p>Meat Haters Pizza</p>
```

## Adding Toppings
Next, add a section that lists all the toppings a customer can add.

1. Under the last `</p>` in the `body`, make a new line
1. Add an `h3` that says "Toppings"
1. Under the `</h3>`, create a `<p></p>` element
1. Between the `<p>` and `</p>`, add the text "Pepperoni"
2. Continue this process and add two more `<p></p>` elements under the first one

The code for this part should look something like this:

```html
<h3>Toppings</h3>
<p>Pepperoni</p>
<p>Mushrooms</p>
<p>Extra cheese</p>
```

Run the program, and verify that the toppings list appears on the menu!

## Linking to the Actual Website
Alfredo's Cafe has an actual website that visitors may be interested in seeing. At the bottom of the page, add a hyperlink to this website!

1. Add a `h3` element saying "Alfredo's Cafe Site"
1. Under that, add an `a` element
1. Set the `href` attribute of the `a` element to `"https://www.alfredoscafe.com/"`
1. Set the text between `<a>` and `</a>` to say "Click here"

The could should look something like this:

```html
<h3>Alfredo's Cafe Site</h3>
<a href="https://www.alfredoscafe.com/">Click here</a>
```

## Final HTML
By the end, the HTML should look something like this:

```html
<html>
    <body>
        <h1>Alfredo's Pizza Cafe</h1>
        <img src="pizza.jpg">
        <p>WE'RE NOT FINE DINING; WE'RE JUST FINE FOOD!</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/wusGIl3v044" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <h2>Locations</h2>
        <p>Scranton, PA</p>
        <p>Albany, NY</p>
        <p>Utica, NY</p>

        <h2>Menu</h2>
        <p>Hawaiian Pizza</p>
        <p>Meat Lovers Pizza</p>
        <p>Meat Haters Pizza</p>

        <h3>Toppings</h3>
        <p>Pepperoni</p>
        <p>Mushrooms</p>
        <p>Extra cheese</p>
        
        <h3>Alfredo's Cafe Site</h3>
        <a href="https://www.alfredoscafe.com/">Click here</a>
    </body>
</html>
```
