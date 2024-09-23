import React, { useContext } from 'react'
import CartContext from '../CartContext';

function Cart() {
      let { state, dispatch } = useContext(CartContext);
  return (
    <>
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            {/* <tr>
              <th style={{ width: "50%" }}>Product</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "8%" }}>Quantity</th>
              <th style={{ width: "22%" }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: "10%" }} />
            </tr> */}
          </thead>
          <tbody>
            {state.cartlist.map((a) => (
              <tr>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img src={a.thumbnail} alt="..." className="w-100" />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">{a.title}</h4>
                      <p>{a.description}</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">$ {a.price}</td>
                <td data-th="Quantity">
                  <input
                    type="number"
                    className="form-control text-center"
                    defaultValue={1}
                  />
                </td>
                <td data-th="Subtotal" className="text-center">
                  {a.price}
                </td>
                <td className="actions" data-th>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch({ type: "remove", payload: a })}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="visible-xs">
              <td className="text-center">
                <strong>Total 1.99</strong>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" className="btn btn-warning">
                  <i className="fa fa-angle-left" /> Continue Shopping
                </a>
              </td>
              <td colSpan={2} className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>Total $1.99</strong>
              </td>
              <td>
                <a href="#" className="btn btn-success btn-block">
                  Checkout <i className="fa fa-angle-right" />
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default Cart
