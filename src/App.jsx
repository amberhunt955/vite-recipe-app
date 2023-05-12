import { useState, useMemo } from "react";

// utilities
import { getRandomMeal } from "./services/mealdb";

// components
import Header from "./components/Header/Header";
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
    };
    fetchData();
  }, []);

  return (
    <main className="app">
      <section className="page">
        {<Header recipe={recipe} />}
        
        <div className="content">
          {<RecipeCard recipe={recipe} />}
          
          <NewRecipeButton
            getRandomMeal={getRandomMeal}
            setRecipe={setRecipe}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
