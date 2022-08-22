const mongoose = require("mongoose");

const ExerciseProfileSchema = new mongoose.Schema({
  exerciseTitle: { type: String, required: true },
  exerciseItem: {
    type: String,
    required: true,
  },
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
});

module.exports = mongoose.model("ExerciseProfile", ExerciseProfileSchema);
