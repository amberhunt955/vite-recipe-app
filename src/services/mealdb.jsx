export const getRandomMeal = async () => {
    try {
        const response = await fetch('www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}