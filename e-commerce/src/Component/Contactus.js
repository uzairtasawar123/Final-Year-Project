import React, {useState} from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../BaseUrl";
import { toast } from "react-toastify";

const Contactus = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setMessage] = useState("");

    const HandleMessage = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
          return toast.warning("Please Fill out all input fields");
        }
        //////////////////////////////////////////////
        try {
          const res = await baseUrl.post("/user/message", {
            name,
            email,
            subject,
            message,
          });
    
          if (res.data) {
            toast.success(`${res.data}`);
          }
        } catch (error) {
          toast.error(error.response.data);
        }
      };
    


  return (
    <>
      <div class="container-fluid bg-dark bg-img p-5 mb-5">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="display-4 text-uppercase text-white">Contact Us</h1>
          </div>
        </div>
      </div>

      <div
        class="container-fluid contact position-relative px-5"
        style={{ marginTop: "90px" }}
      >
        <div class="container">
          <div class="row g-5 mb-5">
            <div class="col-lg-4 col-md-6">
              <div class="bg-primary border-inner text-center text-white p-5" >
                <i class="fa-sharp fa-solid fs-1 fa-location-dot"></i>{" "}
                <h6 class="text-uppercase my-2">Our Office</h6>
                <span>UET Lahore</span>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="bg-primary border-inner text-center text-white p-5">
                <i className="fa-solid fa-envelope fs-1 mx-1"></i>
                <h6 class="text-uppercase my-2">Email Us</h6>
                <span>ibp@gmail.com</span>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="bg-primary border-inner text-center text-white p-5">
                <i class="fa-solid fa-phone fs-1 mx-1"></i>
                <h6 class="text-uppercase my-2">Call Us</h6>
                <span>+923123456789</span>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-6">
            <form onSubmit={HandleMessage}>
              <div className=" mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control bg-light border-0 px-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
             
              <div className=" mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control bg-light border-0 px-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <input
                  type="text"
                  placeholder="subject"
                  className="form-control bg-light border-0 px-4"
                  value={subject}
                  onChange={(e) => setsubject(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <textarea
                  type="text"
                  placeholder="message"
                  className="form-control bg-light border-0 px-4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-dark w-20 ">
                  send message
                </button>
                </div>

            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
