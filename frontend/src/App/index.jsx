import { App } from './style'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Routes from '../router'

import 'react-toastify/dist/ReactToastify.css';

export default (props) => {

  return(
    <BrowserRouter>
      <App>
        <Logo/>
        <Nav/>
        <Routes />
        <Footer/>
        <ToastContainer />
      </App>    
    </BrowserRouter>
  )
}