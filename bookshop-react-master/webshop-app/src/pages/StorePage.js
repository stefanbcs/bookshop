import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import AddBookModal from "../components/book/AddBookModal";
import Breadcrumbs from "../components/Breadcrumbs";
import BookList from "../components/book/BookList";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

import "../css/StorePage.css";
import { BASE_URL } from "../Constants";

function StorePage() {
    const [addModalShow, setAddModalShow] = useState(false);
    const [books, setBooks] = useState([]);
    const [filterValues, setFilterValues] = useState(null);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);
    const [filters, setFilters] = useState({
        category: [],
        price_range: "",
        publishing_house: [],
        minimum_rating: "",
        stock_yes: false,
        search: "",
        sort: "none"
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const isChecked = event.target.checked;
        if (name === "price_range") {
            setFilters({ ...filters, [name]: event.target.value });
        } else if (name === "category" || name === "publishing_house") {
            if (isChecked) {
                setFilters({
                    ...filters,
                    [name]: [...filters[name], event.target.value]
                });
            } else {
                let index = filters[name].indexOf(event.target.value);
                filters[name].splice(index, 1);
                setFilters({ ...filters, [name]: filters[name] });
            }
        } else if (name === "stock_yes") {
            if (isChecked) {
                setFilters({ ...filters, [name]: event.target.value });
            } else {
                setFilters({ ...filters, stock_yes: false });
            }
        }
    };

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

    useEffect(() => {
        getBooks();
    }, [filters]);

    const handleReset = () => {
        setFilters({
            ...filters,
            category: [],
            price_range: "",
            publishing_house: [],
            minimum_rating: "",
            stock_yes: false
        });
    };

    const getBooks = () => {
        axios
            .get(`${BASE_URL}/books`, { params: filters })
            .then(function (response) {
                setBooks(response.data.products);
                setFilterValues(response.data.filters);
            });
    };

    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        localStorage.getItem("user_role") &&
        localStorage.getItem("user_role") === "admin"
            ? setIsAdmin(true)
            : setIsAdmin(false);
    }, []);

    return (
        <>
            <NavbarComponent
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                cartItemsNumber={cartItemsNumber}
            />
            <>
                <Breadcrumbs />
                <BookList
                    cartItemsNumber={cartItemsNumber}
                    setCartItemsNumber={setCartItemsNumber}
                    isAdmin={isAdmin}
                    filterValues={filterValues}
                    filters={filters}
                    books={books}
                    setFilters={setFilters}
                    handleChange={handleChange}
                    handleReset={handleReset}
                    getBooks={getBooks}
                />
                {isAdmin && (
                    <div className="d-flex justify-content-center mb-5 mt-5">
                        <Button
                            variant="danger"
                            onClick={() => setAddModalShow(true)}
                        >
                            Add Book
                        </Button>
                    </div>
                )}
                <AddBookModal
                    show={addModalShow}
                    onHide={() => setAddModalShow(false)}
                    getBooks={getBooks}
                />
                <FooterComponent />
            </>
        </>
    );
}

export default StorePage;
