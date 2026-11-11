import { Icon } from "./Icon";

/** Sticky contact bar at the bottom of the screen on phones. */
export function ContactBar({ whatsappHref, instagramHref }: { whatsappHref: string; instagramHref: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="flex gap-3">
        <a
          href={whatsappHref}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink text-lg font-bold text-white"
        >
          <Icon name="chat" size={20} />
          WhatsApp-da yaz
        </a>
        <a
          href={instagramHref}
          aria-label="Instagram"
          className="flex size-12 items-center justify-center rounded-full border-2 border-ink"
        >
          <Icon name="instagram" />
        </a>
      </div>
    </div>
  );
}
