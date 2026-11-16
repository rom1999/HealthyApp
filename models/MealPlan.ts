import mongoose, { Schema, type Model } from "mongoose";

const MealItemSchema = new Schema(
  {
    foodId: { type: Schema.Types.ObjectId, ref: "Food" },
    foodName: { type: String, required: true }, // snapshot for historical display
    quantityGrams: { type: Number, required: true, min: 0 },
    nutritionSnapshot: {
      calories: Number, protein: Number, carbohydrates: Number, fat: Number, fiber: Number,
    },
  },
  { _id: false }
);

const MealSchema = new Schema(
  {
    type: { type: String, enum: ["breakfast", "lunch", "dinner", "snack"], required: true },
    title: String,
    items: { type: [MealItemSchema], default: [] },
    notes: String,
  },
  { _id: false }
);

const MealPlanSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    title: { type: String, default: "برنامه غذایی من" },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    dailyTargets: {
      calories: Number, protein: Number, carbohydrates: Number, fat: Number, fiber: Number,
    },
    days: [{
      date: { type: Date, required: true },
      meals: { type: [MealSchema], default: [] },
    }],
    status: { type: String, enum: ["draft", "active", "completed", "archived"], default: "active" },
    version: { type: Number, default: 1 },
  },
  { timestamps: true }
);

MealPlanSchema.index({ userId: 1, status: 1, startDate: -1 });

const MealPlan: Model<any> =
  (mongoose.models.MealPlan as Model<any>) || mongoose.model("MealPlan", MealPlanSchema);

export default MealPlan;