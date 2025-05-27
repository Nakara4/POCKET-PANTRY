export default function Filters({ filters, setFilters }) {
    const toggle = (key) => {
      setFilters({ ...filters, [key]: !filters[key] });
    };
  
    return (
      <div className="flex gap-4 my-4">
        {Object.keys(filters).map((key) => (
          <label key={key} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters[key]}
              onChange={() => toggle(key)}
            />
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>
    );
  }
  