import React from "react";
// import "./product.css"
import { cartActions } from "../store";
// import cam1 from "../assets/cam1.jpeg"
import { useDispatch } from "react-redux";

const Product = ({ product }) => {

    const dispatch = useDispatch()
    const addItem = () => {
        dispatch(cartActions.addItem(product))
    }
    // console.log(product)

    return (

        <div class="w-100 mx-2">
            <div class="card shadow-sm">
                <img src={`./assets/${product.img}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.price}</p>
                    <p class="card-text">{product.color}</p>
                    <p class="card-text">{product.store}</p>
                    <button className="btn btn-secondary" onClick={addItem}>add to cart</button>
                </div>
            </div>
        </div>

    )
}
export default Product;
