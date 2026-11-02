import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "KFK Vistorias & Perícias: laudos precisos, assinados por engenheiro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const read = (p: string) => readFile(join(process.cwd(), p));

const [bg, logo, bai500, bai400, serifItalic] = await Promise.all([
  read("app/_assets/share-bg.jpg"),
  read("public/brand/logo.png"),
  read("app/_fonts/Bai-500.ttf"),
  read("app/_fonts/Bai-400.ttf"),
  read("app/_fonts/Tartuffo_Trial-RegularItalic-BF643371dadcd03.otf"),
]);

const dataUrl = (type: string, buf: Buffer) => `data:${type};base64,${buf.toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#e9e8e6" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dataUrl("image/jpeg", bg)} alt="" width={1200} height={630} style={{ position: "absolute", inset: 0 }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 84px", width: 700 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={dataUrl("image/png", logo)} alt="" height={44} width={306} style={{ marginBottom: 52 }} />
          <div style={{ width: 72, height: 6, background: "#fcc300", marginBottom: 28 }} />
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "BaiTitle", fontWeight: 500, fontSize: 112, lineHeight: 1, letterSpacing: -5, color: "#242625" }}>
            <span>Laudos</span>
            <span style={{ fontFamily: "Serif", fontWeight: 400, fontSize: 124, letterSpacing: -8, marginTop: 2 }}>Precisos</span>
          </div>
          <div style={{ marginTop: 34, fontFamily: "BaiText", fontWeight: 400, fontSize: 32, lineHeight: 1.35, color: "#3b3e3d", maxWidth: 520 }}>
            Inspeção, vistoria e perícia assinadas por engenheiro.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "BaiTitle", data: bai500, weight: 500, style: "normal" },
        { name: "BaiText", data: bai400, weight: 400, style: "normal" },
        { name: "Serif", data: serifItalic, weight: 400, style: "italic" },
      ],
    },
  );
}
