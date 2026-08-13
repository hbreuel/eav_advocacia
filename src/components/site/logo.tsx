import Image from "next/image";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  preload?: boolean;
};

export function Logo({
  className = "",
  inverted = false,
  preload = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo-eav.png"
        alt={site.name}
        width={1150}
        height={801}
        preload={preload}
        sizes="160px"
        className={`h-14 w-auto sm:h-16 ${
          inverted ? "" : "drop-shadow-[0_1px_1px_rgba(15,61,74,0.18)]"
        }`}
      />
    </span>
  );
}
