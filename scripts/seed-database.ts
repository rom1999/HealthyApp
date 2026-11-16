import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
dotenv.config();
import mongoose from "mongoose";
import { connectDB } from "../lib/mongodb";
import Food from "../models/Food";
import Exercise from "../models/Exercise";
import { foodsSeed } from "../data/foods.seed";
import { exercisesSeed } from "../data/exercises.seed";

async function seedDatabase() {
  try {
    await connectDB();

    const foodOps = foodsSeed.map((food) => ({
      updateOne: {
        filter: { slug: food.slug },
        update: { $set: food },
        upsert: true,
      },
    }));

    const exerciseOps = exercisesSeed.map((exercise) => ({
      updateOne: {
        filter: { slug: exercise.slug },
        update: { $set: exercise },
        upsert: true,
      },
    }));

    if (foodOps.length) await Food.bulkWrite(foodOps);
    if (exerciseOps.length) await Exercise.bulkWrite(exerciseOps);

    console.log(`Seed completed: ${foodsSeed.length} foods, ${exercisesSeed.length} exercises.`);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();