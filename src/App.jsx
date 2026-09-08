import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-neutral-800 h-screen text-amber-50">
      <div className="conntainer font-supreme font-medium  max-w-300 bg-neutral-800 text-amber-50 mx-auto grid grid-rows-2">
        <Navbar />
        <main className="main_content h-auto">Main Content</main>
      </div>
    </div>
  );
};

export default App;
