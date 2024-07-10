# Phase-1-Week-2-Code-Challenge

- This code challenge is a Javascript implementation of a simple shopping list application.

- It initializes the application by attaching event listeners to various DOM elements and defining functions to handle user interactions.

- The code starts by attaching a "DOMContentLoaded" event listener to the document object. This ensures that the script runs only after the HTML document has been fully loaded.

- It declares and initializes several variables to store references to DOM elements and the shopping list data.

- The addItem function is defined to handle adding a new item to the shopping list. It retrieves the text from the input field, trims any leading or trailing whitespace, and checks if the text is not empty. If the text is valid, it creates a new object with the text and a purchased property set to false, adds it to the shoppingList array, calls the renderList function to update the DOM, and clears the input field.

- The togglePurchased function is defined to handle marking an item as purchased or unpurchased. It takes an index as an argument, toggles the purchased property of the corresponding item in the shoppingList array, and calls the renderList function to update the DOM.

- The clearList function is defined to handle clearing the shopping list. It sets the length of the shoppingList array to 0 and calls the renderList function to update the DOM.

- The renderList function is defined to handle rendering the shopping list to the DOM. It clears the inner HTML of the shoppingListContainer element, iterates over the shoppingList array, creates a new <li> element for each item, sets its text content, adds a "purchased" class if the item is marked as purchased, attaches a click event listener to toggle the purchase status, and appends the <li> element to the shoppingListContainer.

- Event listeners are attached to the add button, clear button, and item input field to handle user interactions. The add button calls the addItem function, the clear button calls the clearList function, and the item input field allows adding an item by pressing Enter.

- The script ends with a closing curly brace for the "DOMContentLoaded" event listener.

In conclusion, the selected code will provide a complete implementation of a shopping list application with basic functionality like adding items, marking items as purchased, clearing the list and rendering the list to the DOM.
