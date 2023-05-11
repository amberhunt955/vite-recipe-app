import { getRandomMeal } from "../../services/mealdb";

function NewRecipeButton() {
    function handleClick () {
        getRandomMeal();
    }
    return <button onClick={handleClick}>New Recipe</button>
}

export default NewRecipeButton;