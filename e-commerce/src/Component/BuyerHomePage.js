import React, { useState, Fragment } from "react";
import Products from "./Products";
import { useEffect } from "react";
import baseUrl from "../BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../Redux/Reducer/ProductSlice";
import "./Home.css";
import Bounce from "react-reveal/Bounce";
import Tada from "react-reveal/Tada";
import Zoom from "react-reveal/Zoom";
import { Rotate } from "react-reveal";
import { addUser } from "../Redux/Reducer/UserSlice";
import SellerHomepage from "./sellerHomepage";
import ammag from "../Images/ammag.jpeg";
import uzair from "../Images/uzair.jpg";
import faizan from "../Images/faizan.jpg";
import abubakar from "../Images/abubakar.jpg";
import samad from "../Images/samad.jpg";
import burhan from "../Images/burhan.jpg";
import haider from "../Images/haider.JPG";
import tehseen from "../Images/tehseen.jpg";
import awais from "../Images/awais.JPG";

const BuyerHomePage = () => {
  const dispatch = useDispatch();

  ///////////////////////  useEffect   ////////////////////
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await baseUrl.get("/ecommerce/getproducts");
      dispatch(addProducts(res.data));
    };
    ////////////////////////////////////

    fetchProduct();
  }, [dispatch]);

  /////////////////////////////////////////////

  return (
    <>
      <div className="row text-center align-content-center">
        <div className="col first_div text-light">
          <h5 className="display-3 text-light font-weight-lighter">
            Welcome To IBP
          </h5>
          <Bounce cascade left duration={2000}>
            <h1 className="iam_h1 display-4 mt-5 ">
              Find Amazing Products Below
            </h1>
          </Bounce>
        </div>
      </div>
      <h1 className="text-center available" style={{ marginTop: "100px" }}>
        Available Products
      </h1>
      <Products />

      <div className="row shadow" style={{ marginTop: "100px" }}>
        <div className="col-6">
          <h2
            className="mx-3"
            style={{ textDecoration: "underline", fontFamily: "cursive" }}
          >
            About Indigenous Products
          </h2>
          <br />
          <p className="mx-3" style={{ fontSize: "20px" }}>
            Indigenous materials are materials that are naturally and locally
            found in a specific place such as timbers, canes,grass , palms, and
            rattan.Other indigenous raw materials in the country that are
            commonly known and used creatively in crafts and decoration are
            capiz, pearls, corals, and seashells, being an archipelago naturally
            abundant in beaches and marine resources.A comprehensive account of
            these products and their traditional and mechanized production is
            however lacking. The current review aims to integrate this
            information in a systematic manner.
          </p>
        </div>
        <div className="col-6">
          <div className="row text-center align-content-center">
            <div className="col second_div text-light"></div>
          </div>
        </div>
      </div>

      <div className=" pt-5">
        <div className="">
          <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="display-4 text-uppercase">Welcome To IBP</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={ammag}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 pb-5">
              <h4 className="mb-4">Here’s how we do it:</h4>
              <p className="mb-5">
                Our Products are Recognized by Industry Experts
              </p>
              <div className="row g-5">
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <i className="fa fa-heartbeat fa-2x text-white"></i>
                  </div>
                  <h4 className="text-uppercase">100% Quality</h4>
                  <p className="mb-0">
                    Finest Quality is our priority. Industry Experts recommend
                    IBP.
                  </p>
                </div>
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <i className="fa fa-award fa-2x text-white"></i>
                  </div>
                  <h4 className="text-uppercase">Customer Satisfaction</h4>
                  <p className="mb-0">
                    Improve customer experiences by enabling online and mobile
                    ordering, multiple payment options and terms. Improve your
                    operational efficiency by digitizing your product catalogs.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-img py-5 mb-5">
        <div class="container py-5">
          <div class="row gx-5 gy-4">
            <div class="col-lg-3 col-md-6">
              <div class="d-flex">
                <div
                  class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i class="fa fa-star text-white"></i>
                </div>
                <div class="ps-4">
                  <h6 class="text-primary text-uppercase">Experienced</h6>
                  <h1
                    class="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="d-flex">
                <div
                  class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i class="fa fa-users text-white"></i>
                </div>
                <div class="ps-4">
                  <h6 class="text-primary text-uppercase">Specialist Team</h6>
                  <h1
                    class="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="d-flex">
                <div
                  class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                 <i class="fa-sharp fa-solid fa-shield text-white"></i>
                </div>
                <div class="ps-4">
                  <h6 class="text-primary text-uppercase">Security</h6>
                  <h1
                    class="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="d-flex">
                <div
                  class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i class="fa fa-mug-hot text-white"></i>
                </div>
                <div class="ps-4">
                  <h6 class="text-primary text-uppercase">Happy Clients</h6>
                  <h1
                    class="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container">
          <div
            class="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h2 class="text-primary font-secondary">Team Members</h2>
            <h1 class="display-4 text-uppercase">Our master tech</h1>
          </div>
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="position-relative overflow-hidden">
                  <img class="img-fluid w-100" src={uzair} alt="" />
                  <div class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div class="d-flex align-items-center justify-content-start">
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bg-dark border-inner text-center p-4">
                  <h4 class="text-uppercase text-primary">Uzair Tasawar</h4>
                  <p class="text-white m-0">Full Stack Developer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="position-relative overflow-hidden">
                  <img class="img-fluid w-100 h-100" src={abubakar} />
                  <div class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div class="d-flex align-items-center justify-content-start">
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bg-dark border-inner text-center p-4">
                  <h4 class="text-uppercase text-primary">Abu Bakar</h4>
                  <p class="text-white m-0">Design</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={faizan} alt="" />
                  <div class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div class="d-flex align-items-center justify-content-start">
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bg-dark border-inner text-center p-4">
                  <h4 class="text-uppercase text-primary">Faizan Raza</h4>
                  <p class="text-white m-0">Front-End Developer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="position-relative overflow-hidden">
                  <img class="img-fluid w-100 " src={samad} alt="" />
                  <div class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div class="d-flex align-items-center justify-content-start">
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="#"
                      >
                        <i class="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bg-dark border-inner text-center p-4">
                  <h4 class="text-uppercase text-primary">Abdul Samad</h4>
                  <p class="text-white m-0">Content Writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container">
          <div
            class="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="display-4 text-uppercase">Our Clients Say!!!</h1>
          </div>
          <div class="owl-carousel testimonial-carousel">
            <div class="testimonial-item bg-dark text-white border-inner p-4">
              <div class="d-flex align-items-center mb-3">
                <img
                  class="img-fluid flex-shrink-0"
                  src={burhan}
                  style={{ width: "60px", height: "60px" }}
                />
                <div class="ps-3">
                  <h4 class="text-primary text-uppercase mb-1">
                    Burhan Khalid
                  </h4>
                  <span>Businessman</span>
                </div>
              </div>
              <p class="mb-0">
                Amazing Experience working with them! Selling products using this platform since an year.
              </p>
            </div>
            <div class="testimonial-item bg-dark text-white border-inner p-4">
              <div class="d-flex align-items-center mb-3">
                <img
                  class="img-fluid flex-shrink-0"
                  src={haider}
                  style={{ width: "60px", height: "60px" }}
                />
                <div class="ps-3">
                  <h4 class="text-primary text-uppercase mb-1">Haider Rauf</h4>
                  <span>Top Seller</span>
                </div>
              </div>
              <p class="mb-0">
                Provides rare manufactured products. 
              </p>
            </div>
            <div class="testimonial-item bg-dark text-white border-inner p-4">
              <div class="d-flex align-items-center mb-3">
                <img
                  class="img-fluid flex-shrink-0"
                  src={awais}
                  style={{ width: "60px", height: "60px" }}
                />
                <div class="ps-3">
                  <h4 class="text-primary text-uppercase mb-1">M Awais</h4>
                  <span>B2B Businessman</span>
                </div>
              </div>
              <p class="mb-0">
                Variety of products at cheap prices are available. 
              </p>
            </div>
            <div class="testimonial-item bg-dark text-white border-inner p-4">
              <div class="d-flex align-items-center mb-3">
                <img
                  class="img-fluid flex-shrink-0"
                  src={tehseen}
                  style={{ width: "60px", height: "60px" }}
                />
                <div class="ps-3">
                  <h4 class="text-primary text-uppercase mb-1">
                    Tehseen Akhtar
                  </h4>
                  <span>B2C Businessman</span>
                </div>
              </div>
              <p class="mb-0">
                Working with them is great. No platform is good enough to compete them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerHomePage;
