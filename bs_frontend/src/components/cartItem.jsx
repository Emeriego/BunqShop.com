import React from "react";
import "./cartItem.css"


const cartItem = ()=>{

    return (
        <div className="item_wrap">
            <div className="name">Item:</div>
            <div className="price">Price:</div>
            <div className="qty">Quantity:</div>
            <div className="amount">Subtotal:</div>
            <button>+</button>
            <button>-</button>
        </div>
    )

}
export default cartItem;
