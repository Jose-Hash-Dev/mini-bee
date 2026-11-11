import { faq } from "@/data/content";
import { Icon } from "./Icon";

export function Faq() {
  return (
    <div className="flex flex-col gap-3">
      {faq.map((item) => (
        <details key={item.q} className="group rounded-2xl border border-line px-5 py-4">
          <summary className="flex min-h-8 cursor-pointer items-center justify-between gap-4 text-lg font-bold">
            {item.q}
            <Icon name="chevron" className="shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
