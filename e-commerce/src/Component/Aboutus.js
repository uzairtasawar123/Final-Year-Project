import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <div className="aboutdiv" style={{ width: "1350px", height: "100px" }}>
        <h1
          className="text-white"
          style={{ marginLeft: "590px", padding: "20px" }}
        >
          About
        </h1>
      </div>
      <div className="row shadow" style={{ marginTop: "100px" }}>
        <div className="col-6">
          <h2
            className="mx-3"
            style={{ textDecoration: "underline", fontFamily: "cursive" }}
          >
            About Us
          </h2>
          <br />
          <p className="mx-3" style={{ fontSize: "20px" }}>
            Our online Website platform will help the local rural handicraft men
            and women, giving them a straight path to promoting their indigenous
            products to the vast market of handicraft products. Our platform
            gives them access to the whole world, which will help them to
            improve their business to amazing heights. Our Ai module enables
            these divested to predict their product sales so they can make a
            more reasonable conclusion.
          </p>
        </div>
        <div className="col-6">
          <div className="row text-center align-content-center">
            <div className="col pic text-light"></div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Aboutus;
