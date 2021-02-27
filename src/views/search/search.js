import "./style.scss";
import Navbar from "../../components/navbar/navbar";
import BottomNavigation from "../../components/bottom_navigation/bottom-navigation";
import { useState } from "react";
import Axios from "axios";
import {API_URL} from "../../config";
import ProductPlaceholder from "../../components/product-placeholder/product-placeholder";
import Product from "../../components/product/product";
import {ReactComponent as IconNotFound} from "../../assets/icons/product-not-found.svg";
import {ReactComponent as IconSearch} from "../../assets/icons/product-search.svg";

const Search = () => {

    const [IsFetching, setIsFetching] = useState(false);
    const [Products, setProducts] = useState(null);

    const fetchProduct = async (value) => {
        try
        {
            setIsFetching(true);
            const response = await Axios.get(API_URL);
            const products = response.data[0].data.productPromo;
            setProducts(
                products
                .filter(product => value && product.title.toLowerCase().includes(value))
                .map((product) => <Product key={product.id} {...product} />)
            );
            setIsFetching(false);
        }
        catch (e)
        {
            console.error(e);
        }
    };

    return (
        <div className="search-view">
            <Navbar onTyping={fetchProduct}/>
            <div className="content">
                {
                    IsFetching ?
                        (<>
                            <ProductPlaceholder />
                            <ProductPlaceholder />
                            <ProductPlaceholder />
                        </>)
                        : !Products ?
                        <div className="let-search">
                            <IconSearch />
                            <div className="message">Silahkan ketik barang <br/> yang anda cari.</div>
                        </div>
                        : Products.length === 0 ?
                            <div className="let-search">
                                <IconNotFound />
                                <div className="message">Mohon maaf, <br/> barang yang anda cari tidak ditemukan.</div>
                            </div>
                        : Products
                }
            </div>
            <BottomNavigation/>
        </div>
    );
}

export default Search;