import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const ExerciseSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    englishName: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: {
      type: String,
      required: true,
      enum: ["strength", "cardio", "flexibility", "mobility", "balance"],
      index: true,
    },
    exerciseType: {
      type: String,
      enum: ["compound", "isolation", "steady-state", "interval", "stretch"],
      default: "compound",
    },
    primaryMuscles: [{ type: String, required: true }],
    secondaryMuscles: [{ type: String }],
    bodyParts: [{ type: String }],
    equipment: [{ type: String }],
    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
    met: { type: Number, required: true, min: 1 },
    instructions: [{ type: String }],
    benefits: [{ type: String }],
    precautions: [{ type: String }],
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

ExerciseSchema.index({ name: "text", englishName: "text" });

export type ExerciseDocument = InferSchemaType<typeof ExerciseSchema>;

const Exercise: Model<ExerciseDocument> =
  (mongoose.models.Exercise as Model<ExerciseDocument>) ||
  mongoose.model<ExerciseDocument>("Exercise", ExerciseSchema);

export default Exercise;