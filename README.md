# Exercise: Display random quotes


### Task: How to fork a repository on GitHub.com

1. Click on the **Fork** icon at the top right corner of the repository page on GitHub.com.

2. On the next screen, click the green **Create fork** button to create your own copy of the original repository.

3. Once the fork is created, click the green **Code** button and select **Open with GitHub Desktop**.

4. In GitHub Desktop, clone the repository by choosing a **Local Path** where you want to store a copy on your computer. When prompted about how you plan to use this fork, select **For my own purposes**.


## JavaScript Task:

1. In this exercise, the HTML and CSS are provided to you as index.html and css/style.css.
Note: You should not modify the css/style.css file; focus only on the JavaScript functionality.

2. Link to the JavaScript file `js/script.js` from the provided HTML.

3. Ensure `"use strict"` is at the top of your script.

4. In the script.js file, create an `array` named `quotes` using a `const` that contains at least five different quotes as strings.

5. Define a `function` without parameters named `getRandomQuote()`.

6.  Inside the `function getRandomQuote()` make an `if statement` that checks if the `quotes array's length` is equal to zero and `return` following text if `true`- *'No quotes available'*.

7. Inside the `function getRandomQuote()` 
Use `Math.random()` and `Math.floor()` to generate a random number multiplied with the `length` of the `array` and stored in a variable named `randomIndex` using `const`.

8. Use the `return` method in javaScript to get a quote from the array at the randomIndex position. Here is an example:
    ```javaScript
    return quotes[randomIndex];
    ```
9. Define a new `function` without parameters named `displayRandomQuote`.


10. Inside the `function displayRandomQuote()`
call the function `getRandomQuote()` and store its returned value in the variable named `randomQuote` using `const`

11. Inside the `function displayRandomQuote()` - find the HTML element with `id="quotes"` using `getELementByID` and sets its text to the value stored in `randomQuote`.

12. Outside the `function displayRandomQuote()`  - find the HTML element with `id="displayQuoteBtn"` and add an `addEventListener` that take action when the user `click` on the `button` and make a call to the function `displayRandomQuote()`.
Here is an example on how you find an element combined with an `addEventListener` :
    ```javaScript
    const document.getElementById("idname").addEventListener('click', nameOfFunction);
    ```
  
13. Open Go Live in your VS Code editor and check that the content has been updated. 

