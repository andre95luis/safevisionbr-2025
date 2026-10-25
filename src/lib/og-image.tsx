import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

export async function buildOgImage(title: string, subtitle: string) {
  const logoPath = join(
    process.cwd(),
    "public",
    "Logo Safe Vision-png-menor-branco-03.png",
  );
  const logoData = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(34,211,238,0.18), transparent 60%)",
          padding: "0 64px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={320} height={320} alt="" />
        <div
          style={{
            marginTop: 20,
            fontSize: 50,
            fontWeight: 700,
            color: "#f8fafc",
            letterSpacing: "-0.01em",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            color: "#22d3ee",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
