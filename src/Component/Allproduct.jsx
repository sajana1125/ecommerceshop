import React, { useContext, useEffect, useState } from "react";
import CartContext from "../CartContext";
import { Link } from "react-router-dom";


function Allproduct(props) {
  let { state, dispatch } = useContext(CartContext);
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${props.name}`)
      .then((a) => a.json())
      .then((b) => setProducts(b.products));
  }, []);
  console.log(products);
  return (
    <>
      <div className="container py-3">
        <h2 className="fs-3 fw-bold text-uppercase "> {props.name} </h2>
        <div className="row">
          {products.slice(0, 4).map((a) => (
            <div className="col-lg-3  py-3" key={a.name}>
              <div className="shadow bg-white   pic1 ">
                <div className="pic">
                  <img
                    className="w-full px-3 object-fit-contain "
                    src={a.thumbnail}
                    alt=""
                  />
                  <div className="py-2">
                    <Link
                      to={`/details/${a.id}`}
                      className=" px-2 fw-bold title text-decoration-none link-dark"
                    >
                      {a.title}
                    </Link>
                    <p className="fw-bold px-3"> $ {a.price}</p>
                    <button
                      className="btn btn-sm box1 text-white mb-2 ms-3"
                      onClick={() =>
                        dispatch({ type: "addtocart", payload: a })
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Allproduct;
