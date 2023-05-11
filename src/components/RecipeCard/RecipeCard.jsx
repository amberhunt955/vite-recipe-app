
function RecipeCard({recipe}) {
    console.log(recipe);

    const loaded = () => {
        return (
            <div>
                <h2>{recipe.strMeal}</h2>
                <p>{recipe.strInstructions}</p>
            </div>
        )
    }
    
    const loading = () => <h2>Recipe loading...</h2>
    
    return recipe ? loaded() : loading();
}

export default RecipeCard;