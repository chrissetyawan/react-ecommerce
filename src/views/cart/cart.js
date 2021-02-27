import "./style.scss";
import Navbar from "../../components/navbar/navbar";
import Product from "../../components/product/product";
import BottomNavigation from "../../components/bottom_navigation/bottom-navigation";
import {useSelector} from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <div className="cart-view">
            <Navbar title="Purchase History" withBack={true} />
            <div className="content">
                {cart.products.map((product) => <Product {...product} noBuyButton={true} />)}
            </div>
            <BottomNavigation/>
        </div>
    );
}

export default Cart