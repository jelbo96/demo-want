import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <p> Grid </p>
      <p> Carrusel </p>
      <Footer />
    </div>
  );
}

export default App;
