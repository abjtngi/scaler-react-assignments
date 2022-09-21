import { useState } from "react";
import AddToCart from "./AddToCart";
import "./ProductCard.css";

function ProductCard({title, image, price}) {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="product-card">
            <img 
                className="product-card-img"
                src={image}
                alt={title}
            />
            <div className="product-card-details">
                <div className="product-card-title">
                    {title}
                </div>
                <div className="product-card-price">
                    Rs. {price}
                </div>
                <div className="product-card-addtocart">
                    <AddToCart 
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
