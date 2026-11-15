import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json({
      success: true,
      message: "MongoDB connected successfully",
      database: mongoose.connection.name,
      readyState: mongoose.connection.readyState,
    });
  } catch (error) {
    console.error("MongoDB ERROR:", error);
    console.error(
      "MongoDB ERROR MESSAGE:",
      error instanceof Error ? error.message : String(error)
    );

    return NextResponse.json(
      {
        success: false,
        message: "MongoDB connection failed",
      },
      { status: 500 }
    );
  }
}
