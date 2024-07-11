// Initializes shopping list application
document.addEventListener("DOMContentLoaded", function () {
  const shoppingList = []; //Array to store items
  const itemInput = document.getElementById("item-input");
  const addButton = document.getElementById("add-button");
  const clearButton = document.getElementById("clear-button");
  const shoppingListContainer = document.getElementById("shopping-list");

  // A function to add an item to the list
  function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText) {
      shoppingList.push({ text: itemText, purchased: false });
      renderList();
      itemInput.value = "";
    }
  }

  // A function to mark an item as purchased
  function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    renderList();
  }

  // A function to clear the list
  function clearList() {
    shoppingList.length = 0;
    renderList();
  }

  //A function to render the shopping list to the DOM
  function renderList() {
    shoppingListContainer.innerHTML = "";
    shoppingList.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.text;
      if (item.purchased) {
        listItem.classList.add("purchased");
      }
      listItem.addEventListener("click", () => togglePurchased(index));
      shoppingListContainer.appendChild(listItem);
    });
  }

  // Attach event listeners
  addButton.addEventListener("click", addItem);
  clearButton.addEventListener("click", clearList);

  // Allow adding item by pressing Enter
  itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addItem();
    }
  });
});
