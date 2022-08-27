const mongoose = require("mongoose");

const ExerciseProfileSchema = new mongoose.Schema({
  exerciseTitle: { type: String, required: true },
  exerciseItem: [{
   exerciseItems: String,
   completed: false
  }],
  userId: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean
  }
});

module.exports = mongoose.model("ExerciseProfile", ExerciseProfileSchema);
