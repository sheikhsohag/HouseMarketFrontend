import React, {useEffect} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  faArrowLeft,
  faBangladeshiTakaSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from '../redux/productSlice';

function ProductDetails() {
  const {id} = useParams();
  const {isLoading, product, error} = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProduct(id));
  },[])

 


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
              alt="Product image"
            />
          </div>

          <div className="col-lg-6 ms-5 heightOfInfo">
            <div className="row">
              <div className="col-6">
                <table className="table">
                  <tbody>
                    <tr className="tr">
                      <td className="td">{product.product_name}</td>
                    </tr>
                    <tr className="tr">
                      <td className="td">Brand: {product.brand}</td>
                    </tr>
                    <tr className="tr ">
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

                    <tr className="tr md-3">
                      <td className="d-flex justify-content-between">
                       <span className="mt-2">Status:</span> 
                        <span className="mt-2">
                          {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                    </tr>

                    <tr className="mt-3">
                      <td className="mt-3">
                        <button type="submit" className="btn addToCartBtn mt-4">
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

      <div className="containter-fluid mt-5">
        <p><strong>Description:</strong> {product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
