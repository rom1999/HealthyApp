import mongoose, { Schema, type Model } from "mongoose";

const WorkoutExerciseSchema = new Schema(
  {
    exerciseId: { type: Schema.Types.ObjectId, ref: "Exercise" },
    exerciseName: { type: String, required: true },
    sets: { type: Number, min: 1 },
    reps: { type: String }, // e.g. "8-12" or "30 seconds"
    durationMinutes: { type: Number, min: 0 },
    restSeconds: { type: Number, min: 0 },
    notes: String,
  },
  { _id: false }
);

const WorkoutDaySchema = new Schema(
  {
    dayOfWeek: { type: Number, min: 0, max: 6, required: true },
    title: String,
    focusMuscles: [{ type: String }],
    exercises: { type: [WorkoutExerciseSchema], default: [] },
    isRestDay: { type: Boolean, default: false },
  },
  { _id: false }
);

const WorkoutPlanSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    title: { type: String, default: "برنامه تمرینی من" },
    level: { type: String, enum: ["beginner", "intermediate", "advanced"], default: "beginner" },
    daysPerWeek: { type: Number, min: 1, max: 7, required: true },
    days: { type: [WorkoutDaySchema], default: [] },
    status: { type: String, enum: ["draft", "active", "completed", "archived"], default: "active" },
  },
  { timestamps: true }
);

WorkoutPlanSchema.index({ userId: 1, status: 1 });

const WorkoutPlan: Model<any> =
  (mongoose.models.WorkoutPlan as Model<any>) || mongoose.model("WorkoutPlan", WorkoutPlanSchema);

export default WorkoutPlan;