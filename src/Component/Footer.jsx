import React from 'react'
import LOGO from"../assets/darlogo.webp"
import GALLERY from"../assets/gallery.png"
import GOOGLE from"../assets/google.png"
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import IME from"../assets/ime.png"
import ESEWA from"../assets/esewa.png"
import PCI from"../assets/pci.png"
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





function Footer() {
  return (
    <>
      <footer className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h3 className="fw-blod fs-6 px-3">Customer Care</h3>
            <ul className="list fs-6">
              <li>Help Center </li>
              <li> How to Buy </li>
              <li> Returns & Refunds </li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h3 className="fw-blod fs-6 px-3 ms-3">Daraz</h3>
            <ul className="list fs-6">
              <li>About Daraz</li>
              <li>Careers</li>
              <li>Daraz Blog</li>
              <li>Terms & Conditions</li>

              <li> Privacy Policy </li>
              <li>Digital Payments </li>
              <li>Daraz Customer University</li>
              <li> Daraz Affiliate Program</li>
              <li> Review & Win</li>
              <li> Meet the winners </li>
              <li> Daraz University</li>
              <li>Sell on Daraz</li>
              <li> Code of Conduct</li>
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-4 d-flex    ">
                <img className="daraz1" src={LOGO} alt="" />
                <p className="px-3 happy">
                  Happy Shopping <br />
                  <span className="text-black">Download App</span>{" "}
                </p>
              </div>

              <div className="col-lg-6">
                <div className="row d-flex ">
                  <div className="col-lg-6">
                    <img className="w1" src={GOOGLE} alt="" />
                    <Link to="https://appgallery.huawei.com/?spm=a2a0e.tm80335403.footer_top.huawei.607dBIXiBIXiQp&scm=1003.4.icms-zebra-100024112-2877125.OTHER_5439623634_2540321#/app/C100948133">
                      <img className="w1 pt-0" src={GALLERY} alt="" />
                    </Link>
                  </div>
                  <div className="col-lg-6 px-4 ">
                    <Link to="https://apps.apple.com/us/app/daraz-online-shopping-app/id978058048?scm=1003.4.icms-zebra-100024112-2877125.OTHER_5439623634_2540321&spm=a2a0e.tm80335403.footer_top.app_store.35096563l0HDKS">
                      <img className="w1" src={GOOGLE} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-white ">
        <div className=" container ">
          <div className="row">
            <div className="col-lg-6">
              <p className="pt-4">Payment Methods</p>
              <ul className="d-flex gap-3">
                <li className="border list2">
                  <RiVisaLine className="icon mx-auto" />
                </li>
                <li className="border list2">
                  <FaCcMastercard className="icon2 mb-5" />
                </li>
                <li className=" border list2">
                  <img className="w-100 py-4" src={IME} alt="" />
                </li>
                <li className=" border list2">
                  <img className="w-100 pt-4" src={ESEWA} alt="" />
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <p className="pt-4">Verified by</p>
              <div className="">
                <img className="w2" src={PCI} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-3'>
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>Follow Us</p>
            <ul className="d-flex gap-3  justify-content-center">
              <li>
                <FaFacebook className="icon3" />
              </li>
              <li>
                <FaInstagram className="icon3" />
              </li>
              <li>
                <FaYoutube className="icon3" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer
