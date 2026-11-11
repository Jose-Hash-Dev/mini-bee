"use client";

import { useState } from "react";
import type { Model } from "@/data/models";
import { Icon } from "./Icon";

type Props = {
  model: Model;
  whatsappPhone: string;
  birmarketUrl: string;
};

/** Option picker whose choices are sent in the WhatsApp message. */
export function OrderPanel({ model, whatsappPhone, birmarketUrl }: Props) {
  const [picked, setPicked] = useState<Record<string, string>>(() =>
    Object.fromEntries(model.options.map((g) => [g.id, g.choices[0].id])),
  );

  const summary = model.options
    .map((g) => `${g.label}: ${g.choices.find((c) => c.id === picked[g.id])?.label}`)
    .join("\n");
  const message = `Salam! ${model.title} ilə maraqlanıram.\n${summary}\nUşağın yaşı: `;
  const waHref = whatsappPhone
    ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
    : "#elaqe";

  return (
    <div className="flex flex-col gap-5">
      {model.options.map((group) => (
        <fieldset key={group.id} className="flex flex-col gap-2">
          <legend className="mb-2 font-bold">{group.label}</legend>
          <div className="flex flex-wrap gap-2">
            {group.choices.map((choice) => {
              const checked = picked[group.id] === choice.id;
              return (
                <label
                  key={choice.id}
                  className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border-2 px-4 ${
                    checked ? "border-ink bg-cream" : "border-line"
                  }`}
                >
                  <input
                    type="radio"
                    name={`${model.slug}-${group.id}`}
                    value={choice.id}
                    checked={checked}
                    onChange={() => setPicked((p) => ({ ...p, [group.id]: choice.id }))}
                    className="size-4 accent-ink"
                  />
                  {choice.label}
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}

      <div className="flex flex-col gap-3">
        <a
          href={waHref}
          className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-ink text-lg font-bold text-white hover:bg-black"
        >
          <Icon name="chat" size={20} />
          WhatsApp-da sifariş et
        </a>
        {birmarketUrl && (
          <a
            href={birmarketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-13 items-center justify-center rounded-full border-2 border-ink text-lg font-bold"
          >
            Birmarket-də al · hissə-hissə
          </a>
        )}
        <p className="text-sm text-muted">Seçimləriniz WhatsApp mesajına avtomatik əlavə olunur.</p>
      </div>
    </div>
  );
}
