import QRCode from "qrcode";
import { siteUrl } from "@/lib/site-url";

export async function generateResumeQrDataUrl(url: string = siteUrl): Promise<string> {
  return QRCode.toDataURL(url, {
    width: 96,
    margin: 0,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
    errorCorrectionLevel: "M",
  });
}
