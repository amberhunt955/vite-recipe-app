
function NewRecipeButton({ getRandomMeal, setRecipe }) {
    const handleClick = async () => {
        const newMeal = await getRandomMeal();
        setRecipe(newMeal);
    }

    return <button className="button" onClick={handleClick}>New Recipe</button>
}

export default NewRecipeButton;