import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "სასტუმრო ლილიანა — თქვენი სახლი ზღვასთან",
  description: "საოჯახო სასტუმრო ქობულეთში. 14 ოთახი, 60 საწოლი, WiFi, პარკინგი, კონდიციონერი, TV, მაცივარი. ზღვამდე 5 წუთი სავალზე.",
  keywords: "სასტუმრო ქობულეთში, guest house kobuleti, საოჯახო სასტუმრო, ქობულეთი, აჭარა",
  openGraph: {
    title: "სასტუმრო ლილიანა — თქვენი სახლი ზღვასთან",
    description: "საოჯახო სასტუმრო ქობულეთში. 14 ოთახი, 60 საწოლი.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased font-georgian">
        {children}
      </body>
    </html>
  );
}
