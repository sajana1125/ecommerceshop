import React from 'react'


function Register() {
  return (
    <section>
      <div
        className="container bg-body-secondary py-5">
        <form className='bg-white px-5 py-5'>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label fw-bold fs-5"
            >
              Name
            </label>
            <br />
            <input
              type="text"
              className=" px-5  "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=" frist  name"
            />
            <input
              type="text"
              className=" px-5 ms-2  "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=" last  name"
            />
          </div>
          <div>
            <label
              htmlFor="exampleInputEmail1"
              className="form-label fw-bold fs-5"
            >
              Email Address
            </label>
            <br />
            <input
              type="email"
              className=" px-5  "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=" enter mail"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-bold fs-5"
            >
              Password
            </label>
            <br />
            <input
              type="password"
              className=" px-5 "
              id="exampleInputPassword1"
            />

            <div id="emailHelp" className="form-text ">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register
