import React from "react";
import Subtotal from "./Subtotal";
function Checkout(){

    return(
        <div className="d-flex p-2 bg-white">
            <div>
                <div className="ms-3 p-2">
                    <h2>Your shopping basket is empty</h2>
                    <p>You have no items in your basket. Add some items</p>
                </div>
            </div>
            <div>
                <Subtotal/>
            </div>



        </div>
    

    )
}

export default Checkout