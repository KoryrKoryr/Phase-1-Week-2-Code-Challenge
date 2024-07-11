// Initializes shopping list application
document.addEventListener("DOMContentLoaded", function () {
  const shoppingList = []; //Array to store items
  const itemInput = document.getElementById("item-input");
  const addButton = document.getElementById("add-button");
  const clearButton = document.getElementById("clear-button");
  const shoppingListContainer = document.getElementById("shopping-list");

  // A function to add an item to the list
  function addItem() {
    const itemText = itemInput.value.trim(); // Get the text from the input field
    if (itemText) {
      shoppingList.push({ text: itemText, purchased: false });
      renderList();
      itemInput.value = "";
    }
  }

  // A function to mark an item as purchased or un-purchased.
  // To mark an item as purchased or un-purchased, the item is clicked.
  function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased; // Toggles the purchased property of the item
    renderList();
  }

  // A function to clear the list
  function clearList() {
    shoppingList.length = 0;
    renderList();
  }

  //A function to render the shopping list to the DOM
  function renderList() {
    shoppingListContainer.innerHTML = ""; // Clear the inner HTML of the shoppingListContainer
    shoppingList.forEach((item, index) => {
      // Iterate over the shoppingList array
      const listItem = document.createElement("li"); // Create a new <li> element
      listItem.textContent = item.text; // Set the text content of the <li> element
      if (item.purchased) {
        listItem.classList.add("purchased"); // Add the "purchased" class to the <li> element
      }
      listItem.addEventListener("click", () => togglePurchased(index)); // Add an event listener to the <li> element
      shoppingListContainer.appendChild(listItem); // Append the <li> element to the shoppingListContainer
    });
  }

  // Attach event listeners
  addButton.addEventListener("click", addItem);
  clearButton.addEventListener("click", clearList);

  // Allow adding item by pressing Enter
  itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addItem(); // Call the addItem function
    }
  });
});
