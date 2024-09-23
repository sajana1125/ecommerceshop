import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../CartContext";

function Details() {
  let { state, dispatch } = useContext(CartContext);
  let { id } = useParams();
  let [single, setSingle] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((a) => a.json())
      .then((b) => setSingle(b));
  }, [id]);

  return (
    <div className="container py-4">
      <>
        <div className=" single bg-white shadow px-3">
          <img className="" src={single.thumbnail} alt="" />
          <p className="fw-bold">{single.title}</p>
          <p>{single.description}</p>
          <p className="fw-bold"> $ {single.price}</p>

          <button
            className="btn btn-sm box1 text-white mb-2"
            onClick={() => dispatch({ type: "addtocart", payload: single })}
          >
            Add to cart
          </button>
        </div>
      </>
    </div>
  );
}

export default Details;
