"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Leaf,
  UserRound,
  Ruler,
  Weight,
  Target,
  Activity,
  ArrowRight,
  Save,
  CheckCircle2,
} from "lucide-react";

export default function ProfilePage() {
  const [name, setName] = useState("رومینا");
  const [age, setAge] = useState("27");
  const [gender, setGender] = useState("female");
  const [height, setHeight] = useState("166");
  const [weight, setWeight] = useState("65");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("weight-loss");
  const [saved, setSaved] = useState(false);

  const heightInMeters = Number(height) / 100;
  const bmi =
    Number(height) > 0 && Number(weight) > 0
      ? Number(weight) / (heightInMeters * heightInMeters)
      : 0;

  const bmiLabel =
    bmi === 0
      ? "اطلاعات را وارد کنید"
      : bmi < 18.5
      ? "کمبود وزن"
      : bmi < 25
      ? "محدوده نرمال"
      : bmi < 30
      ? "اضافه وزن"
      : "چاقی";

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  const inputClass =
    "mt-2 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-[#789783]";

  return (
    <main className="min-h-screen bg-[#F7F8F6] px-5 py-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#244B3B] text-white">
              <Leaf size={22} />
            </span>
            <span className="text-xl font-bold text-[#244B3B]">Healty</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#244B3B]"
          >
            <ArrowRight size={17} />
            بازگشت به داشبورد
          </Link>
        </header>

        <section className="mb-7">
          <h1 className="text-2xl font-bold text-[#244B3B]">پروفایل من</h1>
          <p className="mt-2 text-sm text-gray-500">
            اطلاعات بدنی و هدف خودت رو ثبت کن تا برنامه مناسب‌تری داشته باشی.
          </p>
        </section>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Personal information */}
          <section className="rounded-2xl border border-[#E9EDE9] bg-white p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E9F0EA] text-[#52745E]">
                <UserRound size={20} />
              </span>
              <div>
                <h2 className="font-bold text-gray-800">اطلاعات شخصی</h2>
                <p className="mt-1 text-xs text-gray-400">
                  مشخصات اولیه حساب کاربری
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  نام و نام خانوادگی
                </label>
                <input
                  className={inputClass}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setSaved(false);
                  }}
                  placeholder="نام شما"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">سن</label>
                <input
                  className={inputClass}
                  type="number"
                  min="1"
                  max="120"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                    setSaved(false);
                  }}
                  placeholder="سن به سال"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  جنسیت
                </label>
                <select
                  className={inputClass}
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    setSaved(false);
                  }}
                >
                  <option value="female">زن</option>
                  <option value="male">مرد</option>
                </select>
              </div>
            </div>
          </section>

          {/* Body information */}
          <section className="rounded-2xl border border-[#E9EDE9] bg-white p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E9F0EA] text-[#52745E]">
                <Activity size={20} />
              </span>
              <div>
                <h2 className="font-bold text-gray-800">اطلاعات بدنی</h2>
                <p className="mt-1 text-xs text-gray-400">
                  برای محاسبه شاخص توده بدنی
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Ruler size={16} className="text-[#789783]" />
                  قد (سانتی‌متر)
                </label>
                <input
                  className={inputClass}
                  type="number"
                  min="1"
                  max="250"
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                    setSaved(false);
                  }}
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Weight size={16} className="text-[#789783]" />
                  وزن فعلی (کیلوگرم)
                </label>
                <input
                  className={inputClass}
                  type="number"
                  min="1"
                  max="500"
                  step="0.1"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                    setSaved(false);
                  }}
                  required
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#F2F6F2] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">شاخص توده بدنی (BMI)</p>
                  <p className="mt-2 text-3xl font-bold text-[#244B3B]">
                    {bmi > 0 ? bmi.toFixed(1) : "--"}
                  </p>
                  <p className="mt-1 text-xs text-[#52745E]">{bmiLabel}</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-[#52745E]">
                  <Activity size={24} />
                </div>
              </div>
              <p className="mt-4 text-xs leading-6 text-gray-400">
                BMI یک شاخص عمومی برای بررسی نسبت وزن به قد است و به‌تنهایی
                معیار تشخیص وضعیت سلامت نیست.
              </p>
            </div>
          </section>

          {/* Goals */}
          <section className="rounded-2xl border border-[#E9EDE9] bg-white p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E9F0EA] text-[#52745E]">
                <Target size={20} />
              </span>
              <div>
                <h2 className="font-bold text-gray-800">هدف و فعالیت</h2>
                <p className="mt-1 text-xs text-gray-400">
                  برای تنظیم برنامه شخصی
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  سطح فعالیت روزانه
                </label>
                <select
                  className={inputClass}
                  value={activity}
                  onChange={(e) => {
                    setActivity(e.target.value);
                    setSaved(false);
                  }}
                >
                  <option value="sedentary">کم‌تحرک</option>
                  <option value="light">فعالیت سبک</option>
                  <option value="moderate">فعالیت متوسط</option>
                  <option value="active">فعال</option>
                  <option value="very-active">بسیار فعال</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  هدف من
                </label>
                <select
                  className={inputClass}
                  value={goal}
                  onChange={(e) => {
                    setGoal(e.target.value);
                    setSaved(false);
                  }}
                >
                  <option value="weight-loss">کاهش وزن</option>
                  <option value="maintenance">حفظ وزن</option>
                  <option value="muscle-gain">افزایش وزن و عضله‌سازی</option>
                  <option value="healthy-lifestyle">سبک زندگی سالم</option>
                </select>
              </div>
            </div>
          </section>

          {/* Save */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#244B3B] px-8 text-sm font-semibold text-white transition hover:bg-[#315D49]"
            >
              <Save size={18} />
              ذخیره اطلاعات
            </button>

            {saved && (
              <p className="flex items-center gap-2 text-sm text-[#52745E]">
                <CheckCircle2 size={18} />
                اطلاعات در این نسخه نمایشی ثبت شد.
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
