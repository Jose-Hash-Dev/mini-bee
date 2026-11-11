import Image from "next/image";
import Link from "next/link";
import type { Model } from "@/data/models";
import { priceLabel } from "@/lib/site";

export function ModelCard({ model, priority = false }: { model: Model; priority?: boolean }) {
  const img = model.images[0];
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
      <Link href={`/modeller/${model.slug}`} className="block" aria-label={`${model.title}: ətraflı`}>
        <Image
          src={img.src}
          alt={img.alt}
          width={1200}
          height={896}
          priority={priority}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="self-start rounded-full bg-honey px-3 py-1 text-sm font-bold">{model.age}</span>
        <h3 className="font-display text-2xl font-bold">{model.name}</h3>
        <p className="leading-relaxed">{model.short}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <span className="text-lg font-bold">{priceLabel(model.priceFrom)}</span>
          <Link
            href={`/modeller/${model.slug}`}
            className="inline-flex min-h-11 items-center rounded-full bg-cream px-5 font-bold"
          >
            Ətraflı
          </Link>
        </div>
      </div>
    </article>
  );
}
