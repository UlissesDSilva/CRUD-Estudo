import { Nav } from "./style";
import { Link } from "react-router-dom";

export default (props) => {

  return(
    <Nav className="menu-area">
      <nav className="menu">
        <Link to="/">
          <i className="fa fa-home"></i> Início
        </Link>
        <Link to="/users">
          <i className="fa fa-users"></i> Usuários
        </Link>
      </nav>
    </Nav>
  )
}