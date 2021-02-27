import Skeleton from "react-loading-skeleton";
import React from "react";
import "./style.scss";

const ProductLoader = () => {
    return (
        <div className="product" onClick={() => null}>
            <div className="thumbnail">
                <Skeleton height="100%" />
            </div>
            <div className="detail-product">
                <Skeleton height={20} width="100%" />
                <Skeleton height={20} count={2} width="100%" />
                <div className="buy">
                    <Skeleton height={20} width={100} />
                </div>
            </div>
        </div>
    );
}

export default ProductLoader;