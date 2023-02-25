import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import Order from "../components/Order";
import "../css/Orders.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);

    let loggedIn = false;
    let idUser = localStorage.getItem("user_id");

    if (idUser) {
        loggedIn = true;
    }

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("items"));
        let counter = 0;
        if (cartItems) {
            for (let i = 0; i < cartItems.length; i++) {
                counter = counter + cartItems[i].quantity;
            }
            setCartItemsNumber(counter);
        }

        fetch(`http://localhost:3001/orders/user/${idUser}`)
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, []);

    return (
        <>
            <NavbarComponent cartItemsNumber={cartItemsNumber} />
            <>
                <div className="order-main">
                    {loggedIn && orders.length > 0 ? (
                        <>
                            {orders.map((order) => (
                                <Order
                                    key={order.id}
                                    order={order}
                                    id={order.id}
                                    email={order.email}
                                    name={order.name}
                                    phone={order.name}
                                    date={order.date}
                                    total={order.total}
                                    deliveryAddress={order.delivery_address}
                                    billingAddress={order.billing_address}
                                />
                            ))}
                        </>
                    ) : loggedIn && orders.length === 0 ? (
                        <div className="text-center mt-5">
                            <h3>You don't have any orders yet</h3>
                            <Link to="/">Go back to Home page</Link>
                        </div>
                    ) : (
                        <div className="text-center mt-5">
                            <h3>You're not allowed on this page</h3>
                            <Link to="/">Go back to Home page</Link>
                        </div>
                    )}
                </div>
                <FooterComponent />
            </>
        </>
    );
}

export default OrdersPage;
