import Image from "next/image";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  preload?: boolean;
  wordmark?: boolean;
};

export function Logo({
  className = "",
  inverted = false,
  preload = false,
  wordmark = false,
}: LogoProps) {
  if (wordmark) {
    return (
      <span className={`inline-flex shrink-0 items-center gap-2.5 overflow-visible sm:gap-3 ${className}`}>
        <Image
          src="/images/logo-eav-mark.png"
          alt=""
          width={928}
          height={680}
          preload={preload}
          sizes="112px"
          className={`h-10 w-auto max-w-none object-contain sm:h-12 lg:h-14 ${
            inverted ? "" : "drop-shadow-[0_1px_1px_rgba(15,61,74,0.18)]"
          }`}
        />
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-[1.3rem] font-semibold tracking-tight sm:text-[1.55rem] ${
              inverted ? "text-primary-foreground" : "text-petroleum"
            }`}
          >
            EAV
          </span>
          <span
            className={`mt-1.5 font-sans text-[9px] font-semibold tracking-[0.28em] uppercase sm:text-[10px] ${
              inverted ? "text-gold" : "text-gold-deep"
            }`}
          >
            Advocacia
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex shrink-0 items-center overflow-visible ${className}`}>
      <Image
        src="/images/logo-eav.png"
        alt={site.name}
        width={1198}
        height={849}
        preload={preload}
        sizes="180px"
        className={`h-12 w-auto max-w-none object-contain sm:h-16 lg:h-[4.5rem] ${
          inverted ? "" : "drop-shadow-[0_1px_1px_rgba(15,61,74,0.18)]"
        }`}
      />
    </span>
  );
}
