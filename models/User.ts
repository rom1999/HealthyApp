import mongoose, { Schema, type Model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true, select: false },
    profile: {
      birthDate: Date,
      sex: { type: String, enum: ["female", "male", "other", "unspecified"], default: "unspecified" },
      heightCm: { type: Number, min: 50, max: 250 },
      currentWeightKg: { type: Number, min: 20, max: 400 },
      goalWeightKg: { type: Number, min: 20, max: 400 },
      activityLevel: {
        type: String,
        enum: ["sedentary", "light", "moderate", "active", "very-active"],
        default: "sedentary",
      },
      goal: { type: String, enum: ["lose", "maintain", "gain"], default: "maintain" },
      dietaryPreferences: [{ type: String }],
      allergies: [{ type: String }],
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User: Model<any> =
  (mongoose.models.User as Model<any>) || mongoose.model("User", UserSchema);

export default User;