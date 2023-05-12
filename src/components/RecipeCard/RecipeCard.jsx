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
            <b>INGREDIENTS:</b>
            {recipe.strIngredient1 ? <li>{recipe.strIngredient1}, {recipe.strMeasure1}</li> : "" }
            {recipe.strIngredient2 ? <li>{recipe.strIngredient2}, {recipe.strMeasure2}</li> : "" }
            {recipe.strIngredient3 ? <li>{recipe.strIngredient3}, {recipe.strMeasure3}</li> : "" }
            {recipe.strIngredient4 ? <li>{recipe.strIngredient4}, {recipe.strMeasure4}</li> : "" }
            {recipe.strIngredient5 ? <li>{recipe.strIngredient5}, {recipe.strMeasure5}</li> : "" }
            {recipe.strIngredient6 ? <li>{recipe.strIngredient6}, {recipe.strMeasure6}</li> : "" }
            {recipe.strIngredient7 ? <li>{recipe.strIngredient7}, {recipe.strMeasure7}</li> : "" }
            {recipe.strIngredient8 ? <li>{recipe.strIngredient8}, {recipe.strMeasure8}</li> : "" }
            {recipe.strIngredient9 ? <li>{recipe.strIngredient9}, {recipe.strMeasure9}</li> : "" }
            {recipe.strIngredient10 ? <li>{recipe.strIngredient10}, {recipe.strMeasure10}</li> : "" }
            {recipe.strIngredient11 ? <li>{recipe.strIngredient11}, {recipe.strMeasure11}</li> : "" }
            {recipe.strIngredient12 ? <li>{recipe.strIngredient12}, {recipe.strMeasure12}</li> : "" }
            {recipe.strIngredient13 ? <li>{recipe.strIngredient13}, {recipe.strMeasure13}</li> : "" }
            {recipe.strIngredient14 ? <li>{recipe.strIngredient14}, {recipe.strMeasure14}</li> : "" }
            {recipe.strIngredient15 ? <li>{recipe.strIngredient15}, {recipe.strMeasure15}</li> : "" }
            {recipe.strIngredient16 ? <li>{recipe.strIngredient16}, {recipe.strMeasure16}</li> : "" }
            {recipe.strIngredient17 ? <li>{recipe.strIngredient17}, {recipe.strMeasure17}</li> : "" }
            {recipe.strIngredient18 ? <li>{recipe.strIngredient18}, {recipe.strMeasure18}</li> : "" }
            {recipe.strIngredient19 ? <li>{recipe.strIngredient19}, {recipe.strMeasure19}</li> : "" }
            {recipe.strIngredient20 ? <li>{recipe.strIngredient20}, {recipe.strMeasure20}</li> : "" }
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
