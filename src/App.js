import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Value from "./components/Value";
import Programs from "./components/Programs";
import Menu from "./components/Menu";
import Customers from "./components/Customers";
import NewsLetter from "./components/NewsLetter";
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Value />
      <Programs />
      <Menu />
      <Customers />
      <NewsLetter />
    </div>
  );
}

export default App;
