
function NewRecipeButton({ getRandomMeal, setRecipe }) {
    const handleClick = async () => {
        const newMeal = await getRandomMeal();
        setRecipe(newMeal);
    }

    return <button onClick={handleClick}>New Recipe</button>
}

export default NewRecipeButton;