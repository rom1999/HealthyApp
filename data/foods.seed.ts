import type { FoodSeedInput } from "./seed.types";

export const foodsSeed: FoodSeedInput[] = [
  {
    name: "سینه مرغ پخته", englishName: "Cooked chicken breast", slug: "cooked-chicken-breast", category: "protein",
    nutritionPer100g: { calories: 165, protein: 31, carbohydrates: 0, fat: 3.6, fiber: 0, sugar: 0, saturatedFat: 1.0, sodium: 74, cholesterol: 85 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "تخم مرغ کامل", englishName: "Whole egg", slug: "whole-egg", category: "protein",
    nutritionPer100g: { calories: 143, protein: 12.6, carbohydrates: 0.7, fat: 9.5, fiber: 0, sugar: 0.4, saturatedFat: 3.1, sodium: 142, cholesterol: 372 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "سفیده تخم مرغ", englishName: "Egg white", slug: "egg-white", category: "protein",
    nutritionPer100g: { calories: 52, protein: 10.9, carbohydrates: 0.7, fat: 0.2, fiber: 0, sugar: 0.7, saturatedFat: 0, sodium: 166, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "تن ماهی در آبکش‌شده", englishName: "Tuna canned in water, drained", slug: "tuna-canned-in-water-drained", category: "protein",
    nutritionPer100g: { calories: 116, protein: 25.5, carbohydrates: 0, fat: 0.8, fiber: 0, sugar: 0, saturatedFat: 0.2, sodium: 320, cholesterol: 42 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "ماهی سالمون پخته", englishName: "Cooked salmon", slug: "cooked-salmon", category: "protein",
    nutritionPer100g: { calories: 206, protein: 22.1, carbohydrates: 0, fat: 12.4, fiber: 0, sugar: 0, saturatedFat: 3.1, sodium: 59, cholesterol: 63 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "گوشت گوساله کم‌چرب پخته", englishName: "Lean cooked beef", slug: "lean-cooked-beef", category: "protein",
    nutritionPer100g: { calories: 217, protein: 26, carbohydrates: 0, fat: 12, fiber: 0, sugar: 0, saturatedFat: 4.8, sodium: 55, cholesterol: 87 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "بوقلمون پخته", englishName: "Cooked turkey breast", slug: "cooked-turkey-breast", category: "protein",
    nutritionPer100g: { calories: 135, protein: 29, carbohydrates: 0, fat: 1.6, fiber: 0, sugar: 0, saturatedFat: 0.5, sodium: 0, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "ماست یونانی کم‌چرب", englishName: "Low-fat Greek yogurt", slug: "low-fat-greek-yogurt", category: "dairy",
    nutritionPer100g: { calories: 73, protein: 10, carbohydrates: 3.9, fat: 1.9, fiber: 0, sugar: 3.6, saturatedFat: 1.2, sodium: 36, cholesterol: 10 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "شیر کم‌چرب", englishName: "Low-fat milk", slug: "low-fat-milk", category: "dairy",
    nutritionPer100g: { calories: 42, protein: 3.4, carbohydrates: 5, fat: 1, fiber: 0, sugar: 5, saturatedFat: 0.6, sodium: 44, cholesterol: 5 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "پنیر فتا", englishName: "Feta cheese", slug: "feta-cheese", category: "dairy",
    nutritionPer100g: { calories: 264, protein: 14.2, carbohydrates: 4.1, fat: 21.3, fiber: 0, sugar: 4.1, saturatedFat: 14.9, sodium: 1116, cholesterol: 89 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "جو دوسر خشک", englishName: "Dry oats", slug: "dry-oats", category: "grains",
    nutritionPer100g: { calories: 389, protein: 16.9, carbohydrates: 66.3, fat: 6.9, fiber: 10.6, sugar: 0.9, saturatedFat: 1.2, sodium: 2, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "برنج سفید پخته", englishName: "Cooked white rice", slug: "cooked-white-rice", category: "grains",
    nutritionPer100g: { calories: 130, protein: 2.7, carbohydrates: 28.2, fat: 0.3, fiber: 0.4, sugar: 0.1, saturatedFat: 0.1, sodium: 1, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "نان سنگک", englishName: "Sangak bread", slug: "sangak-bread", category: "grains",
    nutritionPer100g: { calories: 260, protein: 9, carbohydrates: 52, fat: 1.5, fiber: 3.5, sugar: 2, saturatedFat: 0.3, sodium: 500, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "نان سبوس‌دار", englishName: "Whole wheat bread", slug: "whole-wheat-bread", category: "grains",
    nutritionPer100g: { calories: 247, protein: 13, carbohydrates: 41, fat: 4.2, fiber: 7, sugar: 6, saturatedFat: 0.7, sodium: 400, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "سیب‌زمینی آب‌پز", englishName: "Boiled potato", slug: "boiled-potato", category: "grains",
    nutritionPer100g: { calories: 87, protein: 1.9, carbohydrates: 20.1, fat: 0.1, fiber: 1.8, sugar: 0.9, saturatedFat: 0, sodium: 4, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "عدس پخته", englishName: "Cooked lentils", slug: "cooked-lentils", category: "legumes",
    nutritionPer100g: { calories: 116, protein: 9, carbohydrates: 20.1, fat: 0.4, fiber: 7.9, sugar: 1.8, saturatedFat: 0.1, sodium: 2, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "لوبیا چیتی پخته", englishName: "Cooked pinto beans", slug: "cooked-pinto-beans", category: "legumes",
    nutritionPer100g: { calories: 143, protein: 9, carbohydrates: 26.2, fat: 0.7, fiber: 9, sugar: 0.6, saturatedFat: 0.2, sodium: 2, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "نخود پخته", englishName: "Cooked chickpeas", slug: "cooked-chickpeas", category: "legumes",
    nutritionPer100g: { calories: 164, protein: 8.9, carbohydrates: 27.4, fat: 2.6, fiber: 7.6, sugar: 4.8, saturatedFat: 0.3, sodium: 7, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "موز", englishName: "Banana", slug: "banana", category: "fruit",
    nutritionPer100g: { calories: 89, protein: 1.1, carbohydrates: 22.8, fat: 0.3, fiber: 2.6, sugar: 12.2, saturatedFat: 0.1, sodium: 1, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "سیب با پوست", englishName: "Apple with skin", slug: "apple-with-skin", category: "fruit",
    nutritionPer100g: { calories: 52, protein: 0.3, carbohydrates: 13.8, fat: 0.2, fiber: 2.4, sugar: 10.4, saturatedFat: 0, sodium: 1, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "پرتقال", englishName: "Orange", slug: "orange", category: "fruit",
    nutritionPer100g: { calories: 47, protein: 0.9, carbohydrates: 11.8, fat: 0.1, fiber: 2.4, sugar: 9.4, saturatedFat: 0, sodium: 0, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "توت‌فرنگی", englishName: "Strawberry", slug: "strawberry", category: "fruit",
    nutritionPer100g: { calories: 32, protein: 0.7, carbohydrates: 7.7, fat: 0.3, fiber: 2, sugar: 4.9, saturatedFat: 0, sodium: 1, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "بروکلی", englishName: "Broccoli", slug: "broccoli", category: "vegetable",
    nutritionPer100g: { calories: 34, protein: 2.8, carbohydrates: 6.6, fat: 0.4, fiber: 2.6, sugar: 1.7, saturatedFat: 0.1, sodium: 33, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "خیار", englishName: "Cucumber", slug: "cucumber", category: "vegetable",
    nutritionPer100g: { calories: 15, protein: 0.7, carbohydrates: 3.6, fat: 0.1, fiber: 0.5, sugar: 1.7, saturatedFat: 0, sodium: 2, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "گوجه‌فرنگی", englishName: "Tomato", slug: "tomato", category: "vegetable",
    nutritionPer100g: { calories: 18, protein: 0.9, carbohydrates: 3.9, fat: 0.2, fiber: 1.2, sugar: 2.6, saturatedFat: 0, sodium: 5, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "اسفناج", englishName: "Spinach", slug: "spinach", category: "vegetable",
    nutritionPer100g: { calories: 23, protein: 2.9, carbohydrates: 3.6, fat: 0.4, fiber: 2.2, sugar: 0.4, saturatedFat: 0.1, sodium: 79, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "بادام", englishName: "Almonds", slug: "almonds", category: "nuts-seeds",
    nutritionPer100g: { calories: 579, protein: 21.2, carbohydrates: 21.6, fat: 49.9, fiber: 12.5, sugar: 4.4, saturatedFat: 3.8, sodium: 1, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "گردو", englishName: "Walnuts", slug: "walnuts", category: "nuts-seeds",
    nutritionPer100g: { calories: 654, protein: 15.2, carbohydrates: 13.7, fat: 65.2, fiber: 6.7, sugar: 2.6, saturatedFat: 6.1, sodium: 2, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "کره بادام‌زمینی", englishName: "Peanut butter", slug: "peanut-butter", category: "nuts-seeds",
    nutritionPer100g: { calories: 588, protein: 25, carbohydrates: 20, fat: 50, fiber: 6, sugar: 9, saturatedFat: 10, sodium: 17, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "روغن زیتون", englishName: "Olive oil", slug: "olive-oil", category: "fats-oils",
    nutritionPer100g: { calories: 884, protein: 0, carbohydrates: 0, fat: 100, fiber: 0, sugar: 0, saturatedFat: 14, sodium: 2, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "آووکادو", englishName: "Avocado", slug: "avocado", category: "fruit",
    nutritionPer100g: { calories: 160, protein: 2, carbohydrates: 8.5, fat: 14.7, fiber: 6.7, sugar: 0.7, saturatedFat: 2.1, sodium: 7, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "خرما", englishName: "Dates", slug: "dates", category: "fruit",
    nutritionPer100g: { calories: 282, protein: 2.5, carbohydrates: 75, fat: 0.4, fiber: 8, sugar: 63.4, saturatedFat: 0, sodium: 2, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "کینوا پخته", englishName: "Cooked quinoa", slug: "cooked-quinoa", category: "grains",
    nutritionPer100g: { calories: 120, protein: 4.4, carbohydrates: 21.3, fat: 1.9, fiber: 2.8, sugar: 0.9, saturatedFat: 0.2, sodium: 7, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "قارچ", englishName: "Mushrooms", slug: "mushrooms", category: "vegetable",
    nutritionPer100g: { calories: 22, protein: 3.1, carbohydrates: 3.3, fat: 0.3, fiber: 1, sugar: 2, saturatedFat: 0.1, sodium: 5, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "هویج", englishName: "Carrot", slug: "carrot", category: "vegetable",
    nutritionPer100g: { calories: 41, protein: 0.9, carbohydrates: 9.6, fat: 0.2, fiber: 2.8, sugar: 4.7, saturatedFat: 0, sodium: 69, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "کدو سبز", englishName: "Zucchini", slug: "zucchini", category: "vegetable",
    nutritionPer100g: { calories: 17, protein: 1.2, carbohydrates: 3.1, fat: 0.3, fiber: 1, sugar: 2.5, saturatedFat: 0.1, sodium: 8, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "شیر سویا بدون شکر", englishName: "Unsweetened soy milk", slug: "unsweetened-soy-milk", category: "dairy",
    nutritionPer100g: { calories: 33, protein: 3.3, carbohydrates: 0.7, fat: 1.8, fiber: 0.6, sugar: 0.2, saturatedFat: 0.2, sodium: 5, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "پنیر کاتیج کم‌چرب", englishName: "Low-fat cottage cheese", slug: "low-fat-cottage-cheese", category: "dairy",
    nutritionPer100g: { calories: 82, protein: 11.1, carbohydrates: 3.4, fat: 2.3, fiber: 0, sugar: 2.7, saturatedFat: 1.4, sodium: 364, cholesterol: 8 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "میگو پخته", englishName: "Cooked shrimp", slug: "cooked-shrimp", category: "protein",
    nutritionPer100g: { calories: 99, protein: 24, carbohydrates: 0.2, fat: 0.3, fiber: 0, sugar: 0, saturatedFat: 0.1, sodium: 111, cholesterol: 189 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
  {
    name: "کشمش", englishName: "Raisins", slug: "raisins", category: "fruit",
    nutritionPer100g: { calories: 299, protein: 3.1, carbohydrates: 79.2, fat: 0.5, fiber: 3.7, sugar: 59.2, saturatedFat: 0.1, sodium: 11, cholesterol: 0 },
    defaultServing: { amount: 100, unit: "گرم", description: "۱۰۰ گرم" }, dataSource: "reference-estimate", verified: false,
  },
];
