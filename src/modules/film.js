import mongoose from "mongoose";

const filmSchema = mongoose.Schema({
  id: { type: String, required: true, min: 3 },
  title: { type: String, required: true, min: 3 },
  rating: { type: Number, required: true },
  description: { type: String, required: true, min: 20 },
  imdbLink: { type: String, required: true },
});

export default mongoose.model("Film", filmSchema);
