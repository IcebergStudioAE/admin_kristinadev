import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: false,
    },
    last_name: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    language_code: {
      type: String,
      required: false,
    },
    actions: {
      type: Array,
      required: false,
    },
    requests: {
      type: Array,
      required: false,
    },
    consultations: {
      type: Array,
      required: false,
    },
    id: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
