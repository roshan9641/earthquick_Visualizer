const FilterBar = ({ onFilterChange }) => {
  return (
    <div className="flex items-center gap-3 bg-white shadow-md px-4 py-2 rounded-lg w-full sm:w-auto justify-center">
      <label className="font-semibold text-gray-700">Min Magnitude:</label>
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="0">All</option>
        <option value="2.5">2.5+</option>
        <option value="4.5">4.5+</option>
        <option value="6">6+</option>
      </select>
    </div>
  );
};

export default FilterBar;
