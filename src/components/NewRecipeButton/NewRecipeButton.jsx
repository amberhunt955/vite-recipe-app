import styles from "./NewRecipeButton.module.css";

function NewRecipeButton({ getRandomMeal, setRecipe }) {
    const handleClick = async () => {
        const newMeal = await getRandomMeal();
        setRecipe(newMeal);
    }

    return <button className={styles.NewRecipeButton} onClick={handleClick}>New Recipe</button>
}

export default NewRecipeButton;