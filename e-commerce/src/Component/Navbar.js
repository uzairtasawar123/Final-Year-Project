import React from "react";
import ShoppingCartRounded from "@material-ui/icons/ShoppingCartRounded";
import { useDispatch ,useSelector } from "react-redux";
import Jump from "react-reveal/Jump";
import {useNavigate} from 'react-router-dom'
import {logOutUSer} from '../Redux/Reducer/UserSlice'
import {emptyState} from '../Redux/Reducer/OrderSlice'
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const saveUser = JSON.parse(localStorage.getItem("userToken"));
  
  //////////////////////////////////
  const CartProducts = useSelector((state) => state.order);
  const HistoryCart = useSelector((state)=> state.history)
  const User = useSelector((state) => state.user);
  const Navigate = useNavigate()
  const dispatch  = useDispatch()
  //////////////////////////////////
const HandleLogOut = ()=>{

  dispatch(logOutUSer())
  dispatch(emptyState())
  localStorage.removeItem('userToken')
  localStorage.removeItem('user')
  Navigate('/')
    
}
/////////////////////////////////////////////////////////
  return (
    <>
      

<div>
      <nav className=" navbar navbar-expand-lg bg-dark py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 text-white" to="/">
            IBP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {saveUser?( <li className="nav-item">
                <NavLink className="nav-link text-white" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>):(<></>)}
             
             
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contactus">
                  Contact Us
                </NavLink>
              </li>
              
            </ul>
            {User.map((m) => {
          return (
            <>

            <div className='text-white ms-auto '>
              
                 
              {/* {m.userType === 'seller' ? (<button className="btn btn-outline-success mx-2">
                 Order History
               </button>):(<>ok</>)} */}
                
              
              {m.name}
            <button className='btn btn-outline-danger mx-2' onClick={HandleLogOut}>Log Out</button>
            </div>
          
            </>
          );
        })}
         <div className="mx-4">
          <ShoppingCartRounded
            className=""
            style={{ color: "white" }}
          ></ShoppingCartRounded>
         {}

          {CartProducts.map((product) => {
            return (
              <Jump forever>
                <span
                  className="badge"
                  style={{ backgroundColor: "red", borderRadius: "100%" }}
                >
                  {product.quantity}
                </span>
              </Jump>
            );
          })}
          <Jump forever></Jump>
        </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
