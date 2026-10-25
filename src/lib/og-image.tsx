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
            "radial-gradient(circle at 50% 30%, rgba(34,211,238,0.14), transparent 60%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={200} height={200} alt="" />
        <div
          style={{
            marginTop: 24,
            fontSize: 30,
            fontWeight: 700,
            color: "#f8fafc",
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 22,
            color: "#22d3ee",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
