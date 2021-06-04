import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import WorkshopsGrid from "./components/WorkshopsGrid";
import WorksCarrousel from "./components/WorksCarrousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <WorkshopsGrid />
      <WorksCarrousel />
      <Footer />
    </div>
  );
}

export default App;
