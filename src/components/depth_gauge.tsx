import { useEffect, useRef, useState } from "react";

/** Depth ticks that light up as the drill descends. */
const TICKS = [
  { depth: "0 m", temp: "", label: "Surface" },
  { depth: "10 m", temp: "≈ 11 °C", label: "Constante" },
  { depth: "100 m", temp: "≈ 14 °C", label: "+3 °C / 100 m" },
  { depth: "200 m", temp: "≈ 17 °C", label: "En profondeur" },
];

const BAR_GRADIENT =
  "linear-gradient(180deg,#09A4C3 0%,#22B0AC 34%,#4F9E7E 55%,#C79A3F 78%,#F18F34 100%)";

/**
 * Scroll-driven "drilling" visual: as the section scrolls through the viewport
 * the marker descends the bar, a veil peels back to reveal the temperature
 * gradient, and each depth tick highlights in turn.
 */
export default function DepthGauge() {
  const trackRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const marker = markerRef.current;
    const veil = veilRef.current;
    if (!track || !marker || !veil) return;

    const n = TICKS.length;
    const apply = (p: number) => {
      marker.style.top = `${p * 100}%`;
      veil.style.height = `${(1 - p) * 100}%`;
      let a = 0;
      for (let i = 0; i < n; i++) {
        if (p >= i / (n - 1) - 0.001) a = i;
      }
      setActive(a);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply(1);
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.66;
      const end = vh * 0.34;
      const p = (start - r.top) / (r.height + start - end);
      apply(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="rounded-jfd-lg border border-jfd-line bg-jfd-surface p-6 shadow-jfd-md">
      <h4 className="mb-4 font-heading text-[13px] font-bold uppercase tracking-[0.12em] text-jfd-ink-soft">
        Température &amp; profondeur
      </h4>
      <div className="flex items-stretch gap-4">
        <div ref={trackRef} className="relative w-[22px] shrink-0" aria-hidden="true">
          <div
            className="h-full w-full overflow-hidden rounded-xl shadow-[inset_0_0_0_1px_rgba(11,42,49,0.08)]"
            style={{ background: BAR_GRADIENT }}
          >
            <div
              ref={veilRef}
              className="absolute inset-x-0 bottom-0 h-full [transition:height_0.18s_linear]"
              style={{
                background: "linear-gradient(180deg,#e3ebec,#ccd8da)",
                opacity: 0.92,
              }}
            />
          </div>
          <div
            ref={markerRef}
            className="absolute left-1/2 top-0 z-[2] h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 [transition:top_0.18s_linear]"
          >
            <span className="absolute inset-0 rounded-full border-[3px] border-jfd-teal bg-white shadow-[0_3px_10px_rgba(11,42,49,0.4),0_0_0_4px_rgba(9,164,195,0.18)]" />
            <span className="absolute inset-[8px] rounded-full bg-jfd-orange" />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between py-0.5">
          {TICKS.map((tick, i) => {
            const on = i <= active;
            return (
              <div
                key={tick.depth}
                className={`transition-opacity duration-500 ${on ? "opacity-100" : "opacity-40"}`}
              >
                <small className="block text-[11.5px] uppercase tracking-[0.08em] text-jfd-ink-faint">
                  {tick.label}
                </small>
                <span
                  className={`tnum font-heading text-[15px] font-extrabold ${on ? "text-jfd-teal" : "text-jfd-ink"}`}
                >
                  {tick.depth}
                </span>
                {tick.temp && (
                  <span
                    className={`tnum ml-2 text-[13px] ${on ? "text-jfd-orange" : "text-jfd-teal"}`}
                  >
                    {tick.temp}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
