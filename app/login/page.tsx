import Link from "next/link";
import { Leaf, Mail, LockKeyhole, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F8F6] px-5 py-10">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#244B3B] text-white">
            <Leaf size={23} />
          </span>
          <span className="text-2xl font-bold text-[#244B3B]">Healty</span>
        </Link>

        <section className="rounded-3xl border border-[#E9EDE9] bg-white p-7 shadow-sm sm:p-9">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-[#244B3B]">خوش برگشتی!</h1>
            <p className="mt-3 text-sm text-gray-500">
              برای ادامه مسیر سلامتی وارد حساب خودت شو.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                ایمیل
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 focus-within:border-[#789783]">
                <Mail size={18} className="text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="example@email.com"
                  className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                رمز عبور
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 focus-within:border-[#789783]">
                <LockKeyhole size={18} className="text-gray-400" />
                <input
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="رمز عبور خود را وارد کنید"
                  className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                href="/login"
                className="text-xs text-[#52745E] hover:underline"
              >
                رمز عبورم را فراموش کرده‌ام
              </Link>
            </div>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#244B3B] text-sm font-semibold text-white transition hover:bg-[#315D49]"
            >
              ورود به حساب
              <ArrowLeft size={17} />
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
          className="mt-6 block text-center text-xs text-gray-400 hover:text-[#244B3B]"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
