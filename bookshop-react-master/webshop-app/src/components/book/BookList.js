import Book from "./Book";
import Filters from "../Filters";

function BookList({
    handleChange,
    handleReset,
    filterValues,
    filters,
    books,
    setFilters,
    getBooks,
    isAdmin,
    cartItemsNumber,
    setCartItemsNumber
}) {
    return (
        <>
            <Filters
                filterValues={filterValues}
                filters={filters}
                setFilters={setFilters}
                handleChange={handleChange}
                handleReset={handleReset}
            />
            <div className="container mt-3 mb-3">
                <div className="row" id="book-row">
                    {books.map((item) => (
                        <Book
                            key={item.id}
                            id={item.id}
                            date={item.availability_date}
                            discount={item.discount}
                            name={item.name}
                            author={item.author}
                            category={item.category}
                            image={item.image}
                            brand={item.brand}
                            publishing_house={item.publishing_house}
                            price={item.price}
                            quantity={item.quantity}
                            rating={item.rating}
                            getBooks={getBooks}
                            isAdmin={isAdmin}
                            cartItemsNumber={cartItemsNumber}
                            setCartItemsNumber={setCartItemsNumber}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BookList;
