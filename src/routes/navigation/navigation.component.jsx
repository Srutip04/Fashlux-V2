import { Fragment , useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import {ReactComponent as Logo}  from '../../assets/crown (1).svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CartContext, CartProvider } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './naviagtion.styles.jsx'


const Navigation = () =>{
  const currentUser = useSelector(selectCurrentUser);
  const {isCartOpen} = useContext(CartContext)
  console.log(currentUser);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo/>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </NavLinks>
       {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;