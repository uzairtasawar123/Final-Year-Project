import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Footer from "./Component/Footer";

import ClickedProduct from "./Component/ClickedProduct";
import CartScreen from "./Component/CartScreen";
import OrderHistory from "./Component/OrderHistory";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import NavigateChallenge from "./Component/NavigateChallenge";
import Payment from "./Component/Payment";
import Aboutus from "./Component/Aboutus";
import Dashboard from "./Component/Dashboard";
import Admin from "./Component/Admin";
import SellerHomepage from "./Component/sellerHomepage";
import Contactus from "./Component/Contactus";
import SellerPrediction from "./Component/SellerPrediction";



function App() {

  return (
    <>
      <Router>
      <ToastContainer position='top-center'  autoClose={3000} closeOnClick
 />
        <Navbar  />
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product/:Slug_id" element={<ClickedProduct/>}/>
        <Route exact path='/cart' element={<CartScreen/>} />
        <Route exact path='/Orderhistory/:userId' element={<OrderHistory/>} />
        <Route exact path='/navigate' element={<NavigateChallenge/>} />
        <Route exact path='/payment/:id/:price/:quantity' element={<Payment/>} />
        <Route exact path='/aboutus' element={<Aboutus/>} />
        <Route exact path='/dashboard' element={<Admin/>} />
        <Route exact path='/addproduct' element={<SellerHomepage/>} />
        <Route exact path='/contactus' element={<Contactus/>} />
        <Route exact path='/showprediction' element={<SellerPrediction/>} />

      </Routes>
      <Footer/>
      </Router>


    </>
  );
}

export default App;
