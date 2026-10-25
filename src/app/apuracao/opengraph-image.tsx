import { buildOgImage, OG_SIZE } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Safe Vision BR — Apuração ao vivo das eleições 2026";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return buildOgImage(
    "Acompanhe aqui a apuração presidencial",
    "2º turno 2026 · Presidente da República",
  );
}
