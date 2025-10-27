import { useEffect, useState } from "react";
import MapView from "./components/MapView";
import FilterBar from "./components/FilterBar";
import StatePanel from "./components/StatePanel";
import Footer from "./components/Footer";

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
      .then((res) => res.json())
      .then((data) => setEarthquakes(data.features));
  }, []);

  const filteredData = earthquakes.filter((e) => e.properties.mag >= filter);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-center items-center bg-white shadow-md py-5">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          🌍 Earthquake Visualizer
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center flex-1 w-full px-4 py-6 gap-6">
        <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <FilterBar onFilterChange={setFilter} />
          <StatePanel earthquakes={filteredData} />
        </div>

        <div className="w-full max-w-5xl flex-1">
          <MapView earthquakes={filteredData} />
        </div>
      </main>

      {/* Footer (always visible at bottom) */}
      <Footer />
    </div>
  );
}

export default App;
