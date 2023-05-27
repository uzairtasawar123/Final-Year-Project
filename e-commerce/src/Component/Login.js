import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../BaseUrl";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Reducer/UserSlice";
import loginimg from "../Images/login.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  //////////////////////////////////////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ///////////////////////////////////////////
  const HandleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.warning("Please Fill out all input fields");
    }
    try {
      const res = await baseUrl.post("/user/login", {
        email,
        password,
      });
      if (res.data) {
        localStorage.setItem("userToken", JSON.stringify(res.data));
        Navigate("/home");
      }

      //////////////////////////////////////////////////////////////

      const save = JSON.parse(localStorage.getItem("userToken"));
      console.log("TOKEN", save);
      try {
        const res = await baseUrl.get("/user/getuser", {
          headers: {
            auth: save.token,
          },
        });
        dispatch(addUser(res.data));
      } catch (error) {
        console.log("errr", error);
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <div className="loginimg">
          <h1 className=" text-center text-white">Log In to your account</h1>
        <div className="row my-4 text-white">
          <div className="col-md-6 loginform mx-auto p-5  rounded" style={{backgroundColor:''}}>
            <form onSubmit={HandleSignIn}>
              <div className=" mb-2">
                <label>Enter your Email</label>
                <i className="fa-solid fa-envelope mx-1"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter your Password</label>
                <i className="fa-solid fa-key mx-1"></i>{" "}
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <input type="submit" className="btn btn-dark w-20" />
                <span className="mx-1">
                  Don't have an account?
                  <span className="mx-1">
                  <Link to="/signup" className="text-info">Sign Up</Link>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
