import { useState, useEffect } from "react";
import IngredientInput from "./components/IngredientInput";
import RecipeList from "./components/RecipeList";
import Filters from "./components/Filters";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [filters, setFilters] = useState({ vegan: false, keto: false });
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const API_KEY = "YOUR_SPOONACULAR_API_KEY"; // Replace with your key

  const fetchRecipes = async () => {
    const dietFilters = Object.keys(filters)
      .filter((key) => filters[key])
      .join(",");

    const query = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${ingredients.join(
      ","
    )}&diet=${dietFilters}&addRecipeInformation=true&number=10`;

    const res = await fetch(query);
    const data = await res.json();
    setRecipes(data.results || []);
  };

  const toggleFavorite = (recipe) => {
    const exists = favorites.find((fav) => fav.id === recipe.id);
    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
    } else {
      updatedFavorites = [...favorites, recipe];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">🍳 Pocket Pantry</h1>

      <IngredientInput ingredients={ingredients} setIngredients={setIngredients} />
      <Filters filters={filters} setFilters={setFilters} />
      <button
        onClick={fetchRecipes}
        className="bg-green-600 text-white px-4 py-2 rounded my-4"
      >
        Find Recipes
      </button>

      <RecipeList
        recipes={recipes}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;
