const express = require("express");
const router = express.Router();

const Review = require("../models/Review.model");
const Room = require("../models/Room.model");

router.post("/room/:id/review", async (req, res) => {
  try {
    const reviewParams = { ...req.body };
    const newReview = await Review.create(reviewParams);

    const room = await Room.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { reviews: newReview._id } },
      { new: true }
    );

    return res.status(201).json(newReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.patch("/review/:id", async (req, res) => {
  try {
    const updatedReview = await Review.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    console.log(updatedReview);
    if (!updatedReview) {
      return res.status(404).json({ msg: "Review not found" });
    }

    return res.status(200).json(updatedReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.delete("/review/:id", async (req, res) => {
  try {
    const deleted = await Review.deleteOne({ _id: req.params.id });

    if (!deleted) {
      return res.status(404).json({ msg: "Review not found" });
    }

    return res.status(200).json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.get("/room/:id/review", async (req, res) => {
  try {
    const reviewsList = await Room.findOne({ _id: req.params.id }).populate(
      "reviews"
    );

    return res.status(200).json(reviewsList.reviews);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
