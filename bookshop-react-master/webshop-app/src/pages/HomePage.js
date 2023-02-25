import Button from "react-bootstrap/esm/Button";
import { LinkContainer } from "react-router-bootstrap";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/HomePage.css";

function HomePage() {
    const [cartItemsNumber, setCartItemsNumber] = useState(0);

    useEffect(() => {
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
            <NavbarComponent cartItemsNumber={cartItemsNumber} />
            <>
                <main className="main-homepage pt-5">
                    <Row className="main-content d-flex justify-content-start align-items-center">
                        <Col xs={1}></Col>
                        <Col md={4} sm={8} xs={11}>
                            <h3 className="text-white">
                                Take advantage of our offers and purchase your
                                desired book at the best prices!
                            </h3>
                            <LinkContainer to="/books">
                                <Button
                                    variant="outline-light"
                                    className="mt-2"
                                >
                                    See more
                                </Button>
                            </LinkContainer>
                        </Col>
                        <Col xs={7}></Col>
                    </Row>
                </main>
            </>
        </>
    );
}

export default HomePage;
