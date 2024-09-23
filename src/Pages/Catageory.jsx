import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CartContext from '../CartContext';

function Catageory() {
  let { state, dispatch } = useContext(CartContext);
    let { cid } = useParams();
    let [products, setProducts] = useState([]);
    useEffect(() => {
      fetch(`https://dummyjson.com/products/category/${cid}`)
        .then((a) => a.json())
        .then((b) => setProducts(b.products));
    }, [cid]);
    return (
      <div className="container py-2">
        <h2 className="text-uppercase">{cid}</h2>
        <div className="row">
          {products.map((a) => (
            <div className="col-lg-3 py-3" key={a.id}>
              <div className="shadow  bg-white">
                <img src={a.thumbnail} alt="" />
                <div className="p-2">
                  <Link
                    to={`/details/${a.id}`}
                    className="fw-bold text-decoration-none link-dark"
                  >
                    {a.title}
                  </Link>
                  <p className="fw-bold"> $ {a.price}</p>
                  <button
                    className="btn btn-sm box1 text-white"
                    onClick={() => dispatch({ type: "addtocart", payload: a })}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Catageory
