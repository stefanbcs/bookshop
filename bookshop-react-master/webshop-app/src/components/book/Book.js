import React from "react";
import EditBookModal from "./EditBookModal";
import DeleteBookModal from "./DeleteBookModal";
import Button from "react-bootstrap/esm/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";
import { BASE_URL } from "../../Constants";

function Book({
    id,
    name,
    author,
    category,
    image,
    publishing_house,
    price,
    quantity,
    rating,
    discount,
    date,
    getBooks,
    isAdmin,
    cartItemsNumber,
    setCartItemsNumber
}) {
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [show, setShow] = useState(false);

    const deleteBook = () => {
        fetch(`${BASE_URL}/books/${id}`, {
            method: "DELETE"
        }).then((data) => {
            if (data.status === 200) {
                getBooks();
            }
        });
    };

    const handleAddToCart = (id) => {
        let cartItems = JSON.parse(localStorage.getItem("items"));
        if (cartItems) {
            let count = 0;
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    cartItems[i].quantity += 1;
                    count += 1;
                }
            }
            if (count < 1) {
                cartItems.push({
                    id: id,
                    name: `${name}`,
                    price: price,
                    quantity: 1
                });
            }
            setCartItemsNumber(cartItemsNumber + 1);
            localStorage.setItem("items", JSON.stringify(cartItems));
        } else {
            const items = [
                { id: id, name: `${name}`, price: price, quantity: 1 }
            ];
            localStorage.setItem("items", JSON.stringify(items));
            setCartItemsNumber(cartItemsNumber + 1);
        }
        setShow(true);
    };

    return (
        <>
            <ToastContainer className="p-3 top-0 end-0">
                <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={3000}
                    autohide
                >
                    <Toast.Body>Book added to cart!</Toast.Body>
                </Toast>
            </ToastContainer>
            <DeleteBookModal
                deleteBook={deleteBook}
                onHide={() => setDeleteModalShow(false)}
                show={deleteModalShow}
            />
            <EditBookModal
                id={id}
                category={category}
                name={name}
                author={author}
                publishing_house={publishing_house}
                price={price}
                discount={discount}
                quantity={quantity}
                date={date}
                rating={rating}
                image={image}
                show={editModalShow}
                getBooks={getBooks}
                onHide={() => setEditModalShow(false)}
            />
            <div className="book-card col-lg-3 col-md-4 col-sm-6 col-12 g-3">
                {isAdmin && (
                    <div
                        className="action-buttons d-flex justify-content-end"
                        id={id}
                    >
                        <button
                            className="edit-btn"
                            onClick={() => setEditModalShow(true)}
                        >
                            Edit
                        </button>
                        <button
                            className="delete-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#confirm-delete"
                            onClick={() => setDeleteModalShow(true)}
                        >
                            Delete
                        </button>
                    </div>
                )}
                <div className="book-img d-flex justify-content-center align-items-center">
                    <img src={"images/" + image} alt="Book cover" />
                </div>
                <div className="book-info">
                    <h4 className="book-name">{name}</h4>
                    <p className="author">{author}</p>
                    {discount > 0 ? (
                        <h5>
                            Price:
                            <span> </span>
                            <span className="discounted">{price}</span>
                            <span className="price">
                                {" "}
                                {price - discount}
                            </span>{" "}
                            RON
                        </h5>
                    ) : (
                        <h5>
                            Price: <span className="price">{price}</span> RON
                        </h5>
                    )}
                    <div className="actionButtons">
                        <LinkContainer to={"/books/" + name}>
                            <Button variant="danger">See details &gt;</Button>
                        </LinkContainer>
                        {quantity > 0 ? (
                            <button
                                className="add-to-cart text-center btn btn-danger mt-2"
                                onClick={() => handleAddToCart(id)}
                            >
                                Add to cart
                            </button>
                        ) : (
                            <button
                                className="add-to-cart text-center btn btn-danger mt-2"
                                onClick={() => handleAddToCart(id)}
                                disabled
                            >
                                Add to cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Book;
