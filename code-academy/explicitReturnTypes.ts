import {getUserChoice,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12} from './resources'


function returnFruit():string{
  let num = getUserChoice();
  switch(num){
    case 1 : return f1();
		case 2 : return f2();
		case 3 : return f3();
		case 4 : return f4();
		case 5 : return f5();
		case 6 : return f6();
		case 7 : return f7();
		case 8 : return f8();
		//case 9 : return f9();
		case 10 : return f10();
		case 11 : return f11();
		case 12 : return f12();
  }
  return 'durian.jpg'
}
//The problematic function is f9()
// console.log(returnFruit())

/* FUNCTIONS
Explicit Return Types
If we’d like to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis. Here, we use the same syntax as other type annotations, a colon followed by the type. TypeScript will produce an error for any return statement in that function that doesn’t return the right type of value.

function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
We can also explicitly state return types for arrow functions (which were defined in the ES6/ES2015 version of JavaScript). We’ll see the same kinds of error messages for both function types.

const createArrowGreeting = (name?: string): string => {
    if (name) {
        return `Hello, ${name}!`;
    }
 
    return undefined;
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
Now let’s take a look at an example of how explicit return type annotation can be useful when we’re working with other people’s code.

Instructions
1.
You’re designing an online multiplayer game where fruit battles against fruit for culinary supremacy.

The function getUserChoice() gets a user’s fruit choice entered as a number from 1 to 12. Then, returnFruit() runs a fruit-generating function (f1() through f12()) to return a filename '<fruitname>.jpg'.

First, let’s verify that this works. Add console.log(returnFruit()) to the code.

Click “Run” to save your changes, compile using tsc, then execute the code using node.

Checkpoint 2 Passed

Stuck? Get a hint
2.
You may or may not have noticed a problem here. In fact, only 11 out of 12 of the functions f1() through f12() correctly return a fruit .jpg filename. Run the code a bunch more times until you see the problem. This might take a few tries, since getUserChoice() is always different.

Checkpoint 3 Passed
3.
2545434685676. What? That’s not a fruit. Clearly, one of the functions f1() through f12() are not working correctly. But which one? It would be a nightmare to have to look through all that source code! (That’s why we’ve disabled that option for you.)

You could just run them all one by one. But doing something 12 times is too much work. Instead, let TypeScript do the work for you. Think about which kind of type annotation can help you here. Then, implement it!

Checkpoint 4 Passed

Stuck? Get a hint
4.
Finally, we can figure out which of the functions f1() through f12() have the problem. Once you know which one, type your answer as a code comment, in the following format:

//The problematic function is f2()

Checkpoint 5 Passed

Stuck? Get a hint */