type LatticeBackgroundProps = {
  id: string;
};

export function LatticeBackground({ id }: LatticeBackgroundProps) {
  const lattice = `${id}-lattice`;
  const latticeLg = `${id}-lattice-lg`;

  return (
    <>
      <div
        aria-hidden
        className="hero-pattern pointer-events-none absolute inset-0 text-gold"
      >
        <svg className="size-full" aria-hidden>
          <defs>
            <pattern
              id={lattice}
              width="88"
              height="88"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M44 0L88 44L44 88L0 44Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <path
                d="M44 22L66 44L44 66L22 44Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                opacity="0.38"
              />
              <path
                d="M44 41.15 46.85 44 44 46.85 41.15 44Z"
                fill="currentColor"
              />
              <circle cx="44" cy="0" r="1.15" fill="currentColor" />
              <circle cx="88" cy="44" r="1.15" fill="currentColor" />
              <circle cx="44" cy="88" r="1.15" fill="currentColor" />
              <circle cx="0" cy="44" r="1.15" fill="currentColor" />
            </pattern>
            <pattern
              id={latticeLg}
              width="176"
              height="176"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M88 0L176 88L88 176L0 88Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.55"
                opacity="0.32"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${latticeLg})`} />
          <rect width="100%" height="100%" fill={`url(#${lattice})`} />
        </svg>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-[radial-gradient(ellipse_at_72%_40%,rgba(201,164,72,0.22),transparent_64%)]"
      />
    </>
  );
}
