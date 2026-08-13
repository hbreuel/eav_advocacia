import path from "node:path";
import type { NextConfig } from "next";

const projectRoot = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  // A pasta foi duplicada ao lado de "site advogado" e de vários outros
  // projetos em C:\Code. Sem isso, o Next/Turbopack assume C:\Code como
  // raiz do workspace, observa todos os node_modules vizinhos e dispara
  // dezenas de processos Node até o PC travar.
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
