import "./MenuInicio.css";
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import InicioPage from "../../pages/InicioPage";
import LibrosPage from "../../pages/LibrosPage";
import MemoriasPage from "../../pages/MemoriasPage";
import ContactanosPage from "../../pages/ContactanosPage";
import Error404Page from "../../pages/Error404Page";
import SobreNosotrosPage from "../../pages/SobreNosotrosPage";

function Links() {
    return (
      <div>
        <ul>
          <li>
      <NavLink activeClassName="active_links" to="/">Inicio</NavLink>
      <NavLink activeClassName="active_links" to="/libros">Libros de interes</NavLink>
      <NavLink activeClassName="active_links" to="/memorias">Memorias</NavLink>
      <NavLink activeClassName="active_links" to="/sobreNosotros">Sobre Nosotros</NavLink>
      <NavLink activeClassName="active_links" to="/contactanos">Contactanos</NavLink>
          </li>
        </ul>
      </div>
    );
  }

function MenuInicio() {
  return (
    <div className="menu-inicio">
        <Router>
            <Links />
          <Switch>
            <Route path="/" exact component={InicioPage} />
            <Route path="/libros" exact component={LibrosPage} />
            <Route path="/memorias" exact component={MemoriasPage} />
            <Route path="/sobreNosotrod" exact component={SobreNosotrosPage} />
            <Route path="/contactanos" exact component={ContactanosPage} />
            <Route path="*" exact component={Error404Page} />
          </Switch>
        </Router>
    </div>
  );
}

export default MenuInicio;