import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { useState, useEffect } from "react";
import UserList from "../components/user/UserList";
import Breadcrumbs from "../components/Breadcrumbs";
import NotFoundPage from "./NotFoundPage";
function UsersPage() {
    const [cartItemsNumber, setCartItemsNumber] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        localStorage.getItem("user_role") &&
        localStorage.getItem("user_role") === "admin"
            ? setIsAdmin(true)
            : setIsAdmin(false);

        const cartItems = JSON.parse(localStorage.getItem("items"));
        let counter = 0;
        if (cartItems) {
            for (let i = 0; i < cartItems.length; i++) {
                counter = counter + cartItems[i].quantity;
            }
            setCartItemsNumber(counter);
        }
    }, []);

    return (
        <>
            {isAdmin ? (
                <>
                    <NavbarComponent cartItemsNumber={cartItemsNumber} />
                    <>
                        <Breadcrumbs />
                        <UserList />
                        <FooterComponent />
                    </>
                </>
            ) : (
                <NotFoundPage />
            )}
        </>
    );
}

export default UsersPage;
