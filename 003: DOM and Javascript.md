# Hack School: Part 3 - DOM Manipulation, React (10/29)

Slides Link: [here](acmurl.com/hackschool-fa20-pt3)

Workshop Recording: [here](https://www.youtube.com/channel/UCyjPATFqc3FwOiuqJ2UG1Eg)


In the first part of this workshop, we learned about DOM and React. Specifically, we learned **how to access elements using JavaScript and DOM**, **the difference between React and HTML**, **components**, and **props**.

We used these ideas to to:
- [x] Download React
- [x] Change the style in NavBar
- [x] Create Pokemon.jsx as a React component


## What is DOM?

<img src="DOM_tree.png" alt="DOM tree diagram">

DOM is the tree structure that organizes HTML elements. JavaScript uses the DOM organization to access HTML elements--like how you might use an address to find a location.

The tree structure follows that of any family tree. 
- The element directly above is considered a parent (for example, on the far left, the `Element: <title>` is a parent of `Text: "My title"`).
- The element directly below is considered a child (in the same example, `Text: "My title"` is the child of `Element: <title>`).
- Elements next to one another on the same level are considered siblings (see the bottom right elements `Element: <a>` and `Element: <h1>`).

In Hack School, we will be using DOM to animate and modify the Pokemon Generator with JavaScript.

### Selecting by ID or Class

In the last workshop, we learned how to give HTML elements IDs like this:
```
<p id = "demo" class = "para">Hello!</p>
```
Now, using Javascript, we can grab elements and change its different features.

#### Selecting by ID
```
document.getElementById(<id_name>).<what_to_grab>
```
This is the general formula for accessing a webpage element by its *id*. You can see that you select the document as a location; you tell it to search for an element in the document, given an id; and then you can grab and change different properties.

#### Selecting by Class
```
document.getElementsByClassName(<id_name>)[index].<what_to_grab>
```
This is the general formula for accessing a webpage element by its *class*. You can see that you select the document as a location; you tell it to search for an element in the document, given a class. However, since more than one element can be in the same class, we need to specify which element you want to change using the index.

For example:
```
<p id = "demo" class = "para">Hello!</p>
<p id = "not_demo" class = "para">Goodbye!</p>
```
If you want to select the "Goodbye" paragraph, you would input [1] into the index, since Goodbye is the second paragraph and the HTML index starts counting at 0. 

(Which means that in most coding language, "Hello" would be the 0th paragraph and "Goodbye" would be the 1st paragraph.)

#### `.innerHTML`

`.innerHTML` is a function that grabs the inner content in between the HTML tags. From there, you can change its innerHTML property.

For example:
```
document.getElementById("demo").innerHTML - "Hello World!";
```
would change `<p id="demo" class="para">Hello!</p>` to `<p id="demo" class="para">Hello World!</p>`

#### `.style.color`

`.style.color` is a function that accesses an element's style description, and then looks specifically for color in that description. From there, you can change an element's color.

For example:
```
document.getElementsByClassName("para")[0].style.color = "blue";
```
would change `<p id="demo" class="para">Hello!</p>` to blue text.

## What is React?

React is a very commonly used front-end framework that has many benefits, including:

- You can import and re-use components easily
- The webpage only re-renders updated components, so page-rendering is faster
- Don't need to manually update

React is a javascript framework where you can import external components like CSS and HTML is treated as variable objects, so you can re-use them whenever necessary.

Note: React uses **className** instead of **class** in HTML.

#### What are components?
```
const Example = () => {
    return <p> This is a component!</p>
}
```
Components are code blocks on your websites that do different things. There are two types of components, *functional* and *class*.

Components are rendered in *return* statements for functional components and the *render()* function for class components. 

You can see above that the example is a functional component because it has `return` in it. If the example didn't have return, it wouldn't render anything; that is, no "This is a component!" paragraph would show up on your webpage.

#### Functional components

```
const MemeSong = (props) => {
    return(
        <div>
            <h1>(props.title)</h1>
            <img src={props.coverImg} alt="cover image" />
            <p> Jam to this song with me <a href={props.songLink}>here</a>!</p>
        </div>
    );
}
```

Functional components are like the first example:
- Follow JavaScript function syntax (look at variable name `const`) and usually written as an arrow function (containing `=>`; for a recap on arrow functions, look at the previous notes)
- Renders JSX (a type of JavaScript language) within a return statement
- Shorter, cleaner code
- Simpler to work with

We will be using functional components for our project.

#### Props

Props are components with features. Here's an example:
```
<MemeSong
title = "Careless Whispers"
coverImg = "../img/careless-whispers.png"
songLink = "tempurl.com/careless-whispers"/>

<MemeSong
title = "Take On Me"
coverImg = "../img/take-on-me.png"
songLink = "tempurl.com/take-on-me"/>

<MemeSong
title= "Nyan Cat"
coverImg = "../img/nyan-cat.png"
songLink = "tempurl.com/nyan-cat" />
```

Each of these <MemeSong> code blocks are called **Components**. Each of the properties (title, coverImg and songLink) are called **Props** (like properties).

We can access these components and their props by using a React function.

```
const MemeSong = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <img src={props.coverImg} alt="Cover image" />
            <p>Jam to this song with me 
                <a href={props.songLink}>here</a>!
            </p>
        </div>
    );
}
```

As you see in the example, we pass `props` as our default argument of the arrow function. The function decides that for each input `props` that it receives, it will access certain props like `props.title` using dot notation. 

This is really helpful because it saves us a lot of time. Instead of writing out all the HTML blocks and inputting the titles, image links and song links individually, we can use props to condense our code!

## Project Implementation

### Set up React in your project!

We'll be using React for our framework, so we should set that up now.

Use `cd` to move to the directory where your part 1 files are stored on your computer. Then run this command:
```
npx create-react-app client
```
Navigate to the client folder, and then the src folder. The file App.js is where our webpage will load from.

Go into the client folder and run `npm start` to see the webpage.

### Navbar

We want to make our navbar for our Pokemon generator. We'll be creating a new .jsx file for it to live in :)

For that, we use **workshop 1 code** and **functional components**.

Reference slide 27-31 from the workshop [here](acmurl.com/hackschool-fa20-pt3)

<details> 
  <summary> Hint #1: I choose you! </summary>
    Did you remember to import React and './style.css'? And did you remember to <code>import</code> each component from <code>.location</code>? Remember, if you don't import, your code won't be able to use it!
</details>

<details> 
  <summary> Hint #2: Team Rocket's Blasting Off Again...! </summary>
    Did you remember to <code>export default</code> each component? If you don't export them, you can't access them in other files!
</details>


### CreatePokemon.jsx

We want to take our CreatePokemon component, translate it into React, and put it in our src/App.js file for our Pokemon generator.

For that, we translate HTML to React syntax.

Reference slide 27-31 from the workshop [here](acmurl.com/hackschool-fa20-pt3)

Note:
- Change `for` to `htmlFor`
- Change the move power `value` to `defaultValue`

<details> 
  <summary> Hint #1: Copy that, Copycat! </summary>
    Did you remember to switch all instances of <code>class</code> to <code>className</code>? Remember, we need to do that when switching HTML to React!
</details>


## Simple Resources:

<img src="http://31.media.tumblr.com/tumblr_lr16h9m7YX1qhf88oo1_500.gif" height=50% width=50% alt="Dragonite flying against Team Rocket">

Midterm stress got you feeling like you're on a cliff, hopelessly trying to push your deadlines back, and needing a fluffy cat to keep you grounded? Check out our #aww channel on the ACM discord for some fluffy therapy - but hurry back to develop some more React with us! 

Feel free to DM us on Discord if you have any questions or want to arrange some office hours. We're here to help - we promise! :)

**Main Idea 1**:

Site #1: [W3 React tutorial](https://www.w3schools.com/react/)

Note: W3 schools is an ***awesome*** place to learn coding. I would highly recommend it for not only React but also just about any other coding language there is.

Site #2: [Documentation about DOM from Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
