const mongoose = require("mongoose");

const ExerciseProfileSchema = new mongoose.Schema({
  exerciseTitle: { type: String, required: true },
  exerciseItem: [{
   exerciseItems: String,
   completed: false
  }],
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  timeForWorkout: {
    type: Number,
  },
  selected: {
    type: Boolean
  }
});

module.exports = mongoose.model("ExerciseProfile", ExerciseProfileSchema);
