const express = require("express");
const products = require("../Data");
const Order = require("../Schema/OrderSchema");
const OrderPlace = require("../Schema/OrderPlace");
const Product = require("../Schema/ProductSchema");
const { default: mongoose } = require("mongoose");
const Method = express.Router();
///////////////////////////////////

///////////////////////    Inserting Data to DB   /////////////////////////////
Method.post("/insert", async (req, res) => {
  const data = await Product.insertMany(products);
  res.status(200).send(data);
});
///////////////////////////////   Getting All Products from DB /////////////////////////
Method.get("/getproducts", async (req, res) => {
  const getproducts = await Product.find();
  res.status(200).send(getproducts);
});

Method.post("/addproduct", async (req, res) => {
  console.log(req.body);

  try {
    const addproduct = new Product({
      _id: new mongoose.Types.ObjectId(),
      sellerId: req.body.Id,
      sellerName: req.body.sellerName,
      productName: req.body.productName,
      slug: req.body.slug,
      category: req.body.category,
      description: req.body.description,
      img: req.body.url,
      price: req.body.price,
      quality: req.body.quality,
      total: req.body.total,
    });
    if (addproduct) {
      await addproduct.save();
      res.status(200).send("Product Added Successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Some erorr occur uzair");
  }
});

///////////////////////   Getting a specific Slug Product   //////////////////////////
Method.get("/getproduct/:slug", async (req, res) => {
  const getproduct = await Product.findOne({ slug: req.params.slug });
  res.status(200).send(getproduct);
});

///////////////////////   Saving Orders to DB   ///////////////////////
Method.post("/saveOrder", async (req, res) => {
  try {
    ///////////////////////////////////
    const savedOrder = new Order({
      orderItems: req.body.OrderItems.map((m) => ({
        ...m,
        product: m._id,
        sellerId: m.seller_Id,
      })),
      buyerId: req.body.user_id,
    });
    console.log(savedOrder);
    const Done = await savedOrder.save();
    res.status(200).send(Done);
  } catch (error) {
    res.status(500).send(error);
  }
});

///////////////    Gettting order History   ////////////////////
Method.get("/totalOrder/:id", async (req, res) => {
  const data = await Order.find({ buyerId: req.params.id });
  const lessData = data.map((m) => {
    return { data: m.orderItems, date: m.createdAt };
  });

  const moreData = lessData.map((m) => {
    return m;
  });

  res.status(200).send(moreData);
});

//////////////////////  All order   ///////////////////////////
Method.get("/getAllOrder", async (req, res) => {
  try {
    const FetchOrder = await Order.find();
    res.status(200).send(FetchOrder);
  } catch (error) {
    res.status(500).send(error);
  }
});

/////////////////////   Deleting Order   ////////////////////
Method.delete("/deleteOrder/:id", async (req, res) => {
  try {
    const PresentOrder = await Order.findByIdAndDelete({ _id: req.params.id });
    console.log(PresentOrder);
    if (PresentOrder) {
      res.status(200).send("Order Cancelled Successfully");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

/////////////////////   Deleting Order   ////////////////////
Method.delete("/deleteAllOrder/:id", async (req, res) => {
  try {
    const PresentOrder = await Order.findByIdAndDelete({
      buyerId: req.params.id,
    });
    console.log(PresentOrder);
    if (PresentOrder) {
      res.status(200).send("Order Cancelled Successfully");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

Method.post("/payment", async (req, res) => {
  console.log(req.body);
  try {
    const PaymentDone = await OrderPlace.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
      address: req.body.address,
      price: req.body.price,
      quantity: req.body.quantity,
      PaymentType: req.body.payment,
      buyerId: req.body.buyerId,
      productId: req.body.productId,
      sellerId: req.body.sellerId,
    });
    res.status(200).send("Your Order has been Placed");
  } catch (error) {
    res.status(500).send("Some erorr occur");
  }
});

Method.get("/fetchsellerhistory/:sellerId", async (req, res) => {
  try {
    await OrderPlace.find({ sellerId: req.params.sellerId })
      .populate("buyerId")
      .populate("productId")
      .populate("sellerId")
      .exec((err, order) => {
        if (err) {
          console.error("Error retrieving order:", err);
          return;
        }

        // Access the populated user details
        console.log("Order:", order);
        res.status(200).send(order);
      });
  } catch (error) {
    res.status(500).send(error);
  }
});



Method.get("/fetchadminhistory", async (req, res) => {
  try {
    await OrderPlace.find()
      .populate("buyerId")
      .populate("productId")
      .populate("sellerId")
      .exec((err, order) => {
        if (err) {
          console.error("Error retrieving order:", err);
          return;
        }

        // Access the populated user details
        console.log("Order:", order);
        res.status(200).send(order);
      });
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = Method;
