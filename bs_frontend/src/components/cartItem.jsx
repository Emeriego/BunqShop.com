import React from "react";
import "./cartItem.css"
import { useDispatch} from "react-redux";
import { cartActions } from "../store";


const cartItem = ({item})=>{
    const dispatch = useDispatch();

    const addItem =() => {
        dispatch(cartActions.addItem(item))
    }
    const removeItem = () => {
        dispatch(cartActions.removeItem(item))
    }

    return (
        
        <div className="item_wrap">
            <div className="name">Item: <span>{item.name}</span></div>
            <div className="price">Price: <span>{item.price}</span></div>
            <div className="qty">Quantity:<span>{item.qty}</span></div>
            <div className="amount">Subtotal:<span>{item.subtotal}</span></div>
            <button className="btn btn-success" onClick={addItem}>+</button>
            <button className="btn btn-warning" onClick={removeItem}>-</button>
        </div>
    )

}
export default cartItem;
