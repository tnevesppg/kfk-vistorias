"use client";

import { useEffect, useState } from "react";
import { u } from "@/lib/u";
import TechText from "./TechText";
import { COUNT_MS } from "./Preloader";

const SANS = '"Bai Jamjuree"';
const SERIF = '"Tartuffo"';
const LS = -0.045; // letter-spacing in em (sans)
const LS_SERIF = -0.065; // the italic sits tight, like the reference
const SERIF_SCALE = 1.0; // the serif italic runs a hair small next to the sans

type Seg = {
  key: string;
  text: string;
  serif: boolean;
  intro: number; // seconds the dashed-to-solid draw takes
  start: number; // seconds after the first piece starts
  box: { left: number; top: number; width: number; height: number; size: number };
};

/**
 * Title: "Laudos precisos," / "decisões seguras." where only "precisos," is Tartuffo italic.
 * Each piece is its own canvas, measured with the real fonts so all three share baselines.
 */
function measure(): { segs: Seg[]; height: number } | null {
  const F = window.innerWidth * 0.0475; // Archidex (the reference) sets its title at ~4.2% of the width
  const LH = F * 1.1;
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return null;
  const set = (font: string, size: number, ls: number) => {
    ctx.font = font;
    ctx.letterSpacing = `${ls * size}px`;
  };

  set(`500 ${F}px ${SANS}`, F, LS);
  const m1 = ctx.measureText("Laudos");
  const adv1 = ctx.measureText("Laudos ").width;
  const m3 = ctx.measureText("decisões seguras.");
  const sizeS = F * SERIF_SCALE;
  set(`400 ${sizeS}px ${SERIF}`, sizeS, LS_SERIF);
  const m2 = ctx.measureText("precisos,");

  const inkW = (m: TextMetrics) => m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
  const inkH = (m: TextMetrics) => m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;
  const boxH = Math.max(inkH(m1), inkH(m2), inkH(m3)) / 0.6; // TechText needs ink height <= 66% of its box
  const widthFor = (m: TextMetrics) => inkW(m) / 0.88 + 6; // ...and ink width <= 90%
  const baselineIn = (m: TextMetrics) => (boxH - inkH(m)) / 2 + m.actualBoundingBoxAscent;
  const Yb0 = boxH * 0.62;

  const place = (m: TextMetrics, inkLeft: number, line: number, size: number) => {
    const width = widthFor(m);
    return { left: inkLeft - 0.05 * width, top: Yb0 + line * LH - baselineIn(m), width, height: boxH, size };
  };
  const inkLeft2 = m1.actualBoundingBoxLeft + adv1 - m2.actualBoundingBoxLeft;

  return {
    height: boxH + LH,
    segs: [
      { key: "a", text: "Laudos", serif: false, intro: 1.0, start: 0, box: place(m1, 0, 0, F) },
      { key: "b", text: "precisos,", serif: true, intro: 1.4, start: 1.1, box: place(m2, inkLeft2, 0, sizeS) },
      { key: "c", text: "decisões seguras.", serif: false, intro: 1.9, start: 2.6, box: place(m3, 0, 1, F) },
    ],
  };
}

/**
 * Draws itself once, on arrival (letters appear dashed, one by one, then turn solid), after the loader
 * and the first elements. Afterwards it just stays: no hover, no sweep, no selection frame.
 */
export default function HeroTitle() {
  const [layout, setLayout] = useState<ReturnType<typeof measure>>(null);
  const [shown, setShown] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    let alive = true;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compute = () => alive && setLayout(measure());
    Promise.all([document.fonts.load(`500 100px ${SANS}`), document.fonts.load(`italic 400 100px ${SERIF}`)]).then(compute, compute);
    let tr: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(tr);
      tr = setTimeout(compute, 150);
    };
    window.addEventListener("resize", onResize);

    const base = reduced ? 0 : COUNT_MS + 650;
    const starts = [0, 1.1, 2.6];
    const timers = starts.map((s, i) =>
      setTimeout(() => setShown((p) => p.map((v, j) => (j === i ? true : v))), reduced ? 0 : base + s * 1000),
    );
    return () => {
      alive = false;
      timers.forEach(clearTimeout);
      clearTimeout(tr);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none relative" style={{ width: u(1230), height: layout ? layout.height : u(300) }}>
      {layout?.segs.map((seg, i) =>
        shown[i] ? (
          <div key={seg.key} className="absolute" style={{ left: seg.box.left, top: seg.box.top, width: seg.box.width, height: seg.box.height }}>
            <TechText
              text={seg.text}
              fontFamily={seg.serif ? SERIF : SANS}
              fontWeight={seg.serif ? 400 : 500}
              fontSize={seg.box.size}
              letterSpacing={seg.serif ? LS_SERIF : LS}
              align="left"
              accentColor="#0164bb"
              intro="type"
              introDuration={seg.intro}
              sweep={false}
              selection={false}
              draggable={false}
              clickKick={false}
              labels={false}
              reveal="none"
              guides={false}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : null,
      )}
    </div>
  );
}
