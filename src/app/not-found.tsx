import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-start gap-4 px-4 py-20">
      <h1 className="font-display text-4xl font-extrabold">Səhifə tapılmadı</h1>
      <p className="text-lg">Bu ünvanda səhifə yoxdur. Modellərimizə əsas səhifədən baxın.</p>
      <Link href="/#modeller" className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-lg font-bold text-white">
        Modellərə bax
      </Link>
    </section>
  );
}
