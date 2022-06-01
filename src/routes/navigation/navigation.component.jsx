import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Logo}  from '../../assets/crown (1).svg'
import './naviagtion.styles.scss'
const Navigation = () =>{
  <Fragment>
      <div className="navigation">
          <Link className="logo-container" to='/'>
            <Logo className="logo"></Logo>
          </Link>
          <div className="nav-links-container">
              <Link className="nav-link" to='/shop'>
                  SHOP
              </Link>
          </div>
      </div>
  </Fragment>
}

export default Navigation;