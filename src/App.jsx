import ShoppingList from "./components/ShoppingList";
function App() {
  const shoppingItems = [
    "milk",
    "flour",
    "eggs",
    "chocolate",
    "rice",
    "coffee",
    "bread",
    "cheese",
    "tomatoes",
  ];
  return (
    <>
      <ShoppingList items={shoppingItems} />
    </>
  );
}

export default App;
