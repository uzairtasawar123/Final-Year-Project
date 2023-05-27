import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BaseUrl from '../BaseUrl';
import { useDispatch ,useSelector } from "react-redux";
import moment from 'moment';
import './Seller.css'

const Seller = () => {


    const [allData , setAllData] = useState()
    const User = useSelector((state) => state.user);

    const objonly = Object.assign({}, User);

  const getUser = objonly['0'];


useEffect(()=>{
    
     const fetchData = async ()=>{
  
        try {
            const res = await BaseUrl.get(`/ecommerce/fetchsellerhistory/${getUser._id}`)
            setAllData(res.data)
        } catch (error) {
            console.log(error)
        }

     }
     fetchData()

},[]) 
 


  return (
    <>
    <div className="row ">
        {/* <div className="col-md-2 px-5 py-5 ">
          <div>
          <Link to="/addProduct" className="link-primary">
            Add Product
          </Link>
          </div>
         
          <div className='my-1'>
          <Link to="/showprediction" className="link-primary">
             Graph
          </Link>
          </div>
         
        </div> */}
        <div className=" col-2 my-5 ">
          <table className="table table-hover ">
            <tbody>
              <tr>
                <td>
                <Link to="/addProduct" className="link-primary linkDiv">
            Add Product
          </Link>
                </td>
              </tr>
              <tr>
                <td>
                <Link to="/showprediction" className="link-primary linkDiv">
             Graph
          </Link>
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>

        <div
          className="col-md-8  p-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
           
            <table className="table table-hover   table-borderless">
              <thead className="text-white bg-dark">
                <tr>
                  
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allData?.map((buyerData) => {
                  return (
                    <tr key={buyerData._id}>
                      <td>{buyerData.name}</td>
                      <td>{buyerData.email}</td>
                      <td>{buyerData.city}</td>
                      <td>{buyerData.address}</td>
                      <td>{buyerData.buyerId.phone}</td>
                      <td>{buyerData.productId.productName}</td>
                      <td>{moment(buyerData.updatedAt).format('Do/MMMM/YYYY')}</td>
                      <td>{buyerData.quantity}</td>
                      <td>{buyerData.price}</td>
                      <td>
                        <button className='btn btn-success btn-sm'>paid</button></td>


                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default Seller
