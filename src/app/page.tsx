import Image from "next/image";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { ModelCard } from "@/components/ModelCard";
import { SizeGuide } from "@/components/SizeGuide";
import { benefits, steps } from "@/data/content";
import { models } from "@/data/models";
import { instagramLink, whatsappLink } from "@/lib/site";

const wrap = "mx-auto max-w-6xl px-4 md:px-6";
const h2 = "font-display text-3xl font-bold leading-tight md:text-4xl";

export default function HomePage() {
  const wa = whatsappLink("Salam! Uşağım üçün masa seçmək istəyirəm. Uşağın yaşı: ");

  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className={`${wrap} grid items-center gap-8 py-8 md:grid-cols-2 md:gap-12 md:py-16`}>
          <div className="order-2 flex flex-col gap-5 md:order-1">
            <span className="self-start rounded-full bg-white px-4 py-1.5 text-sm font-bold">İbtidai sinif üçün</span>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-balance md:text-6xl">
              Uşağınızla birlikdə böyüyən masalar
            </h1>
            <p className="max-w-prose text-lg leading-relaxed">
              Hündürlüyü tənzimlənən dərs masası və stul, mövzulu dizayn və hər sifarişə hədiyyə. Masallıda, ailə
              fabrikimizdə hazırlanır.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#modeller" className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-lg font-bold text-white">
                Modellərə bax
              </a>
              <a href={wa} className="inline-flex min-h-12 items-center rounded-full border-2 border-ink bg-white px-6 text-lg font-bold">
                WhatsApp-da yaz
              </a>
            </div>
            <ul className="flex flex-wrap gap-2 text-[15px] font-bold">
              <li className="rounded-xl bg-white px-3 py-2">4 hündürlük mövqeyi</li>
              <li className="rounded-xl bg-white px-3 py-2">Masallıda istehsal</li>
              <li className="rounded-xl bg-white px-3 py-2">Hədiyyə təqvim</li>
            </ul>
          </div>
          <Image
            src="/images/bulud-set.jpg"
            alt="Bulud masası və tənzimlənən stul uşaq otağında"
            width={1800}
            height={1344}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="order-1 aspect-[4/3] w-full rounded-3xl object-cover md:order-2"
          />
        </div>
      </section>

      {/* Models */}
      <section id="modeller" className={`${wrap} flex flex-col gap-6 py-14 md:py-20`}>
        <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <h2 className={h2}>Modellərimiz</h2>
          <p className="text-lg">Hamısı hündürlüyü tənzimlənən masa və stulla</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((m, i) => (
            <ModelCard key={m.slug} model={m} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream">
        <div className={`${wrap} flex flex-col gap-6 py-14 md:py-20`}>
          <h2 className={h2}>Niyə Mini Bee?</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-4 rounded-3xl bg-white p-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border-2 border-ink">
                  <Icon name={b.icon} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-bold">{b.title}</h3>
                  <p className="leading-relaxed">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How ordering works */}
      <section className={`${wrap} flex flex-col gap-6 py-14 md:py-20`}>
        <h2 className={h2}>Sifariş necə işləyir?</h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-2 rounded-3xl border border-line p-5">
              <span className="flex size-10 items-center justify-center rounded-full bg-honey font-display text-xl font-bold">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Size guide */}
      <section id="olcu" className="bg-cream">
        <div className={`${wrap} grid gap-6 py-14 md:grid-cols-[1fr_1.4fr] md:gap-10 md:py-20`}>
          <div className="flex flex-col gap-3">
            <h2 className={h2}>Ölçü bələdçisi</h2>
            <p className="text-lg leading-relaxed">
              Masa və stulu uşağın boyuna görə 4 mövqedə qurun. Uşaq böyüdükcə hündürlüyü dəyişin.
            </p>
            <p className="text-[15px] text-muted">EN 1729 standartına əsaslanır · ölçülər mm ilə</p>
          </div>
          <SizeGuide />
        </div>
      </section>

      {/* Gift */}
      <section className={`${wrap} grid items-center gap-6 py-14 md:grid-cols-2 md:gap-12 md:py-20`}>
        <Image
          src="/images/teqvim.jpg"
          alt="Bulud formalı lazer kəsim təhsil təqvimi"
          width={1800}
          height={1344}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
        <div className="flex flex-col gap-3">
          <span className="self-start rounded-full bg-honey px-4 py-1.5 text-sm font-bold">Hədiyyə</span>
          <h2 className={h2}>Hər sifarişə bulud təqvimi</h2>
          <p className="text-lg leading-relaxed">
            Ay, tarix, həftənin günü, fəsillər, hava və temperatur. Sürüşkənlərlə, itən hissə yoxdur, uşağın adı ilə
            hazırlanır.
          </p>
        </div>
      </section>

      {/* Reviews: real ones only */}
      <section className="bg-cream">
        <div className={`${wrap} flex flex-col gap-5 py-14 md:py-20`}>
          <h2 className={h2}>Rəylər</h2>
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-xl font-bold">İlk rəyləri tezliklə burada paylaşacağıq</h3>
              <p>Mini Bee masası aldınız? Uşağınızın fotosu ilə rəyinizi göndərin.</p>
            </div>
            <a
              href={whatsappLink("Salam! Mini Bee masası haqqında rəyimi göndərmək istəyirəm.")}
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-ink px-5 font-bold"
            >
              Rəy göndər
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sual" className="mx-auto flex max-w-3xl flex-col gap-5 px-4 py-14 md:px-6 md:py-20">
        <h2 className={h2}>Sual-cavab</h2>
        <Faq />
      </section>

      {/* Contact */}
      <section id="elaqe" className="bg-honey">
        <div className={`${wrap} flex flex-col gap-5 py-12 md:flex-row md:items-center md:justify-between`}>
          <div className="flex flex-col gap-1">
            <h2 className={h2}>Masa seçməyə kömək edək</h2>
            <p className="text-lg">Uşağın yaşını yazın, uyğun modeli və qiyməti göndərək.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={wa} className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-lg font-bold text-white">
              WhatsApp-da yaz
            </a>
            <a href={instagramLink()} className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-lg font-bold">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
