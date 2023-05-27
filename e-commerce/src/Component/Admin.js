import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BaseUrl from '../BaseUrl';
import { useDispatch ,useSelector } from "react-redux";
const moment = require('moment');

const Admin = () => {
  

  const [allData , setAllData] = useState()
  const User = useSelector((state) => state.user);

  console.error("ALL" , allData)
  const objonly = Object.assign({}, User);

const getUser = objonly['0'];


useEffect(()=>{
  
   const fetchData = async ()=>{

      try {
          const res = await BaseUrl.get(`/ecommerce/fetchadminhistory`)
          setAllData(res.data)
      } catch (error) {
          console.log(error)
      }

   }
   fetchData()

},[]) 



return (
  <>
  <div className="row mx-auto">
      <div
        className="col-md-8  p-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         
          <table className="table table-hover mx-5">
            <thead className="text-white bg-dark">
              <tr>
                
                <th>Seller name</th>
                <th>Buyer name</th>
                <th>Seller phone</th>
                <th>Buyer Phone</th>
                <th>Product name</th>
                <th>City</th>
                <th>Address</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allData?.map((adminData) => {
                return (
                  <tr key={adminData._id}>
                    <td>{adminData.sellerId.name}</td>
                    <td>{adminData.buyerId.name}</td>
                    <td>{adminData.sellerId.phone}</td>
                    <td>{adminData.buyerId.phone}</td>
                    <td>{adminData.productId.productName}</td>
                    <td>{adminData.city}</td>
                    <td>{adminData.address}</td>
                    <td>{moment(adminData.updatedAt).format('Do/MMMM/YYYY')}</td>
                    <td>{adminData.quantity}</td>
                    <td>{adminData.price}</td>
                    <td>
                      <button className='btn btn-success btn-sm'>paid</button></td>


                    <td>
                      {/* <Link
                        to={`/edit/${adminData._id}`}
                        className="btn btn-dark mx-2"
                      >
                        Edit
                      </Link> */}
                      {/* <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => HandleDelete(adminData._id)}
                      >
                        Delete
                      </button> */}
                    </td>
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

export default Admin
