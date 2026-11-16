import mongoose, { Schema, type Model } from "mongoose";

const DailyLogSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    date: { type: Date, required: true },
    nutrition: {
      calories: { type: Number, default: 0 },
      protein: { type: Number, default: 0 },
      carbohydrates: { type: Number, default: 0 },
      fat: { type: Number, default: 0 },
      fiber: { type: Number, default: 0 },
      waterMl: { type: Number, default: 0 },
    },
    activities: [{
      exerciseId: { type: Schema.Types.ObjectId, ref: "Exercise" },
      exerciseName: String,
      durationMinutes: { type: Number, min: 0 },
      caloriesBurnedEstimate: { type: Number, min: 0 },
    }],
    notes: String,
  },
  { timestamps: true }
);

DailyLogSchema.index({ userId: 1, date: -1 }, { unique: true });

const DailyLog: Model<any> =
  (mongoose.models.DailyLog as Model<any>) || mongoose.model("DailyLog", DailyLogSchema);

export default DailyLog;