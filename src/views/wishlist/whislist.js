import "./style.scss";
import Navbar from "../../components/navbar/navbar";
import BottomNavigation from "../../components/bottom_navigation/bottom-navigation";
import {useSelector} from "react-redux";
import Product from "../../components/product/product";

const Wishlist = () => {
    const wishlists = useSelector((state) => state.wishlist);

    return (
        <div className="wishlist-view">
            <Navbar title="Wishlist" withBack={true}/>
            <div className="content">
                {wishlists.products.map((product) => <Product {...product} />)}
            </div>
            <BottomNavigation/>
        </div>
    );
}

export default Wishlist;