import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import Inicio from "./pages/Inicio";
import "./App.css";
import SobreMimComponent from "./pages/SobreMim";
import Servicos from "./pages/Habilidades";
import ContatoComponent from "./pages/Contato";
import PortifolioComponent from "./pages/Portifolio";
import Tabela from "./pages/Tabela";
import { useState } from "react";

function App() {
  const [dados, setDados] = useState([]);
  const handleSave = (novoDado) => {
    setDados([...dados, novoDado]);
  };
  return (
    <div className="bg-julia">
      <NavbarComponent />
      <Inicio />
      <SobreMimComponent />
      <Servicos />
      <PortifolioComponent />
      <ContatoComponent onSave={handleSave} />
      <Tabela dados={dados} />
      <FooterComponent />
    </div>
  );
}

export default App;
