import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const NutritionSchema = new Schema(
  {
    calories: { type: Number, required: true, min: 0 },
    protein: { type: Number, required: true, min: 0 },
    carbohydrates: { type: Number, required: true, min: 0 },
    fat: { type: Number, required: true, min: 0 },
    fiber: { type: Number, default: 0, min: 0 },
    sugar: { type: Number, default: 0, min: 0 },
    saturatedFat: { type: Number, default: 0, min: 0 },
    sodium: { type: Number, default: 0, min: 0 }, // mg
    cholesterol: { type: Number, default: 0, min: 0 }, // mg
  },
  { _id: false }
);

const FoodSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    englishName: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: {
      type: String,
      required: true,
      enum: [
        "protein", "grains", "dairy", "fruit", "vegetable",
        "legumes", "nuts-seeds", "fats-oils", "other",
      ],
      index: true,
    },
    nutritionPer100g: { type: NutritionSchema, required: true },
    defaultServing: {
      amount: { type: Number, default: 100, min: 0 },
      unit: { type: String, default: "گرم" },
      description: { type: String, default: "۱۰۰ گرم" },
    },
    isPackaged: { type: Boolean, default: false },
    brand: { type: String, default: null },
    allergens: [{ type: String }],
    dietaryTags: [{ type: String }],
    dataSource: { type: String, default: "estimated-reference" },
    verified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

FoodSchema.index({ name: "text", englishName: "text" });

export type FoodDocument = InferSchemaType<typeof FoodSchema>;

const Food: Model<FoodDocument> =
  (mongoose.models.Food as Model<FoodDocument>) ||
  mongoose.model<FoodDocument>("Food", FoodSchema);

export default Food;