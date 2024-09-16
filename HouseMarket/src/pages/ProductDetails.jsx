import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  faArrowLeft,
  faBangladeshiTakaSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/Rating";

function ProductDetails() {
  const location = useLocation();
  const product = location.state;

  return (
    <div className="container">
      <div>
        <Link to={"/"}>
          <button type="submit" className="btn mt-5">
            <FontAwesomeIcon className="me-2" icon={faArrowLeft} />
            Go Back
          </button>
        </Link>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <img
              className="productDetailsImage"
              src={`http://127.0.0.1:8000/${product.image}`}
              alt=""
            />
          </div>

          <div className="col-lg-6 ms-5">
            <div className="row">
              <div className="col-6">
                <table className="table">
                  <tbody>
                    <tr className="tr">
                      <td className="td">{product.name}</td>
                    </tr>
                    <tr className="tr">
                      <td className="td">Brand: {product.brand}</td>
                    </tr>
                    <tr className="tr">
                      <td className="td">
                        <Rating value={product.rating} color={"#f8e825"} />(
                        {product.rating})
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="td">
                        Price: {product.price}{" "}
                        <FontAwesomeIcon
                          icon={faBangladeshiTakaSign}
                          className="taka-sign"
                        />
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="td">{product.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-6">
                <table className="table">
                  <tbody>
                    <tr className="tr">
                      <td className="d-flex justify-content-between">
                        Price:{" "}
                        <span>
                          {product.price}{" "}
                          <FontAwesomeIcon
                            icon={faBangladeshiTakaSign}
                            className="taka-sign"
                          />
                        </span>
                      </td>
                    </tr>

                    <tr className="tr">
                      <td className="d-flex justify-content-between">
                        Status:
                        <span>
                          {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="">
                        <button type="submit" className="btn addToCartBtn">
                          Add To Cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
