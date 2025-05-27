export default function RecipeCard({ recipe, isFavorite, toggleFavorite }) {
    return (
      <div className="border rounded p-4 shadow">
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded" />
        <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
        <button
          onClick={() => toggleFavorite(recipe)}
          className={`mt-2 px-3 py-1 rounded ${
            isFavorite ? "bg-red-500 text-white" : "bg-gray-300"
          }`}
        >
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>
    );
  }
  