import React from "react";
// import "./product.css"
import { cartActions } from "../store";
// import cam1 from "../assets/cam1.jpeg"
import { useDispatch } from "react-redux";

const CraftBox = ({ craft }) => {

    const dispatch = useDispatch()
    const addItem = () => {
        dispatch(cartActions.addItem(craft))
    }
    // console.log(product)

    return (
        <div className="col-sm-2 col-md-4 col-lg-3">
        <div className="box">
            {/* <a href=""> */}
                <div className="img-box">
                    <img src={`./assets/images/${craft.img}`} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        {craft.name}
                    </h5>
                    <h6>
                        <span>
                            {craft.store.name}
                        </span>
                    </h6>
                    <h6>
                        <span>
                            {craft.price}
                        </span>
                    </h6>
                </div>
                <div className="new">
                    <span>
                        New
                    </span>
                </div>
                <button onClick={addItem} className='btn buy'>Buy Now</button>
            {/* </a> */}
        </div>

</div>
    )
}
export default CraftBox;
