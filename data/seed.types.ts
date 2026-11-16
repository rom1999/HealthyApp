export type FoodSeedInput = {
  name: string;
  englishName: string;
  slug: string;
  category: string;
  nutritionPer100g: {
    calories: number; protein: number; carbohydrates: number; fat: number;
    fiber: number; sugar: number; saturatedFat: number; sodium: number; cholesterol: number;
  };
  defaultServing: { amount: number; unit: string; description: string };
  dataSource: string;
  verified: boolean;
};

export type ExerciseSeedInput = {
  name: string; englishName: string; slug: string; category: string; exerciseType: string;
  primaryMuscles: string[]; secondaryMuscles: string[]; bodyParts: string[];
  equipment: string[]; difficulty: string; met: number;
  instructions: string[]; benefits: string[]; precautions: string[];
};