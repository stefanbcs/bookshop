import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { Offcanvas, Button } from "react-bootstrap";
import "../css/Filters.css";

function Filters({ filters, setFilters, handleChange, handleReset }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="menu pt-5 container">
                <div className="filter-buttons row ml-3 d-flex">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex mt-3 ps-2">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <ImSearch />
                            </span>
                            <input
                                className="form-control me-2 border-none"
                                id="search-input"
                                name="search"
                                type="text"
                                value={filters.search}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        search: e.target.value
                                    })
                                }
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="d-flex mt-3 ps-2">
                            <label className="input-group-text" htmlFor="sort">
                                <i className="fas fa-sort"></i>Sort by
                            </label>
                            <select
                                name="sort"
                                id="sort"
                                className="form-select border-none"
                                value={filters.sort}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        sort: e.target.value
                                    })
                                }
                            >
                                <option value="none">Recommended</option>
                                <option value="asc">Ascending price</option>
                                <option value="desc">Descending price</option>
                            </select>
                        </div>
                        <div className="mt-3 text-center ps-2">
                            <Button
                                variant="primary"
                                onClick={handleShow}
                                className="me-2"
                            >
                                Filters
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h3>Filters</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form action="/books" id="filter-form" method="get">
                        <fieldset
                            id="filter-category"
                            className="filter-category"
                        >
                            <h4>Category:</h4>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Carte pentru copii"
                                    name="category"
                                    value="Carte pentru copii"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Carte pentru copii"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Carte pentru copii</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Psihologie"
                                    name="category"
                                    value="Psihologie"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Psihologie"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Psihologie</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Science Fiction"
                                    name="category"
                                    value="Science Fiction"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Science Fiction"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Science Fiction</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Fantezie"
                                    name="category"
                                    value="Fantezie"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf("Fantezie") !==
                                        -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Fantezie</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Fictiune"
                                    name="category"
                                    value="Fictiune"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf("Fictiune") !==
                                        -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Fictiune</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Afaceri si economie"
                                    name="category"
                                    value="Afaceri si economie"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Afaceri si economie"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Afaceri si economie</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Filosofie"
                                    name="category"
                                    value="Filosofie"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Filosofie"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Filosofie</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Cultura"
                                    name="category"
                                    value="Cultura"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf("Cultura") !==
                                        -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Cultura</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Dezvoltare Personala"
                                    name="category"
                                    value="Dezvoltare Personala"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Dezvoltare Personala"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Dezvoltare Personala</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Culinar"
                                    name="category"
                                    value="Culinar"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf("Culinar") !==
                                        -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Culinar</label>
                            </div>
                        </fieldset>
                        <fieldset
                            id="filter-price"
                            className="mt-2 filter-price"
                        >
                            <h4>Price:</h4>
                            <div className="filter-item">
                                <input
                                    type="radio"
                                    name="price_range"
                                    id="range_0_20"
                                    value="0_20"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.price_range === "0_20"
                                            ? true
                                            : false
                                    }
                                />
                                <label> 0-20 RON</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="radio"
                                    name="price_range"
                                    id="range_20_50"
                                    value="20_50"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.price_range === "20_50"
                                            ? true
                                            : false
                                    }
                                />
                                <label> 20-50 RON</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="radio"
                                    name="price_range"
                                    id="range_50_"
                                    value="50"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.price_range === "50"
                                            ? true
                                            : false
                                    }
                                />
                                <label> Above 50 RON</label>
                            </div>
                        </fieldset>
                        <fieldset id="filter-rating" className="mt-2">
                            <h4>Minimum rating:</h4>
                            <div className="filter-item">
                                <input
                                    type="number"
                                    value={filters.minimum_rating}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            minimum_rating: e.target.value
                                        })
                                    }
                                    name="minimum_rating"
                                    id="minimum_rating"
                                    min="0"
                                    max="5"
                                />
                            </div>
                        </fieldset>
                        <fieldset id="filter-os" className="mt-2 filter-os">
                            <h4>Publishing house:</h4>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Penguin"
                                    name="publishing_house"
                                    value="Penguin"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Penguin"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Penguin</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Vintage"
                                    name="publishing_house"
                                    value="Vintage"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Vintage"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Vintage</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Bloomsbury"
                                    name="publishing_house"
                                    value="Bloomsbury"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Bloomsbury"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Bloomsbury</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Orion"
                                    name="publishing_house"
                                    value="Orion"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Orion"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Orion</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Cornerstone"
                                    name="publishing_house"
                                    value="Cornerstone"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Cornerstone"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Cornerstone</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Dorling"
                                    name="publishing_house"
                                    value="Dorling"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Dorling"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Dorling</label>
                            </div>
                        </fieldset>
                        <fieldset id="filter-stock" className="mt-2">
                            <h4>In stock:</h4>
                            <input
                                className="filter-item"
                                type="checkbox"
                                name="stock_yes"
                                id="stock_yes"
                                value="true"
                                onChange={handleChange}
                                defaultChecked={filters.stock_yes}
                            />
                            <label>Yes</label>
                        </fieldset>
                        <div className="filter-form-buttons d-flex justify-content-between">
                            <input
                                type="reset"
                                id="reset"
                                className="mt-3 reset-input"
                                value="Reset filters"
                                onClick={handleReset}
                            />
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Filters;
