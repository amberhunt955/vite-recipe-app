import { useState, useMemo } from "react";

// utilities
import { getRandomMeal } from "./services/mealdb";

// components
import RecipeCard from "./components/RecipeCard/RecipeCard";
import NewRecipeButton from "./components/NewRecipeButton/NewRecipeButton";

// styling
import "./App.css";

function App() {
  const [recipe, setRecipe] = useState(null);

  useMemo(() => {
    const fetchData = async () => {
      const data = await getRandomMeal();
      console.log(data);
      setRecipe(data);
    }
    fetchData();
  }, []);

  return (
    <main className="app">
    <div className="content">
      {<RecipeCard recipe={recipe} />}
      <NewRecipeButton getRandomMeal={getRandomMeal} setRecipe={setRecipe} />
    </div>
    </main>
  );
}

export default App;
