"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const links = [
  { href: "/#modeller", label: "Modellər" },
  { href: "/#olcu", label: "Ölçü bələdçisi" },
  { href: "/#sual", label: "Sual-cavab" },
  { href: "/#elaqe", label: "Əlaqə" },
];

export function Header({ whatsappHref }: { whatsappHref: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" aria-label="Mini Bee əsas səhifə" className="no-underline" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Əsas menyu" className="hidden items-center gap-6 font-bold md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 font-bold text-white hover:bg-black"
          >
            <Icon name="chat" size={18} />
            WhatsApp-da yaz
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menyunu bağla" : "Menyunu aç"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobil menyu" className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex min-h-12 items-center border-b border-line text-lg font-bold"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
