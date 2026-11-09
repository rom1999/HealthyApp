import { Arrow, Spark } from "@/components/icons";

const features = [
  ["ساختار مقیاس‌پذیر", "اپ‌روتر Next.js و مسیرهای آماده برای رشد محصول."],
  ["کاملاً Type-safe", "TypeScript با تنظیمات سخت‌گیرانه و کدی مطمئن."],
  ["رابط واکنش‌گرا", "طراحی دقیق برای نمایش بی‌نقص در هر اندازه‌ صفحه."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">
      <div className="relative isolate grid-lines">
        <div className="orb absolute -right-28 top-6 -z-10 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="orb absolute -left-20 top-72 -z-10 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />

        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-300 text-slate-900">
              <Spark className="h-5 w-5" />
            </span>
            نُوا
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#ویژگی‌ها" className="transition hover:text-teal-700">
              ویژگی‌ها
            </a>
            <a href="#درباره" className="transition hover:text-teal-700">
              درباره قالب
            </a>
            <a href="#شروع" className="transition hover:text-teal-700">
              راهنما
            </a>
          </nav>

          <a
            href="#شروع"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
          >
            شروع پروژه
          </a>
        </header>

        <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 text-center lg:px-8 lg:pb-32 lg:pt-24">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-500/10 px-4 py-2 text-xs text-teal-800">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            آماده برای ساخت چیزهای بزرگ
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.18] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            از ایده تا محصول، <span className="text-teal-600">سریع‌تر</span>{" "}
            حرکت کنید.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            یک نقطه شروع سبک، حرفه‌ای و فارسی برای ساخت تجربه‌های دیجیتال مدرن
            با تکنولوژی‌های دوست‌داشتنی وب.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#شروع"
              className="flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-teal-600"
            >
              شروع کنید <Arrow className="h-4 w-4" />
            </a>

            <a
              href="#ویژگی‌ها"
              className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white"
            >
              مشاهده امکانات
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 border-y border-slate-200 py-6 text-right">
            <div>
              <p className="text-2xl font-bold text-slate-900">Next 15</p>
              <p className="mt-1 text-xs text-slate-500">فریم‌ورک</p>
            </div>

            <div className="border-x border-slate-200 px-6">
              <p className="text-2xl font-bold text-slate-900">Tailwind</p>
              <p className="mt-1 text-xs text-slate-500">استایل‌دهی</p>
            </div>

            <div className="pr-6">
              <p className="text-2xl font-bold text-slate-900">TypeScript</p>
              <p className="mt-1 text-xs text-slate-500">زبان</p>
            </div>
          </div>
        </section>
      </div>

      <section id="ویژگی‌ها" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-teal-700">
            همه‌چیز سر جای خودش
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            پایه‌ای محکم برای ایده‌های تازه
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map(([title, text], index) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-md"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-50 text-sm font-bold text-teal-700">
                0{index + 1}
              </span>

              <h3 className="mt-6 text-lg font-bold text-slate-900">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="شروع" className="mx-auto mb-10 max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-teal-200 bg-gradient-to-l from-teal-50 to-indigo-50 px-7 py-12 text-center sm:px-12">
          <Spark className="mx-auto h-7 w-7 text-teal-600" />

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            برای اولین انتشار آماده‌اید؟
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
            وابستگی‌ها را نصب کنید و با یک دستور، مسیر ساخت محصولتان را آغاز
            کنید.
          </p>

          <code
            className="mt-7 inline-block rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm text-teal-700 shadow-sm"
            dir="ltr"
          >
            npm run dev
          </code>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl justify-between px-6 py-7 text-xs text-slate-500 lg:px-8">
        <span>© ۲۰۲۶ نُوا</span>
        <span>ساخته‌شده با دقت</span>
      </footer>
    </main>
  );
}
