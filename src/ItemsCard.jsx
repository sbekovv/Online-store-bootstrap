import React from 'react';
import {useCart} from "react-use-cart";

function ItemsCard(props) {
    const {addItem} = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top img-fluid" style={{width:"350px", height:"200px"}} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.title}</h5>
                        <h5 className="card-title">${props.price}</h5>
                        <button onClick={()=> addItem(props.item)} className="btn btn-primary">Add to Cart</button>
                    </div>
            </div>
        </div>
    );
}

export default ItemsCard;