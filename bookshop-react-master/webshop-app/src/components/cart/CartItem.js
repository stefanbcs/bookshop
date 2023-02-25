function CartItem({ cartItem, changeQuantity, showDeleteModal }) {
  return (
    <div className="p-2 item-container">
      <h4 className="item-container-product">{cartItem.name}</h4>
      <div className="quantity-div">
        <p>Quantity</p>
        <div className="select-quantity">
          <span>
            <button
              onClick={() => {
                changeQuantity(cartItem.id, "decrease");
              }}
              disabled={cartItem.quantity < 1}
              className="quantity-btn minus-btn"
            >
              <i className="fas fa-minus-circle mx-2"></i>
            </button>
          </span>
          <p className="quantity">{cartItem.quantity}</p>
          <span>
            <button
              onClick={() => {
                changeQuantity(cartItem.id, "increase");
              }}
              disabled={cartItem.quantity > 5}
              className="quantity-btn plus-btn"
            >
              <i className="fas fa-plus-circle mx-2"></i>
            </button>
          </span>
        </div>
      </div>
      <div className="price-div">
        <p>Price</p>
        <p className="price">
          {cartItem.quantity} x {cartItem.price} = {cartItem.quantity * cartItem.price} RON
        </p>
      </div>
      <div className="remove-div">
        <button
          onClick={() => showDeleteModal(cartItem.id)}
          className="delete-item"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
