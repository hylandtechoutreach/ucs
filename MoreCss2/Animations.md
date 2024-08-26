# Animations
Follow this guide to learn how to add an animation to a website using the [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)!

>_[Click here for an in-depth introduction to the concept.](https://www.w3schools.com/css/css3_animations.asp)_

## Setup
The setup for this concept will be fairly similar to the other concepts.

1. [Click here to go to the Starter project](https://glitch.com/edit/#!/remix/more-css-start-style)
1. Open the **index.html** file for editing
1. Add a `class` attribute to the second `<p>` element that says "Style this paragraph..."
1. Set the `class` to be `update`
1. Find the `<style></style>` element
1. Create a new ruleset to style the paragraph by its class
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

## Defining an Animation with Keyframes
When animating using CSS, the styles are defined at certain **keyframes**. _In animation and filmmaking, a [keyframe](https://en.wikipedia.org/wiki/Key_frame) is a drawing or shot that defines the starting and ending points of a smooth transition._

In CSS, these keyframes represent the styles of an element at a given point in time, during the animation cycle.

The goal for this animation will be to constantly transition from `orange` to `green`.

To make the color `orange` at the very beginning of the animation (or, `0%` of the way through), the keyframe would look like a normal CSS ruleset, but with `0%` as the selector.

Open up the **index.html** file for editing, and make some more space at the top of the `<style></style>`. Add this code to define the first _frame_ of the animation:

```css
0% {
  color: orange;
}
```

Next, to make the color `green` at the end of the animation (i.e., `100%` of the way through), add the following ruleset under the first one:

```css
100% {
  color: green;
}
```

Now, all that's left is to put these two keyframes together is a `@keyframes` ruleset that includes both frames. A keyframes ruleset consists of:

- `@keyframes`
- animation name
- curly brackets (`{}`)
- frame rulesets within `{` and `}`

So, the `0%` and `100%` ruleset need to go _inside_ of the `@keyframes` ruleset. We'll call this animation `pulse`. At the very top of the `<style></style>` element, open up the definition with:

```css
@keyframes pulse {
```

For clarity, indent the `0%` and `100%` rulesets. Then, under both of those rulesets, close out the `@keyframes` with a `}`!

The whole animation definition should look something like this:

```css
@keyframes pulse {
  0% {
    color: orange;
  }

  100% {
    color: green;
  }
}
```

## Using an Animation on an HTML Element
After defining an animation's keyframes, it must be applied to an element to take effect. Apply this animation to the `<p class="update>` paragraph by creating a declaration that points to the `pulse` animation.

Note that there are many options for the `animation` property:

- `animation-duration` configures the length of time that an animation should take to complete one cycle
- `animation-iteration-count` configures the number of times the animation should repeat
- `animation-timing-function` configures the timing of the animation
- `animation-direction` configures whether or not the animation should alternate direction on each run through the sequence
- `animation-name` specifies the name of the `@keyframes` ruleset describing the animation's keyframes

For the purposes of this walkthrough, all of them can be combined into one declaration, with the following format:

```css
animation: animation-duration animation-iteration-count animation-timing-function animation-direction animation-name;
```

1. Within the `<style></style>` element, find the `.update` ruleset
1. Within the ruleset (between `{` and `}`), create a new declaration with a property of `animation`
1. To put together all configuration for the animation, list each value separated by a space:
    - `1s` so the animation takes one second to complete
    - `infinite` so the animation goes on forever
    - `linear` so the animation happens smoothly
    - `alternate` so the animation goes smoothly between orange and green
    - `pulse` so the animation uses the keyframes specified by the `pulse` animation

The ruleset in the `<style></style>` for the `<p class="update">` paragraph should look something like this:

```css
.update {
  animation: 1s infinite linear alternate pulse;
}
```

Load up the page, and make sure the text changes color continuously!

## Next Steps
This was just a small example of what's possible with CSS animations. You can animate _any_ CSS property, and create any number of keyframes! [Click here for to dive deeper into everything you can do.](https://www.w3schools.com/css/css3_animations.asp)
