import Image from "next/image";
import { generateResumeQrDataUrl } from "@/lib/resume-qr";
import { siteUrl } from "@/lib/site-url";

export async function ResumeQrCode() {
  const dataUrl = await generateResumeQrDataUrl(siteUrl);

  return (
    <div className="resume-qr shrink-0 text-center">
      <Image
        src={dataUrl}
        alt="QR code linking to portfolio website"
        width={88}
        height={88}
        unoptimized
        className="mx-auto border border-black/10"
      />
      <p className="resume-qr-label mt-1 text-[9px] leading-tight text-black/60">
        Portfolio
      </p>
    </div>
  );
}
