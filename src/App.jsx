import Movielist from "./components/Movielist";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="text-amber-50 h-screen w-full">
      <div className="conntainer font-supreme font-medium h-screen  max-w-600 text-amber-50 bg-neutral-600 mx-auto">
        <Navbar />
        <Movielist />
      </div>
    </div>
  );
};

export default App;
