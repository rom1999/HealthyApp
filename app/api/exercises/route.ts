import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Exercise from "@/models/Exercise";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim();
    const category = searchParams.get("category");
    const muscle = searchParams.get("muscle");
    const equipment = searchParams.get("equipment");
    const limit = Math.min(Number(searchParams.get("limit") ?? 30), 100);

    const filter: Record<string, unknown> = { isActive: true };
    if (category) filter.category = category;
    if (muscle) {
      filter.$or = [
        { primaryMuscles: muscle },
        { secondaryMuscles: muscle },
      ];
    }
    if (equipment) filter.equipment = equipment;
    if (q) {
      filter.$and = [
        {
          $or: [
            { name: { $regex: q, $options: "i" } },
            { englishName: { $regex: q, $options: "i" } },
          ],
        },
      ];
    }

    const exercises = await Exercise.find(filter).sort({ name: 1 }).limit(limit).lean();
    return NextResponse.json({ success: true, count: exercises.length, data: exercises });
  } catch {
    return NextResponse.json(
      { success: false, message: "خطا در دریافت حرکات ورزشی" },
      { status: 500 }
    );
  }
}