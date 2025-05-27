import { useState } from "react";

export default function IngredientInput({ ingredients, setIngredients }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() && !ingredients.includes(input)) {
      setIngredients([...ingredients, input.trim()]);
    }
    setInput("");
  };

  const removeIngredient = (item) =>
    setIngredients(ingredients.filter((ing) => ing !== item));

  return (
    <div>
      <div className="flex gap-2 mb-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded flex-grow"
          placeholder="e.g., eggs, milk"
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {ingredients.map((item) => (
          <span
            key={item}
            className="bg-gray-200 px-3 py-1 rounded-full flex items-center"
          >
            {item}
            <button
              className="ml-2 text-red-600 font-bold"
              onClick={() => removeIngredient(item)}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
