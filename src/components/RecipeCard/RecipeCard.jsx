function RecipeCard({ recipe }) {
  console.log(recipe);

  const loaded = () => {
    return (
      <div className="recipeCard">
        <h1>{recipe.strMeal}</h1>
        <div className="recipeContent">
          <img
            src={`${recipe.strMealThumb}`}
            alt={`${recipe.strMeal}`}
            width="300px"
            height="300px"
          />
          <p className="recipeInstructions">
            <b>INSTRUCTIONS:</b> {recipe.strInstructions}
          </p>
        </div>
      </div>
    );
  };

  const loading = () => <h2>Recipe loading...</h2>;

  return recipe ? loaded() : loading();
}

export default RecipeCard;
