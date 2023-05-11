export const getRandomMeal = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json()
    console.log(data.meals[0]);
    return data.meals[0];
  } catch (e) {
    console.error(e);
  }
};
