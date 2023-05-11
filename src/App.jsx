// components
import RecipeCard from "./components/RecipeCard/RecipeCard";
import NewRecipeButton from "./components/NewRecipeButton/NewRecipeButton";

// styling
import "./App.css";

function App() {
  return (
    <>
      <h1>Recipe App</h1>
      <RecipeCard />
      <NewRecipeButton />
    </>
  );
}

export default App;
