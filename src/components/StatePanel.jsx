const StatePanel = ({ earthquakes }) => {
  const total = earthquakes.length;
  const maxMag = Math.max(...earthquakes.map((e) => e.properties.mag || 0), 0);

  return (
    <div className="bg-white shadow-md px-4 py-2 rounded-lg text-center w-full sm:w-auto">
      <h3 className="font-semibold text-gray-700">Earthquake Stats (24h)</h3>
      <p className="text-gray-600">Total: {total}</p>
      <p className="text-gray-600">Strongest: {maxMag}</p>
    </div>
  );
};

export default StatePanel;
