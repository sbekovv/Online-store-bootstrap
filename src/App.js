import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./Home";
import Cart from "./Cart";
import {CartProvider} from "react-use-cart";

function App() {
    return (
        <div>
            <CartProvider>
                <Home/>
                <Cart/>
            </CartProvider>
        </div>
    );
}

export default App;