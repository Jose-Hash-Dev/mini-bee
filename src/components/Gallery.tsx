"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ModelImage } from "@/data/models";

/** Swipeable photo gallery: swipe on phones, thumbnails on all screens. */
export function Gallery({ images }: { images: ModelImage[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(i: number) {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setActive(i);
  }

  function onScroll() {
    const el = track.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== active) setActive(i);
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={track}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-3xl"
        aria-label="Şəkillər"
      >
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={1800}
            height={1344}
            priority={i === 0}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="aspect-[4/3] w-full shrink-0 snap-center object-cover"
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Şəkil ${i + 1}`}
              aria-current={active === i}
              className={`overflow-hidden rounded-2xl border-[3px] ${active === i ? "border-ink" : "border-transparent"}`}
            >
              <Image src={img.src} alt="" width={160} height={120} className="h-16 w-20 object-cover sm:h-20 sm:w-28" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
