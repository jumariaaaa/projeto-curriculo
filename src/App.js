import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import Inicio from "./pages/Inicio";
import "./App.css";
import SobreMimComponent from "./pages/SobreMim";
import Servicos from "./pages/Habilidades";
import ContatoComponent from "./pages/Contato";

function App() {
  return (
    <div className="bg-julia">
      <NavbarComponent />
      <Inicio />
      <SobreMimComponent />
      <Servicos />
      <ContatoComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
