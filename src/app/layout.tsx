import "./globals.css";
import { inter } from "@/lib/fonts";
import MainNav from "./ui/MainNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} text-white`}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
