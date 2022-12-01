import { useEffect } from "react";

const Meal = () => {
  console.log("Meal");

  useEffect(() => {
    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";

      const response = await fetch(url);

      const mealsFromApi = await response.json();

      const meal = mealsFromApi.meals[0];

      console.log(meal);
    })();
  })};

  return (
    <>
    (meal ? ())
    <article>
     <h2>Paté en croute</h2>
    </article>
    </>
  );


export default Meal;

