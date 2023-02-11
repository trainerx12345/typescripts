function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);

}

makeFruitSalad("banana", "pineapple");
/* FUNCTIONS
Void Return Type
By now, we’ve made a pretty convincing case that type annotations are very useful and should always be used unless there’s a very good reason not to. They make everything neat and aid in understanding our code.

For these reasons, it is often preferred to use type annotations for functions, even when those functions don’t return anything. Example:

function logGreeting(name: string){
  console.log(`Hello, ${name}!`)
}
The function logGreeting() simply logs a greeting to the console. There is no returned value, so we must treat the return type as void. A proper type annotation for this function would look like this:

function logGreeting(name:string): void{
  console.log(`Hello, ${name}!`)
}
Instructions
1.
Use TypeScript to check this fruit salad code for type errors.

Checkpoint 2 Passed

Stuck? Get a hint
2.
It looks like the type annotation for the return type of makeFruitSalad() isn’t quite right. Please correct this!

Checkpoint 3 Passed

Stuck? Get a hint */