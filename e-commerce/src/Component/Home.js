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
import BuyerHomePage from "./BuyerHomePage";
import Admin from "./Admin"
import Seller from "./Seller";

const Home = () => {
  const User = useSelector((state) => state.user);
  const dispatch = useDispatch();


  return User.map((itsuser) => {
    if (itsuser.userType === "seller") {
      return <Seller/>
    } else if(itsuser.userType === "buyer"){
      return <BuyerHomePage />;
    }
    else{
      return <Admin/>;
    }
  });
};

export default Home;
