import { useEffect } from "react";
import {Route, Switch, Redirect, useHistory, Private} from "react-router-dom";
import LoginView from "./views/login/login";
import Search from "./views/search/search";
import HomeView from "./views/home/home";
import DetailProduct from "./views/detail-product/detail-product";
import Cart from "./views/cart/cart";
import Wishlist from "./views/wishlist/whislist";

const Router = () => {

    const history = useHistory();

    useEffect(() => {
        !localStorage.getItem('token') && history.push("/login");
    }, []);

    return (
        <Switch>
            <Route path="/login"><LoginView/></Route>
            <PrivateRoute exact path="/"><HomeView /></PrivateRoute>
            <PrivateRoute path="/search"><Search/></PrivateRoute>
            <PrivateRoute path="/cart"><Cart/></PrivateRoute>
            <PrivateRoute path="/wishlistReducer"><Wishlist/></PrivateRoute>
            <PrivateRoute path="/product/:slug"><DetailProduct/></PrivateRoute>
            <Redirect from="*" to="/" />
        </Switch>
    );

    function PrivateRoute({ children, ...rest }) {
        let auth = localStorage.getItem('token');
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    auth ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    }
}

export default Router;