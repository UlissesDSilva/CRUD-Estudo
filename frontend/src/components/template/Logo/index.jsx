import { Link } from 'react-router-dom'

import { Logo } from './style'
import logo from '../../../assets/img/logo.png'

export default () => {

  return(
    <Logo className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
    </Logo>
  )
}