import "./style.scss";
import {Heart} from "react-feather";
import React from "react";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import allActions from '../../actions';

const Product = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
    const InWishlist = wishlist.products.some((product) => product.id === props.id);

    const handleGotoDetail = (event) => {
        history.push("/product/"+props.id)
    }

    const handleWishlist = (event) => {
        event.stopPropagation();
        if(InWishlist) {
            dispatch(allActions.wishlistActions.removeFromWishlist(props));
        } else {
            dispatch(allActions.wishlistActions.addToWishlist(props));
        }
    }

    const handleBuy = (event) => {
        event.stopPropagation();
        dispatch(allActions.cartActions.addToCart(props));
    }

    return (
        <div className="product" onClick={handleGotoDetail}>
            <div className="thumbnail">
                <img src={props.imageUrl} alt={`${props.title} thumbnail`} className="img" />
                {!props.noWishlistButton && (
                    <button className={`like-button ${InWishlist && "active"}`} onClick={handleWishlist}>
                        <Heart />
                    </button>
                )}
            </div>
            <div className="detail-product">
                <h5 className="product-name" >{props.title}</h5>
                <p className="product-description" >{props.description}</p>
                <div className="buy">
                    <div className="price">{props.price}</div>
                    {!props.noBuyButton && <button className="buy-button" onClick={handleBuy}>Buy</button>}
                </div>
            </div>
        </div>
    );
};

export default Product;