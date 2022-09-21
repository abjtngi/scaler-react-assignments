function AddToCart({quantity, setQuantity}) {

    function incrementQunatity() {
        setQuantity(quantity + 1)
    }

    function decrementQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    if (quantity > 0) {
        return (
            <div className="product-card-counter">
                <button
                    className="product-card-cta"
                    onClick={decrementQuantity}
                >
                    -
                </button>
                <span
                    className="product-card-quantity"
                >
                    {quantity}
                </span>
                <button
                    className="product-card-cta"
                    onClick={incrementQunatity}
                >
                    +
                </button>
            </div>
        )
    } else {
        return (
            <button
                className="product-card-cta"
                onClick={incrementQunatity}
            >
                Add to cart
            </button>
        )
    }
}

export default AddToCart;
