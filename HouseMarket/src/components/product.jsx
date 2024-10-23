import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";
import { Link, useLocation } from "react-router-dom";

function Product({ product }) {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3 col-xl-3 card m-1">
        
        <div className="cart-image">
          <Link to={`product/${product.id}`} state={product}>
            <img
              src={`http://127.0.0.1:8000${product.image}`}
              alt="Product image"
            />
          </Link>
        </div>

        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <div className="product-price">
            <p>
              <FontAwesomeIcon
                icon={faBangladeshiTakaSign}
                className="taka-sign"
              />
              {product.price}
            </p>
          </div>
          <div>
            <Rating value={product.rating} color={"#f8e825"} />
            {`(${product.rating})`}
            <button type="submit" className="btn addToCartBtn">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
