# Hack School: Part 2 - Javascript/Node.js (10/22)

Workshop Recording: [here](https://youtu.be/XspZlpEuZGs)

In this workshop, we learned about Javascript and Node.js. Specifically, we learned about **variables**, **objects**, **arrow functions**, and **promises**.


We used these ideas to:
- [x] Create pokemon as JavaScript object
- [x] Give the pokemon descriptions (HP, attacks, name)
- [x] Create the damage mechanic



## What is JavaScript and Node.js?

JavaScript is a scripting language (meaning: it has its own terminology, etc.). It is used to make applications dynamic and interactive.

If you remember the house metaphor from Part 1, you can say that JavaScript is like the electricity in the house: it allows for light, running water, A/C, heat, dishwashers, etc.

Node.js is an environment that sits in between a server (the computer) and the client-side (what you see). It allows an application to process JavaScript commands asynchronously (through asynchronous programming).

In Hack School, we will be using JavaScript and Node.js to make our Pokemon game move/change. JavaScript and Node.js handles every dialogue box, every change in HP, every user command, etc., and updates accordingly.



### Variables

Variables are objects that store information in variable names.

In JavaScript, you can assign variable names in several different ways:

#### `let`

`let` is a command that is **block scoped**. A block is a chunk of code bounded by curly braces {}.

This means that `let` defines variables within the scope of a block (or outside of the block):

```
let apple = 6

if (1 < 2) {
  let apple = 10 \\ This will create a "new" variable `apple` inside the block.
  console.log(apple) \\ This will return 10.
}

console.log(apple) \\ Since apple outside of the block is defined as 6, this will return 6
```
Note that the second console.log returned 6. JavaScript considers  `apple` outside of the block to be an entirely different variable than `apple` inside the block, because inside of the block is a new scope.



`let` variables can also be re-assigned. However, they cannot be re-declared:
```
let apple = 6
apple = 7
```
This is re-assigning the variable apple to the number 7. JavaScript realizes that the previously-defined variable  `apple` is being updated. This is okay!

```
let apple = 6
let apple = 7
```
This is re-declaring the variable apple. The use of `let` makes JavaScript expects `apple` to be a new variable. Since it's not, JavaScript will throw an error.

#### `const`

`const` is also a command that is **block scoped**. 

However, *unlike* the `let` command, `const` CANNOT re-assign OR re-declare variables.

This means that:
```
let apple = 6
apple = 7
```
will return an error, because re-assigned is not allowed.

This also means that:
```
let apple = 6
let apple = 7
```
will return an error, becuase re-declaration is not allowed.

#### `var`

DON'T USE `var`.

(Basically, `var` is the command that JavaScript used to define variables pre-ES6 (before JavaScript was standardized). The problem is, `var` is not block scoped; it's globally or locally-scoped.

That means if a `var` variable was defined outside of a block, it is considered globally scoped, and can be used anywhere.

But if a `var` variable was defined INSIDE a block, it is considered locally-scoped, and only accessible in the scope of that block.

`var` variables can also be re-assigned AND re-declared, either inside or outside of a block.

Long story short?

For your sanity and ours...

PLEASE. DON'T. USE. `var`.)


### Objects

Everything in JavaScript is an object. It's like the cake thing on TikTok (rip TikTok).

In our project, though, one important object is our pokemon!

Let's take a look at our Pikachu example from the slides:

```
let Pikachu = {
	name : 'pika',
	type : 'electric',
	power : 50,
hp : 150,
	attacks :  ['Thunder Shock','Tail Whip','Spark'],
	attack : function (attacker) {
		return (attacker.hp - this.power);
	}
};
```

In this code, we use `let` to define an object with variable name Pikachu. 

That object, Pikachu, has **properties**. Properties are characteristics of an object. These properties can be accessed with `.property` For example, printing `Pikachu.power` would return `50`.

Objects can also have **methods**. Methods are functions that an object can execute. These methods can be accessed with `.method_name()`. For example, `Pikachu.attack()` would cause the Pikachu to attack.

Methods often use `this` to call an object's own properties in its method. For example, Pikachu's "attack" method can be called using `this.power`.

<img src="https://img00.deviantart.net/6b98/i/2011/166/1/1/pikachu_thunderbolt_by_ajl03-d3izb66.png" alt="Pikachu using Thunderbolt!" height=50% width=50%>


### Callback and Higher-Order Functions

Functions are considered objects in JavaScript. 

A callback function is a function that is passed as an object for another function (which is called the higher-order function).

For example:

```
function multNum (num1, num2, pokemon, callback) {
console.log('your pokemon will heal ' + (num1 * num2) + ' hp');
	callback(pokemon, num1 * num2);
}
```
In this example, the you can see that `callback` is treated like an object because it is in between the parenthesis.

The higher-order function `multNum` asks a general callback function `callback` to do something with `(pokemon, num1*num2)` on the last line of code.


Later, we can pass `heal` as the callback function when we call the function `MultNum`:
```
multNum (5, 6, pikachu, heal);
```

As you can see, in this instance, the higher-order function `MultNum` takes the callback function `heal` as a callback function.


## Project Implementation

### TODO: Damage (on Pokemon.js)

<img src="https://i.imgflip.com/251r3m.jpg" alt="that's a lot of damage! meme" height=50% width=50%>

We want to simulate damage to our pokemon!

When a pokemon is damaged, their overall health points go down.

```
damage : function(damage) {
    //TODO DAMAGE
},
```

For that, we use our knowledge of **objects' methods** and `this`.

The method gives us a parameter, `damage`, which is a number that tells us how health points(HP) our pokemon lost.

<details> 
  <summary> Hint 1: Health Points </summary>
	You can get a pokemon's health points using <code>this</code> and accessing the property <code>health</code>.
</details>

<details> 
  <summary> Hint 2: Basic Math </summary>
	You can determine a pokemon's current health by setting your pokemon's health equal to pokemon's health minus damage.
</details>

### TODO: Randomize Damage (Pokemon.js)

If you've played pokemon before, you know that some attacks have different damage points based off of the pokemon's type!

To easily mimic this effect, we are going to **randomize** the amount of damage that each attack does.

**The minimum amount of damage a pokemon can do is 0. The maximum amount is 20.**

```
attack : function (attacker) {
    // TODO RANDOMIZE DAMAGE
    
    //hint look up node.js random.int
    //hint attacker.damage(damage);
    //hint this.attacks[SOMETHING]
    //remember to use return (whatyoushouldreturn)
}
```
For that, we use our knowledge of **variables**, **objects' methods** and `this`.

The method gives us a parameter, `attacker`, which is the attacking pokemon as an object.

<details> 
	<summary> Hint 1: <code>node.js random.int</code> </summary>
	<p>We already require('random') at the top of Pokemon.js!</p>
	<p>To access the random function, use <code>random(first_num, second_num)</code>.</p>
	<p>This gives you a random number in between first_num and second_num.</p>
</details>

<details> 
	<summary> Hint 2: <code>attacker.damage(damage)</code> </summary>
	Add this code directly to the method (remove <code>//hint </code>)
</details>

<details> 
	<summary> Hint 3: <code>this.attacks[SOMETHING]</code> </summary>
	<p>This is the part of the code where Pikachu attacks!</p>
	<p>To attack, you need to call this.attacks(SOMETHING) where SOMETHING is the amount of damage the attack does.</p>
	<p>(We seem to have already determined that random value...)</p>
</details>

<details> 
	<summary> Hint 3: <code>return (whatyoushouldreturn)</code> </summary>
	<p>What are you missing?</p>
	<div>
	<img src="http://pm1.narvii.com/5777/852647e5bf3e64456974acad207295c2445f6964_hq.jpg" alt="Ash yelling" height=50% width=50%>
	</div>
	<p> As amusing as it would be for pokemon to just snipe each other silently, it would be a pretty boring game! We want to know what attack the pokemon used! </p>
	<p>Hint: it should be a random move.</p>
</details>

<details> 
  <summary> Hint 4: I still don't get it :( </summary>
	<p> You want to randomize what move your pokemon uses. </p>
	<p> You have a function that generates a random integer, given a lowest and highest value. </p>
	<p> You can count elements in a list with the <code>.length</code> attribute. </p>
	<p> You have a list of pokemon attacks. </p>
	<p> You can pick an element from the attacks list with this command <code>this.attacks[element_number]</code></p>
</details>

### TODO: For loop (Pokemon.js)

This should be in the object `Ivy`!

```
    let damage = random.int(0,20);
    
    // search for attack and return damage
    // TODO FOR LOOP
    if(nameOfAttack == this.attacks[index]) {
        attacker.damage(damage);
        return damage;
    }
```

We are going to set up a for-loop. This code already has an `if` statement that will be inside of the for-loop.

<details> 
	<summary> Hint 1: What does that <code>if</code> code statement mean? </summary>
	<p> <code>if(nameOfAttack == this.attacks[index])</code> wants to check if the nameOfAttack (the attack that we give our pokemon) is contained in the list `this.attacks`.</p>
</details>

<details> 
  <summary> Hint 2: This looks familiar...! </summary>
	<div>
	<img src="https://www.pinknews.co.uk/images/2016/08/you-shall-not-pass-1.jpg" alt="team rocket in disguise" height=50% width=50%>
	<p> Hey, this looks familiar...!</p>
	</div>
	<p> We know how to pick random elements from the <code>this.attacks</code> list (see the previous todo).</p>
	<p> In this TODO, we want to get <b>every element</b> from the <code>this.attacks</code> list.</p>
</details>
		

<details> 
  <summary> Hint 3: Loop Basics </summary>
	<p> That means our for-loop wants to iterate over every number from <code>0</code> to <code>length-1</code>.</p>
	<p> For more information on for-loops, look at slide 14 of the presentation. </p>
</details>

### TODO: Winning Conditions (index.js)

```
// TODO WINNING CONDITIONS PRINT WHO WINS AND RETURN
```

We want to deteremine when a pokemon wins!

A pokemon wins when their opponent loses all of their health points. Then a message displays, usually "___ won!".

According to the instructions, you then `return`.

<details> 
  <summary> Hint 1: Don't Beat A Dead Rapidash (Or Any Pokemon, That's Animal Abuse) </summary>
	<img src="https://cdn.bulbagarden.net/upload/thumb/b/bd/Nurse_Joy_M20.png/250px-Nurse_Joy_M20.png" alt="nurse joy" height=50% width=50%>
	<p> Good morning! This is a PSA from Nurse Joy and Chansey. </p>
	<p> Sometimes, if you "finish off" a pokemon, the opponent's damage taken might be greater than their health points. </p>
	<p> Please don't keep battling a pokemon with negative HP! </p>
	<p> Please make sure your if-statement accounts for negative numbers (<code> <=0 </code>)! </p>
</details>

## Simple Resources:

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FggUcrIWgKNI%2Fmaxresdefault.jpg&f=1&nofb=1" alt="brock-crying" height=50% width=50%>

We all know what JavaScript can be like. If any of you are feeling like Brock right now, please go find a volunteer for help. Message us on Discord or drop into our Office Hours! We can help, we promise!

About `let`, `var` and `const`: [freecodecamp article](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

JavaScript object properties: [W3Schools article](https://www.w3schools.com/js/js_object_properties.asp)

About `this` and a how-to on arrow functions: [W3Schools article](https://www.w3schools.com/Js/js_arrow_function.asp)

JavaScript promises: [Mozilla article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
