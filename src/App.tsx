import Attacks from "./components/attacks";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import News from "./components/news";
import Stats from "./components/stats";

function App() {
  return (
    <div className="bg-[#010420] w-full h-[200vh] text-white">
      <Navbar />
      <Hero />
      <Attacks />
      <News />
      <Stats />
    </div>
  );
}

export default App;
