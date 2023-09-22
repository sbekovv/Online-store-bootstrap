import React from 'react';
import {useCart} from "react-use-cart";

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-5">
                        <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                            <td>
                            <img src={item.img} style={{ height: "6rem" }} alt={item.title} />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>Quantity ({item.quantity})
                                <button onClick={() => updateItemQuantity(item.id, item.quantity -1)} className="btn btn-info ms-2">-</button>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity +1)} className="btn btn-info ms-2">+</button>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger ms-2">Del</button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                        <h1>Total Price:$ {cartTotal}</h1>
                </div>
                <div className="col-auto">
                    <button onClick={() => emptyCart()} className="btn btn-danger m-2">Удалить все</button>
                </div>
            </div>
        </section>
    );
}

export default Cart;