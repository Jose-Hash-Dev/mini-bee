import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/Gallery";
import { ModelCard } from "@/components/ModelCard";
import { OrderPanel } from "@/components/OrderPanel";
import { getModel, models } from "@/data/models";
import { priceLabel, site, whatsappLink } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) return {};
  return {
    title: model.title,
    description: `${model.short} ${model.age}.`,
    openGraph: { images: [{ url: model.images[0].src, alt: model.images[0].alt }] },
  };
}

const wrap = "mx-auto max-w-6xl px-4 md:px-6";
const h2 = "font-display text-3xl font-bold";

export default async function ModelPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  const others = models.filter((m) => m.slug !== model.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: model.title,
    description: model.description,
    image: model.images.map((i) => new URL(i.src, site.url).toString()),
    brand: { "@type": "Brand", name: site.name },
    ...(typeof model.priceFrom === "number" && {
      offers: { "@type": "Offer", price: model.priceFrom, priceCurrency: "AZN", availability: "https://schema.org/PreOrder" },
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Səhifə yolu" className={`${wrap} flex flex-wrap gap-2 pt-4 text-[15px]`}>
        <Link href="/" className="underline underline-offset-4">Əsas səhifə</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#modeller" className="underline underline-offset-4">Modellər</Link>
        <span aria-hidden="true">/</span>
        <span className="font-bold">{model.name}</span>
      </nav>

      <section className={`${wrap} grid gap-8 py-5 md:grid-cols-[1.25fr_1fr] md:gap-10 md:py-8`}>
        <Gallery images={model.images} />

        <div className="flex flex-col gap-4">
          <span className="self-start rounded-full bg-honey px-3 py-1 text-sm font-bold">Model {model.number}</span>
          <h1 className="font-display text-4xl font-extrabold leading-none md:text-5xl">{model.title}</h1>
          <p className="text-lg">Masa + stul · {model.age}</p>
          <p className="text-2xl font-bold">{priceLabel(model.priceFrom)}</p>

          <OrderPanel model={model} whatsappPhone={site.whatsappPhone} birmarketUrl={site.birmarketUrl} />

          <ul className="flex flex-col gap-2 rounded-2xl bg-cream p-5">
            <li><b>Hədiyyə:</b> uşağın adı ilə bulud təqvimi</li>
            <li><b>Hazırlanma:</b> [X] iş günü</li>
            <li><b>Çatdırılma:</b> Bakı və rayonlar · [şərt]</li>
            <li><b>Zəmanət:</b> [X] ay</li>
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className={`${wrap} grid gap-8 py-12 md:grid-cols-[1.2fr_1fr] md:gap-10 md:py-16`}>
          <div className="flex flex-col gap-4">
            <h2 className={h2}>Təsvir</h2>
            <p className="text-lg leading-relaxed">{model.description}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {model.features.map((f) => (
                <li key={f} className="flex items-start gap-3 leading-snug">
                  <span className="mt-1.5 size-2.5 shrink-0 rounded-[3px] border-2 border-ink bg-honey" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white px-5 pt-4 pb-5 md:px-6">
            <h2 className="font-display text-2xl font-bold">Ölçülər</h2>
            <dl className="mt-2">
              {model.dimensions.map((d) => (
                <div key={d.label} className="flex justify-between gap-4 border-b border-line py-3 last:border-0">
                  <dt>{d.label}</dt>
                  <dd className="text-right font-bold">{d.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-sm text-muted">Ölçülər təxminidir, sifarişə görə dəqiqləşir.</p>
          </div>
        </div>
      </section>

      <section className={`${wrap} flex flex-col gap-5 py-12 md:py-16`}>
        <h2 className={h2}>Rəylər</h2>
        <div className="flex flex-col gap-4 rounded-3xl border border-line p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-xl font-bold">Bu model üçün hələ rəy yoxdur</h3>
            <p>{model.title} aldınız? Uşağınızın fotosu ilə ilk rəyi siz yazın.</p>
          </div>
          <a
            href={whatsappLink(`Salam! ${model.title} haqqında rəyimi göndərmək istəyirəm.`)}
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-ink px-5 font-bold"
          >
            Rəy göndər
          </a>
        </div>
      </section>

      <section className="bg-cream">
        <div className={`${wrap} flex flex-col gap-6 py-12 md:py-16`}>
          <h2 className={h2}>Digər modellər</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((m) => (
              <ModelCard key={m.slug} model={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
