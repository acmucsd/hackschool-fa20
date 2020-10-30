# HTML/CSS (10/15)

Workshop Link: [here](https://www.youtube.com/channel/UCCrzZLNm7IVohTW8yF1tbqw)

Slides Link: [here](https://docs.google.com/presentation/d/1deLFuS8gbHcKHVuc3LTzMjkX-v20nIw5YqVeREB77Cs/edit?usp=sharing)

Repo Link: [here](http://acmurl.com/hackschool-fa20)

Our Office Hours: [here](https://calendar.google.com/calendar/u/0/embed?src=c_9oo05l2mc019ai1u1emdg2s8g0@group.calendar.google.com&ctz=America/Los_Angeles)

In this workshop, we learned about HTML and CSS. Specifically, we learned about **how to create website elements** and **how to style webpage elements**.

We used these ideas to to:
- [x] Create pokemon images and descriptions
- [x] Create a navbar
- [x] Style the Pokemon Generator text


## What is HTML/CSS?

HTML (Hyper-Text Markup Language) is a front-end language. It is used for structuring websites. If a website is like a house, then the HTML elements would be the foundations, walls, roof, etc.

CSS (Cascading Style Sheet) is another front-end language. It is used for styling websites. If a website is like a house, then the CSS elements would be the paint, decorations, color, etc that are applied to HTML elements.

In Hack School, we will be using HTML to create elements of the Pokemon Generator. We will be using CSS elements to style these HTML elements.


### How to create website elements

We create website elements using HTML.

HTML consists of a series of [elements] which are called using tag names enclosed with arrows `<tag name>`. Usually, but not always, these elements require an end tag `<\tag name>`.

Let's look at an example.

#### `<!DOCTYPE html>`, `<html>` and `<\html>`

All HTML is enclosed in three tags: `<!DOCTYPE html>` and `<html>` at the beginning, and `<\html>` at the end.

`<!DOCTYPE html>` is a unique tag that does not require an end tag. It tells the compiler that the following code will be be written in HTML.

`<html>` is a tag that begins the HTML. `<\html>` is the end tag that corresponds to `<html>`, and marks the end of the HTML. Between `<html>` and `<\html>` is all of our HTML code.

These three tags can be seen here:

```
<!DOCTYPE html>
<html>

<!-- content here -->

<\html>
```

Note that `<!-- -->` is a HTML tag that denotes a comment. Comments are used to make notes in code, and don't actually do anything.


Inside of the `<html>` and `<\html>` tags are the `<head>` and `<body>` elements.


#### `<head>` and `<body>` elements

The `head` element contains all the website's metadata. Metadata might be shown in the top tab of the website, or it might not be shown.

The `body` element contains all the website's content. Content is what you see on the website itself.


#### Common HTML elements

##### `<img>` element

The `<img>` element creates an image. It is another unique element that does not have an end tag.

This element contains two attributes: `src` and `alt`. (If you look at `<img>` documentation, you will see that `<img>` has many more attributes, but we are  only using these two.)

The `src` attribute asks for a source where the computer can find an image. This can be a link, or, if the image is in the same folder as your code, you can simply give the file name. If you want to show an image, you NEED this attribute so the computer knows where to find the image!

The `alt` attribute asks for an alternate text to display if the computer cannot load or find the image. Unlike the `src` attribute, the `alt` attribute is not necessary to display an image; however, it is a good attribute to include for accessibility reasons or in case the user has slow wi-fi and can't load an image.

Here's an example of the `<img` element.

`<img src="image.jpg" alt="the thing didn't load" />`

##### `<a>` element

The `<a>` element creates a link. It has the end tag `</a`.
  
This element requires one attribute `href`. The `href` attribute asks for a reference link (the destination, if you click on the link). Usually, you can copy-paste a URL for this attribute. Or you can also give a file name as a destination (see example).

The text contained between the two `<a>` tags will serve as your link.

`<a href="other-site.html">Click on this to go to the link!</a>`

##### `<h>` element

The `<h>` elements are header elements. They display bold text on a webpage at different sizes with `<h1>Heading One</h1>` being the largest text, and `<h6>small</h6>` being the smallest heading.

For reference, look at Slide 14 of the HTML/CSS slides.

##### `<p>` element

The `<p>` element is the plain-text elements. They display regular, unbolded text on a website.

For reference, look at Slide 14 of the HTML/CSS slides.

##### `<div>` element

The `div` element is meant to create divisions in the HTML series. You can group elements together inside different `div` elements.

For example, if you want to do an Info section on a personal website, you might want to group your title ("Info about me!") with your next plain-text paragraph ("Hi! My name is Emily and I'm x, y and z!")

In HTML, this would look like:
```
<div>
<h1> Info about me! </h1>
<p> Hi! My name is Emily and I'm x, y and z! </p>
</div>
```

This will become more useful and important in conjunction with **classes**, **ids** and **flexbox**.
<br>

### How to style website elements

CSS determines the layout, design and color of a webpage. We style webpage elements with CSS.

While it is possible to style HTML using other HTML elements like `<font>`, it is a NIGHTMARE to implement in a website. You have to put the HTML style elements around every paragraph that you want styled, adding a new element for each change in font size/font color/background color/alignment...

Usually, when developing a website, developers use an external CSS.

CSS syntax follows this rule: `selector {property:value}`. We apply a `selector`(s) that describes an HTML element, and then we apply a `declaration` styling that element. Each declaration contains a `property` and a `value`.

For example, if we want to make each plain-text element have 14-pt font:

```p {font-size:14}```

This selects each element `p` in the HTML document, and applies a declaration. The declaration says that `font-size` (property) now is equal to `14` (value).

CSS contains other properties such as `background-color`, `color` and `border`. They are fairly self-explanatory, but if you want more information on CSS properties, check out the Simple Resources at the bottom of these notes!

#### Classes and Ids

Selecting all plain-text elements is okay if you want *all* plain-text `<p>`'s to have font-size of 14. But what if you only want some plain-text to be styled this way?

That's where classes and ids come in.

#### Classes
A **class** is an identifier that can be used for multiple HTML elements. If you give the HTML element the attribute `class="example_class"`, then you can style that element by using `.example_class` as your CSS selector.

Note that you add a `.` before your `example_class` to tell the CSS compiler that `example_class` is a CLASS.

For example, if you modify elements in your HTML document with `example_class`:
```
<h1 class="example_class"> This text will be red. </h1>

<p class="example_class"> This text will be red. </p>

<p> This text will not be red. </p>
```

Then you can style those modified elements in your CSS document:
```
.example_class {
    color: #FF0000;
}
```

#### ids

An **id** is an identifier that can only be used for *ONE* HTML element. If you give an HTML element the attribute `id="example_id"`, then you can style that element by using `#example_id` as your CSS selector.

Note that you add a `#` before your `example_id` to tell the CSS compiler that `example_id` is an ID.

For example, by tagging the first `<h1>` in HTML:
  
```
<h1 id="example_id"> This text will be red and 10-pt. </h1>

<h1> Remember, I can't give this element the id "example_id" because you can only use one id per HTML element! </h1>
```

You can reference the first `<h1>` in CSS by selecting the id:
  
```
#example_id {
    color: #FF0000;
    font-size: 10;
}
```

#### Selectors Using Combinators

If you want to get even more specific with CSS, you can select certain children and siblings in html `<div>` elements.

A **child** of a `div` element is an element INSIDE OF a `div`.

For example:
```
<div>
<p> I am a child of a div! This text will be styled red. </p>
</div>
```
You can select the first child of a `div` element by using a `>` in your CSS.
```
div > p {
  color: #FF0000;
}
```

A **sibling** of a `div` element is an element NEXT TO a `div`.

For example:
```
<div>
</div>
<p> I am a sibling of the above div! This text will be red. </p>
```
You can select the first sibling of a `div` element by using a `+` in your CSS.
```
div + p {
  color: #FF0000;
}
```

But wait, you ask. What if you want to select all the siblings or classes? Or if you want to select the second sibling or class, not the first?

<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c25735ac-4a7c-4e2f-aee5-e80eeac4beb6/dcupirs-ebe369c0-db50-4879-a0a5-98b705c66522.png/v1/fill/w_1024,h_640,strp/surprised_pikachu_hd_wallpaper___remastered_by_thorofi_dcupirs-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYzI1NzM1YWMtNGE3Yy00ZTJmLWFlZTUtZTgwZWVhYzRiZWI2XC9kY3VwaXJzLWViZTM2OWMwLWRiNTAtNDg3OS1hMGE1LTk4YjcwNWM2NjUyMi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BVqCJPQB-h2ld0gRfZElladNmrvk4rByFe2BRjUsjA8" alt="shocked pikachu meme" height=25% width=25%>

Then you need to create a class or id for your element(s)!

For example:
```
<div>
</div>
<p class="red"> I am a sibling of the above div! I want this to be red. </p>
<p class="red"> I am the SECOND sibling of the above div! I want this to be red too, so I need to create a red class! </p>
```
Then in the CSS, you can select the appropriate class or id to style:
```
div + .red {
  color: #FF0000;
}
```

### Flexbox

Flexbox is a series of CSS properties that allows you to style and arrange elements. It's especially helpful when you have different display screen sizes and you want your elements that move around the screen to acommodate. We often use flexbox with the html element `<div>`.

#### `justify-content`

`justify-content` is how    much        space is between each element.

#### `align-content`

`align-content` is where the element is aligned (for example, each line of this document's text starts at the left and moves outwards to the right, so this text is left-aligned, as most essays are.)

#### `flex-direction`

`flex-direction` is the order in which each element appears (for example, in rows? columns?

For more information about flexbox (it is very important for website design, and very much a pain in the butt if you don't know it), check out the resources at the bottom of the page.


## Project Implementation   

### Task 1: Create 3 Pokemon names, images and descriptions!

We want to do create pokemon names, images and descriptions for our Pokemon generator.

Create a file called viewPokemon.html.

We will use the **`<h>` HTML element**, the **`<img>` HTML element**, and the **`<p>` HTML element**.

See slide 18 of Part One for help.

<details> 
  <summary> Hint #1: Picture Perfect! </summary>
  Your img tag should contain the attribute <code>src="copied_URL_from_internet"</code> or, if you're feeling extra fancy, <code>src="path_on_computer"</code>. Remember that your img tag does NOT have an end tag!
</details>

<details> 
  <summary> Hint #2: Remember to end (tag) strong! </summary>
  Make sure each header and plain-text tag has an end tag sandwiching your header text and description text!
</details>

<details> 
  <summary> Hint #3: Use your head(er)! </summary>
  Remember that each header element h1 through h6 determines the size of the header! If you want to increase your header size, decrease the number.
</details>

### Task 2: Create a NavBar (and make it double)!

Copy and paste the code from slide 19 into your viewPokemon.html document. 

Then create a new HTML document called createPokemon.html, and paste the NavBar code there too.

### Task 3: Go through all the TODOs on main.css!

Reference Slide 39 for help!

## Simple Resources:

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.76M54-KoDIgbYo9HUuUuDgHaEK%26pid%3DApi&f=1" alt="confused Team Rocket">

Did this workshop make you feel like Team Rocket after crash-landing?

Check out the links below for some more information! Or if you need some more help (or sympathy), message us on the Hack School Discord channel and we can help you out!


Intro to HTML: [W3 Schools](https://www.w3schools.com/html/html_intro.asp)

Intro to CSS: [W3 Schools](https://www.w3schools.com/Css/css_intro.asp) 

Flexbox: [Way2 Tutorial](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
