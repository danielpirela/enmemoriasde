import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuInicio from './components/MenuInicio/MenuInicio';
import InicioPage from './pages/InicioPage'
import MemoriasPage from './pages/MemoriasPage';
import SobreNosotrosPage from './pages/SobreNosotrosPage';
import LibrosPage from './pages/LibrosPage';
import ContactanosPage from './pages/ContactanosPage';
import Error404Page from './pages/Error404Page';


function App() {
  return (
    <div className="App">
      <MenuInicio/>
      <Router>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/memorias" element={<MemoriasPage />} />
          <Route path="/libros-interes" element={<LibrosPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="/contactanos" element={<ContactanosPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
