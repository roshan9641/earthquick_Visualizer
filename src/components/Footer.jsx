const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto w-full">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} Earthquake Visualizer | Data Source:{" "}
        <a
          href="https://earthquake.usgs.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          USGS Earthquake API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
