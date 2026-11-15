"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Leaf,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError("لطفاً آدرس ایمیل خود را وارد کنید.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      setError("فرمت آدرس ایمیل صحیح نیست.");
      return;
    }

    if (!password) {
      setError("لطفاً رمز عبور خود را وارد کنید.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "ایمیل یا رمز عبور اشتباه است.");
        return;
      }

      router.replace("/profile");
      router.refresh();
    } catch {
      setError("ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F8F6] px-5 py-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#244B3B] text-white">
            <Leaf size={23} />
          </span>
          <span className="text-2xl font-bold text-[#244B3B]">Healty</span>
        </Link>

        {/* Login Card */}
        <section className="rounded-3xl border border-[#E9EDE9] bg-white p-7 shadow-sm sm:p-9">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-[#244B3B]">خوش برگشتی!</h1>
            <p className="mt-3 text-sm text-gray-500">
              برای ادامه مسیر سلامتی وارد حساب خودت شو.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                ایمیل
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition focus-within:border-[#789783]">
                <Mail size={18} className="text-gray-400" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  dir="ltr"
                  required
                  autoComplete="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="h-12 w-full bg-transparent text-left text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                رمز عبور
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition focus-within:border-[#789783]">
                <LockKeyhole size={18} className="text-gray-400" />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  dir="ltr"
                  required
                  autoComplete="current-password"
                  placeholder="رمز عبور خود را وارد کنید"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="h-12 w-full bg-transparent text-left text-sm outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-[#244B3B]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-[#52745E] hover:underline"
              >
                رمز عبور را فراموش کرده‌ام
              </Link>
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#244B3B] text-sm font-semibold text-white transition hover:bg-[#315D49] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  در حال ورود...
                </>
              ) : (
                <>
                  ورود به حساب کاربری
                  <ArrowLeft size={17} />
                </>
              )}
            </button>
          </form>

          <div className="my-7 border-t border-gray-100" />

          <p className="text-center text-sm text-gray-500">
            هنوز حساب کاربری نداری؟
            <Link
              href="/register"
              className="mr-1 font-semibold text-[#52745E] hover:underline"
            >
              ثبت‌نام کن
            </Link>
          </p>
        </section>

        <Link
          href="/"
          className="mt-8 block text-center text-xs text-gray-400 transition hover:text-[#244B3B]"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
