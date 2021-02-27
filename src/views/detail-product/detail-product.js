import "./style.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Share2, Heart } from "react-feather";
import Axios from "axios";
import {API_URL} from "../../config";
import allActions from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import Skeleton from "react-loading-skeleton";
import Navbar from "../../components/navbar/navbar";

const DetailProduct = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);

    const [Product, setProduct] = useState(null);
    const InWishlist = wishlist.products.some((product) => product.id === Product?.id);

    const fetchProduct = async () => {
        try
        {
            const response = await Axios.get(API_URL);
            const products = response.data[0].data.productPromo;
            setProduct(products.filter((product) => product.id === slug)[0]);
        }
        catch (e)
        {
            console.error(e)
        }
    }

    const copyToClipboard = () => {
        const tempInput = document.createElement("input");
        tempInput.value = window.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Link copied to clipboard.");
    }

    useEffect(fetchProduct, []);

    const handleBuy = () => {
        dispatch(allActions.cartActions.addToCart(Product));
    }

    const handleWishlist = () => {
        if(InWishlist){
            dispatch(allActions.wishlistActions.removeFromWishlist(Product));
        }else{
            dispatch(allActions.wishlistActions.addToWishlist(Product));
        }
    }

    return (
        <div className="detail-product-view">
            <Navbar title="Detail Product" withBack={true} />
            <div className="content">
                <div className="detail-product">
                    {Product ? (
                        <div className="thumbnail">
                            <img className="img" src={Product.imageUrl} alt={`thumbnail`}/>
                            <button className="share" onClick={copyToClipboard}>
                                <Share2/>
                            </button>
                        </div>
                    ): <Skeleton className="thumbnail" />}
                    <div className="header">
                        {Product ? <h1 className="title">{Product.title}</h1> : <Skeleton height={30} width={200} />}
                        {Product && (
                            <button className={`like ${InWishlist && "active"}`} onClick={handleWishlist}>
                                <Heart/>
                            </button>
                        )}
                    </div>
                    {Product ? (
                        <div className="description">{Product.description}</div>
                    ): <Skeleton count={10} width="100%" />}
                </div>
            </div>
            <div className="bottom-bar">
                {Product ?  <div className="price">$134</div> : <Skeleton height={30} width={50} />}
                {Product ? <button onClick={handleBuy}>Buy Now</button> : <Skeleton height={50} width={75} />}
            </div>
        </div>
    );
}

export default DetailProduct;