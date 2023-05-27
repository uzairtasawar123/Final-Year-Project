import React, {useState , useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import BaseUrl from "../BaseUrl";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { toast } from "react-toastify";
import { useNavigate , useParams} from "react-router";
import {emptyState} from '../Redux/Reducer/OrderSlice'


const Payment = () => {
  const User = useSelector((state) => state.user);
  const product = useSelector((state) => state.order);

//////////////////////////////////////
 const objonly = Object.assign({}, product);

  const orderProduct = objonly['0'];

  const productId  = orderProduct._id;
  const sellerId = orderProduct.sellerId;
  


  const {id , price , quantity} = useParams()
  console.log(User)
  const dispatch  = useDispatch()

  const navigate = useNavigate()
  const buyer = User.map((m)=>{
       return m._id
  })
  const buyerId = buyer.toString()
  console.warn(buyerId)


  const [history, setHistory] = useState([]);

  const [allOrder, setOrder] = useState();

////////////////////////////////////////
useEffect(() => {

  const fetchHistory = async () => {
    try {
      const res = await BaseUrl.get(`/ecommerce/totalOrder/${buyerId}`);
      console.log('fetch history response is :',res);
      setHistory(res.data);
    } 
    catch (error) {
      console.log("Erorr ", error);
    }
  };
  fetchHistory();
} ,[]);



  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address , setAddress] = useState("");
  const [payment , setPayment] = useState("");


  const HandleSubmit = async (e)=>{
    e.preventDefault();
    if (!name || !email || !city || !phone || !address || !payment) {
      return toast.warning("Please Fill out all input fields");
    }
         const res = await BaseUrl.post('/ecommerce/payment', {
          name,
          phone,
          email,
          city,
          address,
          payment,
          buyerId,
          productId,
          sellerId,
          price,
          quantity,
          
         })
         if(res.data){
          try {
            const res = await BaseUrl.delete(`/ecommerce/deleteOrder/${id}`)
            dispatch(emptyState())
         toast.success("Order Placed successfully")
         navigate('/home')
          } catch (error) {
            alert(error)
          }
          
         }


        // Swal.fire({
        //   title: 'Are you sure?',
        //   text: "You won't be able to revert this!",
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonColor: '#3085d6',
        //   cancelButtonColor: '#d33',
        //   confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     Swal.fire(
        //       'Deleted!',
        //       'Your file has been deleted.',
        //       'success'
        //     )
        //   }
        // })

        //  if(res.data){
        //   Swal.fire({
        //     title:`${res.data}`,
        //     position: 'top-end',
        //     icon: 'success',
        //     showConfirmButton: false,
        //     timer: 1500
        //   })
        //    navigate('/home')
        //  }
       
  }

  return (
    <>
      <div className=" container my-5">
        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate=""  onSubmit={HandleSubmit}>
            <div className="row g-3">
              <div className=" mb-2">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className=" mb-2">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>City</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="form-control"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Full Address</label>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <h4 className="mb-3">Payment</h4>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="jazzcash"
                id="flexCheckChecked"
                onClick={(e) => setPayment(e.target.value)}
                />
              <label class="form-check-label" for="flexCheckChecked">
                JazzCash
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="easypasa"
                id="flexCheckChecked"
                onClick={(e) => setPayment(e.target.value)}
                />
              <label class="form-check-label" for="flexCheckChecked">
                EasyPasa
              </label>
            </div>
            <div className=" mb-2">
                <label>Enter your Phone Number</label>
                <input
                  type="number"
                  placeholder="Phone No"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

            <button className="mb-3 w-100 btn btn-dark btn-lg" type="submit">
              Continue to checkout
            </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
