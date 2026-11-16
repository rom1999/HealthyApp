import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Food from "@/models/Food";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim();
    const category = searchParams.get("category");
    const limit = Math.min(Number(searchParams.get("limit") ?? 30), 100);

    const filter: Record<string, unknown> = { isActive: true };
    if (category) filter.category = category;
    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: "i" } },
        { englishName: { $regex: q, $options: "i" } },
      ];
    }

    const foods = await Food.find(filter).sort({ name: 1 }).limit(limit).lean();
    return NextResponse.json({ success: true, count: foods.length, data: foods });
  } catch {
    return NextResponse.json(
      { success: false, message: "خطا در دریافت مواد غذایی" },
      { status: 500 }
    );
  }
}