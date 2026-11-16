import mongoose, { Schema, type Model } from "mongoose";

const BodyMetricsSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    measuredAt: { type: Date, required: true, default: Date.now },
    weightKg: { type: Number, required: true, min: 20, max: 400 },
    heightCm: { type: Number, min: 50, max: 250 },
    waistCm: { type: Number, min: 20, max: 250 },
    hipCm: { type: Number, min: 20, max: 250 },
    bodyFatPercentage: { type: Number, min: 1, max: 75 },
    bmi: { type: Number, min: 5, max: 100 },
    notes: String,
  },
  { timestamps: true }
);

BodyMetricsSchema.index({ userId: 1, measuredAt: -1 });

const BodyMetrics: Model<any> =
  (mongoose.models.BodyMetrics as Model<any>) ||
  mongoose.model("BodyMetrics", BodyMetricsSchema);

export default BodyMetrics;