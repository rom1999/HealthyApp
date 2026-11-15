import {
  ArrowLeft,
  Bell,
  CalendarDays,
  ChartNoAxesCombined,
  CircleUserRound,
  ClipboardList,
  House,
  Leaf,
  Salad,
  Sun,
  Utensils,
  UserRound,
  Weight,
  Target,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const meals = [
  {
    name: "صبحانه",
    time: "۰۸:۰۰",
    title: "تخم‌مرغ و نان سبوس‌دار",
    detail: "۲ عدد تخم‌مرغ، نان سبوس‌دار و خیار",
    calories: 380,
    icon: Sun,
    color: "bg-amber-50",
  },
  {
    name: "میان‌وعده",
    time: "۱۱:۰۰",
    title: "ماست یونانی و گردو",
    detail: "ماست کم‌چرب، گردو و چند عدد توت",
    calories: 220,
    icon: Salad,
    color: "bg-orange-50",
  },
  {
    name: "ناهار",
    time: "۱۴:۰۰",
    title: "مرغ گریل و برنج",
    detail: "سینه مرغ، برنج و سبزیجات",
    calories: 520,
    icon: Utensils,
    color: "bg-green-50",
  },
  {
    name: "شام",
    time: "۲۰:۰۰",
    title: "سالاد پروتئینی",
    detail: "مرغ، کاهو، گوجه و سس ماست",
    calories: 360,
    icon: Leaf,
    color: "bg-emerald-50",
  },
];

const navigation = [
  { label: "خانه", icon: House, active: true, href: "#" },
  { label: "برنامه غذایی", icon: ClipboardList, href: "#meals" },
  { label: "پیشرفت", icon: ChartNoAxesCombined, href: "#progress" },
  { label: "پروفایل", icon: CircleUserRound, href: "/profile" },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed right-0 top-0 z-20 h-screen w-64 flex-col border-l border-[#E8EDE8] bg-white px-6 py-8">
      <a href="#" className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#244B3B] text-xl text-white">
          H
        </div>
        <span className="text-xl font-bold text-[#244B3B]">Healty</span>
      </a>

      <p className="mb-4 mt-12 text-xs font-medium text-gray-400">منوی اصلی</p>

      <nav className="space-y-2">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
              item.active
                ? "bg-[#E9F0EA] font-semibold text-[#244B3B]"
                : "text-gray-500 hover:bg-gray-50 hover:text-[#244B3B]"
            }`}
          >
            <item.icon size={20} strokeWidth={1.8} /> {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl bg-[#F2F6F2] p-4">
        <p className="text-sm font-semibold text-[#244B3B]">
          قدم به قدم تا سلامتی
        </p>
        <p className="mt-2 text-xs leading-6 text-gray-500">
          استمرار در مسیر مهم‌تر از سرعت رسیدن به هدف است.
        </p>
      </div>
    </aside>
  );
}

function ProgressRing() {
  return (
    <div className="relative grid h-36 w-36 shrink-0 place-items-center">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r="49"
          fill="none"
          stroke="#E9F0EA"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r="49"
          fill="none"
          stroke="#789783"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="308"
          strokeDashoffset="92"
        />
      </svg>
      <div className="absolute text-center">
        <p className="text-3xl font-bold text-[#244B3B]">۷۰٪</p>
        <p className="mt-1 text-xs text-gray-400">از هدف روزانه</p>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  unit,
  description,
  icon: Icon,
}: {
  title: string;
  value: string;
  unit: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-2xl border border-[#E9EDE9] bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#F1F5F1] text-[#52745E]">
          <Icon size={19} strokeWidth={1.7} />
        </span>
      </div>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-[#244B3B]">{value}</span>
        <span className="text-xs text-gray-400">{unit}</span>
      </div>

      <p className="mt-2 text-xs text-gray-400">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8F6] text-gray-800">
      <Sidebar />

      <div className="pb-24 lg:mr-64 lg:pb-8">
        <header className="sticky top-0 z-10 border-b border-[#E9EDE9] bg-white/90 px-5 py-4 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl border border-[#244B3B] px-4 py-2 text-sm text-[#244B3B]"
            >
              ورود
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-[#244B3B] px-4 py-2 text-sm text-white"
            >
              ثبت‌نام
            </Link>
          </div>
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">پنجشنبه، ۲۲ آبان ۱۴۰۵</p>
              <h1 className="mt-1 text-lg font-bold text-[#244B3B]">
                سلام، رومینا 👋
              </h1>
            </div>

            <button
              aria-label="اعلان‌ها"
              className="relative grid h-10 w-10 place-items-center rounded-xl border border-gray-100 bg-white text-lg"
            >
              ♧
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#789783]" />
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-6xl space-y-7 px-5 py-7 sm:px-8">
          <section className="flex flex-col justify-between gap-5 rounded-3xl bg-[#244B3B] p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-sm text-white/70">به مسیر سلامتی خوش اومدی</p>
              <h2 className="mt-3 text-2xl font-bold leading-relaxed sm:text-3xl">
                امروز، یک فرصت تازه برای
                <br className="hidden sm:block" /> مراقبت از خودته.
              </h2>
              <p className="mt-3 text-sm text-white/65">
                با برنامه‌ات پیش برو و به هدفت نزدیک‌تر شو.
              </p>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center self-end rounded-full bg-white/10 text-5xl sm:self-center">
              🌱
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold text-gray-800">خلاصه امروز</h2>
              <span className="text-xs text-gray-400">هدف روزانه</span>
            </div>

            <div className="grid gap-4 rounded-2xl border border-[#E9EDE9] bg-white p-5 sm:grid-cols-2 sm:items-center sm:p-7">
              <div className="flex items-center gap-5">
                <ProgressRing />
                <div>
                  <p className="text-sm text-gray-500">کالری مصرف‌شده</p>
                  <p className="mt-2 text-3xl font-bold text-[#244B3B]">
                    ۱,۳۲۰
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    از ۱,۹۰۰ کیلوکالری
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "پروتئین", value: "۹۵ / ۱۴۵ گرم", percent: "65%" },
                  {
                    label: "کربوهیدرات",
                    value: "۱۵۰ / ۲۲۰ گرم",
                    percent: "68%",
                  },
                  { label: "چربی", value: "۳۸ / ۵۵ گرم", percent: "69%" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-medium text-gray-700">
                        {item.value}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#EDF1ED]">
                      <div
                        className="h-full rounded-full bg-[#789783]"
                        style={{ width: item.percent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold text-gray-800">وضعیت بدن</h2>
              <a href="/profile" className="text-xs font-medium text-[#52745E]">
                مشاهده پروفایل
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              <StatCard
                title="وزن فعلی"
                value="۶۵"
                unit="کیلوگرم"
                description="آخرین ثبت وزن"
                icon={Weight}
              />
              <StatCard
                title="شاخص توده بدنی"
                value="۲۳.۵"
                unit="BMI"
                description="در محدوده نرمال"
                icon={ChartNoAxesCombined}
              />
              <div className="col-span-2 sm:col-span-1">
                <StatCard
                  title="هدف وزنی"
                  value="۶۰"
                  unit="کیلوگرم"
                  description="۵ کیلوگرم تا هدف"
                  icon={Target}
                />
              </div>
            </div>
          </section>

          <section id="meals">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-gray-800">وعده‌های امروز</h2>
                <p className="mt-1 text-xs text-gray-400">
                  برنامه غذایی روزانه تو
                </p>
              </div>
              <a href="#meals" className="text-xs font-medium text-[#52745E]">
                برنامه کامل ←
              </a>
            </div>

            <div className="space-y-3">
              {meals.map((meal) => (
                <article
                  key={meal.name}
                  className="flex items-center gap-4 rounded-2xl border border-[#E9EDE9] bg-white p-4 transition hover:border-[#B9CBBB]"
                >
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${meal.color}`}
                  >
                    <meal.icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-[#52745E]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-gray-800">
                        {meal.name}
                      </h3>
                      <span className="text-xs text-gray-400">{meal.time}</span>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-600">
                      {meal.title}
                    </p>
                    <p className="mt-1 hidden text-xs text-gray-400 sm:block">
                      {meal.detail}
                    </p>
                  </div>

                  <div className="shrink-0 text-left">
                    <p className="font-bold text-[#244B3B]">{meal.calories}</p>
                    <p className="text-[10px] text-gray-400">کیلوکالری</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="progress"
            className="flex flex-col justify-between gap-4 rounded-2xl border border-[#E9EDE9] bg-white p-5 sm:flex-row sm:items-center"
          >
            <div>
              <h2 className="font-bold text-gray-800">پیشرفتت رو دنبال کن</h2>
              <p className="mt-2 text-sm text-gray-500">
                تغییرات وزن و روند رسیدن به هدفت رو بررسی کن.
              </p>
            </div>
            <a
              href="#progress"
              className="rounded-xl bg-[#E9F0EA] px-5 py-3 text-center text-sm font-semibold text-[#244B3B] transition hover:bg-[#DCE8DD]"
            >
              مشاهده پیشرفت
            </a>
          </section>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-20 flex border-t border-[#E9EDE9] bg-white px-2 py-2 lg:hidden">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-xs ${
              item.active ? "font-bold text-[#244B3B]" : "text-gray-400"
            }`}
          >
            <item.icon size={20} strokeWidth={1.8} /> {item.label}
          </a>
        ))}
      </nav>
    </main>
  );
}
