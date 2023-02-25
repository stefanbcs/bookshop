import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";
import "../css/Navbar.css";

function NavbarComponent(props) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    let loggedIn = false;
    let admin = false;
    let username;

    if (localStorage.getItem("user_id")) {
        loggedIn = true;
        username = localStorage.getItem("user_username");
    }

    if (localStorage.getItem("user_role") === "admin") {
        admin = true;
    }

    function handleLogout() {
        localStorage.removeItem("user_username");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_role");
        if (props.setIsAdmin) {
            props.setIsAdmin(false);
        }
        setShow(true);
        setTimeout(() => {
            navigate("/");
        }, 3000);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className="text-danger">
                            <img
                                className="p-1"
                                src="/images/logo.png"
                                width="40"
                                height="40"
                            ></img>
                            BT-BOOKSTORE
                        </Navbar.Brand>
                    </LinkContainer>
                    {props.navStyle !== "simple" && (
                        <>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <LinkContainer to="/">
                                        <Button
                                            variant="link"
                                            className="nav-item"
                                        >
                                            Home
                                        </Button>
                                    </LinkContainer>
                                    <LinkContainer to="/books">
                                        <Button
                                            variant="link"
                                            className="nav-item"
                                        >
                                            Books
                                        </Button>
                                    </LinkContainer>
                                    {admin && (
                                        <LinkContainer to="/users">
                                            <Button
                                                variant="link"
                                                className="nav-item"
                                            >
                                                Users
                                            </Button>
                                        </LinkContainer>
                                    )}
                                </Nav>
                                <Nav>
                                    <LinkContainer to="/cart">
                                        <Button
                                            variant="link"
                                            className="nav-item"
                                        >
                                            <BsCartFill />
                                            Cart{" "}
                                            <Badge bg="secondary">
                                                {props.cartItemsNumber}
                                            </Badge>{" "}
                                        </Button>
                                    </LinkContainer>
                                    {loggedIn ? (
                                        <Button
                                            variant="link"
                                            className="nav-item"
                                        >
                                            <FaUser />
                                            <NavDropdown
                                                title={username}
                                                id="nav-dropdown-dark-example"
                                                menuVariant="dark"
                                            >
                                                <LinkContainer to="/profile">
                                                    <NavDropdown.Item>
                                                        Profile Settings
                                                    </NavDropdown.Item>
                                                </LinkContainer>
                                                <LinkContainer to="/orders">
                                                    <NavDropdown.Item>
                                                        Order History
                                                    </NavDropdown.Item>
                                                </LinkContainer>
                                                <NavDropdown.Item
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </Button>
                                    ) : (
                                        <LinkContainer to="/auth/login">
                                            <Button variant="outline-danger">
                                                Login
                                            </Button>
                                        </LinkContainer>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </>
                    )}
                </Container>
            </Navbar>
            <ToastContainer className="p-3 top-0 end-0">
                <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={3000}
                    autohide
                >
                    <Toast.Body>You've been logged out!</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default NavbarComponent;
