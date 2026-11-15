import { NextResponse } from "next/server";
import { compare } from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import { createAuthToken } from "@/lib/auth";
import User from "@/models/User";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "اطلاعات ارسالی معتبر نیست." },
        { status: 400 }
      );
    }

    const { email, password } = body as {
      email?: unknown;
      password?: unknown;
    };

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "ایمیل و رمز عبور الزامی هستند.",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: normalizedEmail,
    }).select("+passwordHash");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "ایمیل یا رمز عبور اشتباه است.",
        },
        { status: 401 }
      );
    }

    const isPasswordValid = await compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "ایمیل یا رمز عبور اشتباه است.",
        },
        { status: 401 }
      );
    }

    const token = await createAuthToken(user._id.toString());

    const response = NextResponse.json({
      success: true,
      message: "ورود با موفقیت انجام شد.",
    });

    response.cookies.set("healty_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Login API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطایی در سرور رخ داده است.",
      },
      { status: 500 }
    );
  }
}
