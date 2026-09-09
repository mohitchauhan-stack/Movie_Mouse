import Movielist from "./components/Movielist";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-neutral-800  text-amber-50">
      <div className="conntainer font-supreme font-medium h-screen max-w-300 bg-neutral-800 text-amber-50 mx-auto">
        <Navbar />
        <Movielist />
      </div>
    </div>
  );
};

export default App;
