import { buildOgImage, OG_SIZE } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Safe Vision BR — Segurança Eletrônica, WiFi Mesh e Automação IoT";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return buildOgImage(
    "Segurança Eletrônica, WiFi Mesh e Automação IoT",
    "São Paulo · Nota 5.0 no Google",
  );
}
