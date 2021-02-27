import React from "react";
import "./style.scss";

const Category = (props) => {
    return (
        <div className="category">
            <div className="icon">
                <img src={props.imageUrl} alt="Baju Icon"/>
            </div>
            <div className="name">{props.name}</div>
        </div>
    );
}

export default Category;