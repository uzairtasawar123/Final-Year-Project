import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { emptyState } from "../Redux/Reducer/OrderSlice";
import { useDispatch, useStore } from "react-redux";
import { Slide, toast } from "react-toastify";
import BaseUrl from "../BaseUrl";
import { useState } from "react";

const CustomerOrders = ({ history, customerDetail }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [allOrder, setOrder] = useState();

  ////////////////////////////////////
  const Quantity = history.map((m) => {
    return m.data.reduce((a, b) => {
      return a + b.quantity, 0;
    });
  });

  const Data = Quantity.map((m) => {
    return m.quantity;
  });

  const FinalQuantity = Data.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  /////////////////////////////////
  const Price = Quantity.map((m) => {
    return m.price * m.quantity;
  });

  const FinalPrice = Price.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await BaseUrl.get("/ecommerce/getAllOrder");
        setOrder(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, [setOrder]);

  console.log("Order ds order created successfully", allOrder);

  ////////////////////////////
  // const HandleShop = () => {
  //   dispatch(emptyState());
  //   Navigate("/home");
  // };

  const HandleNav = () => {
    Navigate("/navigate");
  };

  const CancelOrder = async (id) => {
    console.log("Cancelling order", id);
    try {
      const res = await BaseUrl.delete(`/ecommerce/deleteOrder/${id}`);
      toast.success(res.data);
      dispatch(emptyState())
      Navigate("/home");

    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="mx-1 row">
        <div className="col-8">
          <div className="my-2 shadow">
            <h1 className="text-center">Customer Detail</h1>
            <span>
              <b>Name :</b>
              {customerDetail && customerDetail?.name}
            </span>
            <br></br>
            <br></br>

            <span>
              <b>Email :</b>
              {customerDetail && customerDetail?.email}
            </span>
            <br></br>
            <br></br>

            <span>
              <b>Phone No :</b>
              {customerDetail && customerDetail?.phone}
            </span>
          </div>

          <div className="my-5 shadow row">
            <h1 className="text-center">Products Detail</h1>

            {history.length &&
              history.map((item) => {
                return item.data.map((m) => {
                  return (
                    <>
                      <div className=" col-6">
                        <span>
                          <b>Product Name : </b>
                          {m.Name}
                        </span>
                        <br></br>
                        <br></br>

                        <span>
                          <b>Product Quantity : </b>
                          {m.quantity}
                        </span>
                        <br></br>
                        <br></br>

                        <span>
                          <b>Product Price : </b>
                          {m.quantity * m.price}
                        </span>
                        <br />
                        <span>
                          {allOrder.map((getId) => {
                            return (
                              <button
                                className="btn btn-dark"
                                onClick={() => CancelOrder(getId._id)}
                              >
                                Cancel Order
                              </button>
                            );
                          })}
                        </span>

                        <br></br>
                        <br></br>
                      </div>
                      <div className=" my-2 col-4">
                        <img src={m.img} style={{ height: "200px" }}></img>
                      </div>
                    </>
                  );
                });
              })}
          </div>
        </div>
        <div className="my-5 col-4">
          <table className="shadow table table-hover table-bordered ">
            <tbody>
              <tr>
                <td>Total Products</td>
                <td>{FinalQuantity}</td>
              </tr>
              <tr>
                <td>Total Price</td>
                <td>{FinalPrice} Rs</td>
              </tr>
            </tbody>
          </table>
          
          {allOrder?.map((item)=>{
            return (
              <button
              onClick={() => Navigate(`/payment/${item._id}/${FinalPrice}/${FinalQuantity}`)}
              className="btn btn-dark"
            >
              Pay Now
            </button>
            )
          })}
             
            
{/*            
          <button className="btn btn-dark mx-2" onClick={HandleShop}>
            Shop More
          </button> */}
          {/* <button onClick={HandleNav} className='btn btn-dark'>Navigate Challenge</button> */}
        </div>
      </div>
    </>
  );
};

export default CustomerOrders;
