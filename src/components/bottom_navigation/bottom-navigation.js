import React from "react";
import "./style.scss";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Home, Heart, ShoppingCart, Power } from "react-feather";

const BottomNavigation = () => {

    const location = useLocation();
    const history = useHistory();
    const path = location.pathname;

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.clear();
        window.history.replaceState(null, null, "/login");
        history.replace("/login");
    }
    return (
        <div className="bottom-navigation">
            <ul>
                <li className={path === '/' || path === '/search' ? 'active' : ''}>
                    <Link to="/">
                        <Home/>
                        <div className="name">Home</div>
                    </Link>
                </li>
                <li className={path === '/wishlistReducer' ? 'active' : ''}>
                    <Link to="/wishlistReducer">
                        <Heart/>
                        <div className="name">Wishlist</div>
                    </Link>
                </li>
                <li className={path === '/cart' ? 'active' : ''}>
                    <Link to="/cart">
                        <ShoppingCart/>
                        <div className="name">Cart</div>
                    </Link>
                </li>
                <li>
                    <a href="#" onClick={handleLogout}>
                        <Power/>
                        <div className="name">Logout</div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default BottomNavigation;