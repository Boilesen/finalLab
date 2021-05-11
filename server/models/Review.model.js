const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: { type: String, maxlength: 200 },
  roomId: { type: Schema.Types.ObjectId, ref: "Room" },
});

const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;
