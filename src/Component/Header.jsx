import React, { useContext, useEffect, useState } from "react";
import LOGO from "../assets/daraz.png";
import { FaPhone } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { Link, Route, Router, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { BiCategory } from "react-icons/bi";
import Catageory from "../Pages/Catageory";
import Cart from "../Pages/Cart";
import CartContext from "../CartContext";
import Details from "../Pages/Details";
import Register from "../Pages/Register";

function Header() {
let {state, dispatch}=useContext(CartContext)

  let[data, setData]=useState([])
  useEffect(()=>{
fetch(`https://dummyjson.com/products/Categories`)
  .then((res) => res.json())
  .then((json) => setData(json));
  },[])
  console.log(data)
  return (
    <>
      <header className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Link to="/">
                <img className=" daraz " src={LOGO} alt="" />{" "}
              </Link>
            </div>
            <div className="col-lg-8  text-end py-3 fw-bold">
              <FaPhone />
              +123 ( 456 ) ( 7890 )
            </div>
          </div>
        </div>

        <nav className=" navbar head navbar-expand-lg bg-[#F85606]">
          <div className="container-fluid ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav px-5 mb-2 mb-lg-0  ">
                <li className="nav-item  fs-5">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link text-white  dropdown-toggle fs-5"
                    to="/category"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </Link>
                  <ul className="dropdown-menu bg-white border  text-gray-800   ">
                    <div className="catlist">
                      {data.map((a) => (
                        <li className="py-2 border  px-3">
                          <Link
                            className="text-decoration-none text-dark"
                            to={`/cata/${a.slug}`}
                          >
                            {a.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                </li>

                <li className="nav-item fs-5">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <form className="d-flex  mx-auto   " role="search">
                <input
                  className="form-control box text-center "
                  type="search"
                  placeholder="Search items"
                  aria-label="Search"
                />
                <button className="btn border-white" type="submit">
                  <IoSearch />
                </button>

                <Link
                  to="/register"
                  className="btn  fs-5 ms-5 text-white text-decoration-none "
                >
                  <RiAccountCircleFill  />  Account
                </Link>

                <Link
                  type="button"
                  className="btn text-white fs-5  position-relative ms-2 "
                  to="/cart"
                >
                  <CgShoppingCart /> Cart
                  <span className="position-absolute  top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {state.cartlist.length}{" "}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>

                <button className="btn fs-5 ms-3 text-white">
                  <FaRegHeart />  Wishlist
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cata/:cid/" element={<Catageory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id/" element={<Details/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </header>
    </>
  );
}

export default Header;
