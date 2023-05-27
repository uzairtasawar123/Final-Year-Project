import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../BaseUrl";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./sellerHomePage.css";
import './login.css'
import Seller from "./Seller";

const SellerHomepage = () => {
  const navigate = useNavigate()
  const User = useSelector((state) => state.user);

  const Id = User.map((hellouser) => {
    return hellouser._id;
  });

  const [sellerName, setSellerName] = useState("");
  const [productName, setProductName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [Image, setImage] = useState(null);
  const [uploadingImage, setuploadImage] = useState(false);
  const [PreviewImage, setPreviewImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [quality, setQuality] = useState(0);
  const [total, setTotal] = useState(0);

  const Handleimage = (e) => {
    const img = e.target.files[0];
   
      setImage(img);
      setPreviewImage(URL.createObjectURL(img));
    
  };

  const UploadImage = async () => {
    const data = new FormData();
    data.append("file", Image);
    data.append("upload_preset", "hlhrhe2f");
    try {
      setuploadImage(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/image-upload-for-real-time-chat-app/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const urlData = await res.json();
      setuploadImage(false);
      return urlData.url;
    } catch (error) {
      setuploadImage(false);
      console.log(error);
    }
  };

  //////////////////////  HandleSignUp Function   /////////////////////////
  const AddingProduct = async (e) => {
    e.preventDefault();
    if (!Image) {
      return toast.error("Please Upload a Profile Picture");
      //return toast.error("Please Upload a Profile Picture");
    }
    const url = await UploadImage();
    console.log("asdbfbhdskbdsk vsdfk sdfk nsdf kns k", url);

    if (
      !sellerName ||
      !productName ||
      !slug ||
      !category ||
      !description ||
      !price ||
      !quality ||
      !total
    ) {
      return toast.warning("Please Fill out all input fields");
    }
    try {
      const res = await baseUrl.post("/ecommerce/addproduct", {
        Id,
        sellerName,
        productName,
        slug,
        category,
        description,
        url,
        price,
        quality,
        total,
      });

      if (res.data) {
        toast.success(`${res.data}`);
         navigate('/home')
      }
    } catch (error) {
      console.log("Hello", error);
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <div className="addProduct">
        <h1 className=" text-center text-white">Add your Product</h1>
        <div className="row my-2 text-white">
          <div className="col-md-6  mx-auto p-5 signupform">
            <form onSubmit={AddingProduct}>
              <div>
                <img src={PreviewImage} className="productimg mx-auto"></img>
                <label htmlFor="image-upload" className="image-upload-label">
                  <i className="fas fa-plus-circle addicon"></i>
                </label>
                <input
                  type="file"
                  id="image-upload"
                  hidden
                  accept="image/png image/jpeg image/gif image/ico image/jpg "
                  onChange={Handleimage}
                ></input>
              </div>
              <div className=" mb-2">
                <label>Enter seller name</label>
                <input
                  type="text"
                  placeholder="seller name"
                  className="form-control"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter product name</label>
                <input
                  type="text"
                  placeholder="product name"
                  className="form-control"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter product slug</label>
                <input
                  type="text"
                  placeholder="slug"
                  className="form-control"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter category</label>
                <input
                  type="text"
                  placeholder="category name"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter description</label>
                <textarea
                  type="text"
                  placeholder="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter price</label>
                <input
                  type="number"
                  placeholder="Price"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter quality</label>
                <input
                  type="number"
                  placeholder="quality"
                  className="form-control"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                />
              </div>

              <div className=" mb-2">
                <label>Enter total available products</label>
                <input
                  type="number"
                  placeholder="review"
                  className="form-control"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                />
              </div>

              <div>
                <button type="submit" className="btn btn-dark w-20">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default SellerHomepage;
