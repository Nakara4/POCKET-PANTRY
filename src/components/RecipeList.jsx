import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, favorites, toggleFavorite }) {
  if (recipes.length === 0) return <p>No recipes found yet.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.some((f) => f.id === recipe.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
