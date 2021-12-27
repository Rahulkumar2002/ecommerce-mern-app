const router = require("express").Router();
const Order = require("../models/Order");
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("./verifyToken");

//Create Order

router.post("/", verifyToken, async (req, res) => {
    try {
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save();

        res.status(200).json(savedOrder);
    } catch (err) { res.status(500).json(err); }
});

//Update Order

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete Order

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted....")
    } catch (err) {
        res.status(500).json(err);
    }
})

//Get User Order

router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.id });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Get All

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) { res.status(500).json(err) }
})
//Get User Order Stats


module.exports = router;