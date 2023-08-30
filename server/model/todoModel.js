import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
