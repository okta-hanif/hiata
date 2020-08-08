import "../component/meal-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const MealListElement = document.querySelector("meal-list");

  const onButtonSearchClicked = async () => {
    DataSource.searchMeals(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    MealListElement.meals = results;
  };

  const fallbackResult = (message) => {
    MealListElement.meals = renderResult(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;
