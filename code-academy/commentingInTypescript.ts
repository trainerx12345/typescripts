  /**
   * Make a Fruit Salad
   * Returns the salad.
   *
   * @param fruit1 - The first fruit
   * @param fruit2 - The second fruit
   * @returns nothing cause we use void
   *
   */

  function makeFruitSalad(fruit1: string, fruit2: string): void {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
    console.log(salad);
  }
  
    /**
     * Make a proclaim
     *
     *
     * @param status - A data type of string for status
     * @param repeat - A data type of number to repeat the status 
     * @returns  nothing cause we use console.log
     *
     */
  
  
  function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
      console.log(`I'm ${status}`);
    }
  }
     
   
  
  /* Documenting Functions
TypeScript recognizes JavaScript comment syntax:

// This is a single line comment 
 
/*
This is a 
multiline
comment
*/
// But it’s common in TypeScript to see a third comment style: documentation comments. A documentation comment is denoted with the first line /** and a final line */. It’s common for each line within the comment to start with an asterisk (*):

// /**
// * This is a documentation comment
// */
// Documentation comments are especially useful for documenting functions. We place a function’s documentation comment in the code directly above the function declaration. We can use special tags within the comment to highlight certain aspects of the function. We can use @param to describe each of the function’s parameters, and we can use @returns to describe what the function returns:

//   /**
//    * Returns the sum of two numbers.
//    *
//    * @param x - The first input number
//    * @param y - The second input number
//    * @returns The sum of `x` and `y`
//    *
//    */
//   function getSum(x: number, y: number): number {
//     return x + y;
//   }
// }
// Many text editors will helpfully display documentation comments, for example, when hovering over a function name.

// Instructions
// 1.
// We grabbed a few functions from earlier exercises. They are sorely missing some documentation comments…

// Add a documentation comment makeFruitSalad() function. Your comment should include:

// a brief description of what the function does
// a first @param tag for the first parameter
// a second @param tag for the second parameter
// a @returns tag explaining what the function returns (in this case, nothing)
// Checkpoint 2 Passed
// 2.
// Add a documentation comment proclaim() function. Your comment should include:

// a brief description of what the function does
// a first @param tag for the first parameter
// a second @param tag for the second parameter
// an @returns tag explaining what the function returns (again, in this case, nothing)
