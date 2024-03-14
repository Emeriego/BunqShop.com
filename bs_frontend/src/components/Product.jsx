import React from "react";
import "./product.css"
// import cam1 from "../assets/cam1.jpeg"

const Product = ({name, price, color, store, img}) => {

    return (
        <div className="product_wrap">
            <div className="img_wrap">
                <img src={`./assets/${img}`} alt="" />
            </div>
            <div className="details">
                <div className="name"><h3>{name}</h3></div>
                <div className="price">Price: <span>{price}</span> </div>
                <div className="color">Color: <span>{color}</span> </div>
                <div className="store">Store:<span>{store}</span> </div>

            </div>
            <button>add to cart</button>
        </div>
    )
}
export default Product;
