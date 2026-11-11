import Link from "next/link";

export function Footer({ instagramHref, birmarketUrl }: { instagramHref: string; birmarketUrl: string }) {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:justify-between md:px-6">
        <div className="flex flex-col gap-2">
          <span className="font-display text-3xl font-bold text-butter">mini bee</span>
          <span>Uşaq masaları · Masallıda istehsal</span>
          <span>© {new Date().getFullYear()} Mini Bee</span>
        </div>
        <nav aria-label="Alt menyu" className="flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/#modeller" className="underline-offset-4 hover:underline">Modellər</Link>
          <a href="/katalog.pdf" className="underline-offset-4 hover:underline">Kataloq (PDF) · showroomlar üçün</a>
          {birmarketUrl && (
            <a href={birmarketUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              Birmarket
            </a>
          )}
          <a href={instagramHref} className="underline-offset-4 hover:underline">Instagram</a>
        </nav>
      </div>
    </footer>
  );
}
