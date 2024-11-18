import { minhaFonte } from "@/app/font/font";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";
import "./styles/globals.css";


export const metadata: Metadata = {
  description: 'The official Next.js Learn Dashboard built with App Router.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${minhaFonte.className} antialiased overflow-x-hidden`}>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
