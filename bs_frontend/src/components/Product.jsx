import React from "react";
import "./product.css"
import { cartActions } from "../store";
// import cam1 from "../assets/cam1.jpeg"
import { useDispatch } from "react-redux";

const Product = ({product}) => {

    const dispatch = useDispatch()
    const addItem =() => {
        dispatch(cartActions.addItem(product))
    }
    // console.log(product)
   
    return (
        <div className="product_wrap">
            <div className="img_wrap">
                <img src={`./assets/${product.img}`} alt="" />
            </div>
            <div className="details">
                <div className="name"><h3>{product.name}</h3></div>
                <div className="price">Price: <span>{product.price}</span> </div>
                <div className="color">Color: <span>{product.color}</span> </div>
                <div className="store">Store:<span>{product.store}</span> </div>

            </div>
            <button onClick={addItem}>add to cart</button>
        </div>
    )
}
export default Product;
