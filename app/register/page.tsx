"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

type RegisterForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  activityLevel: string;
  goal: string;
};

const initialForm: RegisterForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
  gender: "",
  height: "",
  weight: "",
  activityLevel: "",
  goal: "",
};

const inputClass =
  "h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#789783]";

const selectClass =
  "h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none transition focus:border-[#789783]";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<RegisterForm>(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof RegisterForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const validateStepOne = () => {
    const { firstName, lastName, phone, email, password, confirmPassword } =
      form;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      return "لطفاً تمام فیلدها را تکمیل کنید.";
    }

    if (!/^09\d{9}$/.test(phone)) {
      return "شماره موبایل معتبر نیست.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "ایمیل واردشده معتبر نیست.";
    }

    if (password.length < 8) {
      return "رمز عبور باید حداقل ۸ کاراکتر باشد.";
    }

    if (password !== confirmPassword) {
      return "رمز عبور و تکرار آن یکسان نیستند.";
    }

    return "";
  };

  const validateStepTwo = () => {
    const { age, gender, height, weight, activityLevel, goal } = form;

    if (!age || !gender || !height || !weight || !activityLevel || !goal) {
      return "لطفاً تمام اطلاعات بدنی را تکمیل کنید.";
    }

    if (Number(age) < 15 || Number(age) > 100) {
      return "سن واردشده معتبر نیست.";
    }

    if (Number(height) < 100 || Number(height) > 250) {
      return "قد واردشده معتبر نیست.";
    }

    if (Number(weight) < 30 || Number(weight) > 300) {
      return "وزن واردشده معتبر نیست.";
    }

    return "";
  };

  const handleNext = () => {
    const validationError = validateStepOne();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setStep(2);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateStepTwo();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password,
          age: Number(form.age),
          gender: form.gender,
          height: Number(form.height),
          weight: Number(form.weight),
          activityLevel: form.activityLevel,
          goal: form.goal,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "ثبت‌نام انجام نشد.");
        return;
      }

      window.location.href = "/profile";
    } catch {
      setError("ارتباط با سرور برقرار نشد. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-[#F7F8F6] px-5 py-10"
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#244B3B] text-lg font-bold text-white">
            H
          </div>
          <span className="text-2xl font-bold text-[#244B3B]">Healty</span>
        </div>

        {/* Register Card */}
        <div className="rounded-3xl border border-[#E9EDE9] bg-white p-7 shadow-sm sm:p-9">
          <div className="mb-7">
            <h1 className="text-xl font-bold text-gray-800">
              ساخت حساب کاربری
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              برای شروع برنامه غذایی خود، اطلاعاتت را وارد کن.
            </p>
          </div>

          {/* Steps */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex flex-1 flex-col gap-2">
              <div
                className={`h-1.5 rounded-full ${
                  step >= 1 ? "bg-[#244B3B]" : "bg-gray-200"
                }`}
              />
              <span
                className={`text-xs ${
                  step === 1 ? "font-semibold text-[#244B3B]" : "text-gray-400"
                }`}
              >
                ۱. اطلاعات حساب
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <div
                className={`h-1.5 rounded-full ${
                  step === 2 ? "bg-[#244B3B]" : "bg-gray-200"
                }`}
              />
              <span
                className={`text-xs ${
                  step === 2 ? "font-semibold text-[#244B3B]" : "text-gray-400"
                }`}
              >
                ۲. اطلاعات بدنی
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {step === 1 ? (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-2 block text-sm text-gray-600">
                      نام
                    </label>
                    <input
                      className={inputClass}
                      placeholder="نام"
                      value={form.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-600">
                      نام خانوادگی
                    </label>
                    <input
                      className={inputClass}
                      placeholder="نام خانوادگی"
                      value={form.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    شماره موبایل
                  </label>
                  <input
                    className={inputClass}
                    type="tel"
                    inputMode="numeric"
                    placeholder="09123456789"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    ایمیل
                  </label>
                  <input
                    className={inputClass}
                    type="email"
                    dir="ltr"
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    رمز عبور
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 focus-within:border-[#789783]">
                    <input
                      className="h-12 w-full bg-transparent text-sm outline-none"
                      type={showPassword ? "text" : "password"}
                      placeholder="حداقل ۸ کاراکتر"
                      value={form.password}
                      onChange={(e) => updateField("password", e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label="نمایش یا مخفی کردن رمز عبور"
                      className="text-gray-400"
                    >
                      {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    تکرار رمز عبور
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 focus-within:border-[#789783]">
                    <input
                      className="h-12 w-full bg-transparent text-sm outline-none"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="رمز عبور را دوباره وارد کنید"
                      value={form.confirmPassword}
                      onChange={(e) =>
                        updateField("confirmPassword", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      aria-label="نمایش یا مخفی کردن تکرار رمز عبور"
                      className="text-gray-400"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <button
                  type="button"
                  onClick={handleNext}
                  className="h-12 w-full rounded-xl bg-[#244B3B] text-sm font-semibold text-white transition hover:bg-[#193D30]"
                >
                  ادامه
                </button>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-2 block text-sm text-gray-600">
                      سن (سال)
                    </label>
                    <input
                      className={inputClass}
                      type="number"
                      min="15"
                      max="100"
                      placeholder="مثلاً ۲۷"
                      value={form.age}
                      onChange={(e) => updateField("age", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-600">
                      جنسیت
                    </label>
                    <select
                      className={selectClass}
                      value={form.gender}
                      onChange={(e) => updateField("gender", e.target.value)}
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="female">زن</option>
                      <option value="male">مرد</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-2 block text-sm text-gray-600">
                      قد (سانتی‌متر)
                    </label>
                    <input
                      className={inputClass}
                      type="number"
                      min="100"
                      max="250"
                      placeholder="مثلاً ۱۷۰"
                      value={form.height}
                      onChange={(e) => updateField("height", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-600">
                      وزن (کیلوگرم)
                    </label>
                    <input
                      className={inputClass}
                      type="number"
                      min="30"
                      max="300"
                      placeholder="مثلاً ۶۵"
                      value={form.weight}
                      onChange={(e) => updateField("weight", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    سطح فعالیت بدنی
                  </label>
                  <select
                    className={selectClass}
                    value={form.activityLevel}
                    onChange={(e) =>
                      updateField("activityLevel", e.target.value)
                    }
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="sedentary">کم‌تحرک</option>
                    <option value="light">
                      فعالیت سبک (۱ تا ۳ روز در هفته)
                    </option>
                    <option value="moderate">
                      فعالیت متوسط (۳ تا ۵ روز در هفته)
                    </option>
                    <option value="high">
                      فعالیت زیاد (۶ تا ۷ روز در هفته)
                    </option>
                    <option value="very_high">فعالیت بسیار زیاد</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    هدف تغذیه‌ای
                  </label>
                  <select
                    className={selectClass}
                    value={form.goal}
                    onChange={(e) => updateField("goal", e.target.value)}
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="weight_loss">کاهش وزن</option>
                    <option value="weight_maintenance">حفظ وزن فعلی</option>
                    <option value="muscle_gain">افزایش وزن و عضله‌سازی</option>
                  </select>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setError("");
                    }}
                    disabled={loading}
                    className="h-12 flex-1 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                  >
                    بازگشت
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="h-12 flex-[2] rounded-xl bg-[#244B3B] text-sm font-semibold text-white transition hover:bg-[#193D30] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
                  </button>
                </div>
              </>
            )}
          </form>

          <p className="mt-7 text-center text-sm text-gray-500">
            قبلاً حساب کاربری ساخته‌ای؟
            <Link
              href="/login"
              className="mr-1 font-semibold text-[#52745E] hover:underline"
            >
              وارد شو
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
