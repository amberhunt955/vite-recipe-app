import styles from "./Header.module.css";

function Header({ recipe }) {
      const loaded = () => <h1 className={styles.Header}>{recipe.strMeal}</h1>
    
      const loading = () => <h2>Recipe loading...</h2>;
    
      return recipe ? loaded() : loading();
}

export default Header;