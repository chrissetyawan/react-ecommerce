import "./style.scss";
import React, {  useState, useEffect } from "react";
import BottomNavigation from "../../components/bottom_navigation/bottom-navigation";
import axios from "axios";
import Product from "../../components/product/product";
import Category from "../../components/category/category";
import Navbar from "../../components/navbar/navbar";
import { API_URL } from "../../config";
import ProductLoader from "../../components/product-placeholder/product-placeholder";
import Skeleton from "react-loading-skeleton";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [IsFetching, setIsFetching] = useState(false);

    const fetchHome = async () => {
        try
        {
            setIsFetching(true);
            const response = await axios.get(API_URL);
            const data = response.data[0].data;
            setCategories(data.category.map((category) => (
                <Category key={category.id} {...category} />
            )));
            setProducts(data.productPromo.map((product) => (
                <Product key={product.id} {...product} />
            )));
            setIsFetching(false);
        }
        catch (e)
        {
            console.error(e);
        }
    };

    useEffect(fetchHome, []);

    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <div className="categories">
                    {!IsFetching
                        ? categories
                        : (
                            <>
                                <Skeleton width={100} height={115} style={{marginLeft: 20, marginRight: 15}}/>
                                <Skeleton width={100} height={115} style={{marginRight: 15}}/>
                                <Skeleton width={100} height={115} style={{marginRight: 15}}/>
                                <Skeleton width={100} height={115} style={{marginRight: 15}}/>
                                <Skeleton width={100} height={115} style={{marginRight: 15}}/>
                            </>
                        )
                    }
                </div>
                <div className="products">
                    <h3 className="subtitle">Products</h3>
                    <div className="grid">
                        {!IsFetching
                            ? products
                            : (
                            <>
                                <ProductLoader />
                                <ProductLoader />
                                <ProductLoader />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <BottomNavigation/>
        </div>
    );
}

export default Home;