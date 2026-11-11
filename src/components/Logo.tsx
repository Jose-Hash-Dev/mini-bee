const colors = ["#ff5a36", "#22b573", "#1e9bff", "#9b51e0", "#ffb000", "#ff5a36", "#22b573"];
const tilt = [-6, 5, -4, 6, 5, -5, 4];

/** Rainbow "mini bee" wordmark. */
export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const text = size === "lg" ? "text-5xl" : "text-3xl";
  let i = 0;
  return (
    <span className={`inline-flex items-end gap-2 font-display font-extrabold leading-none ${text}`} aria-label="mini bee">
      {["mini", "bee"].map((word) => (
        <span key={word} className="inline-flex" aria-hidden="true">
          {word.split("").map((ch) => {
            const k = i++;
            return (
              <span
                key={k}
                className="inline-block"
                style={{
                  color: colors[k % colors.length],
                  transform: `rotate(${tilt[k % tilt.length]}deg)`,
                  textShadow: "2px 2px 0 #3b2f2a",
                }}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
