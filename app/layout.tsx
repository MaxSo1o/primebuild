import type { Metadata } from "next";
import "../pages/index/index.scss";

export const metadata: Metadata = {
  title: "Prime Строй - Строим все",
  description: "Строительная компания",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
