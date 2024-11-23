import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vkSansRegular = localFont({
  src: "./fonts/VKSansDisplay-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "200",
});

const vkSansMedium = localFont({
  src: "./fonts/VKSansDisplay-Medium.ttf",
  variable: "--font-geist-sans",
  weight: "400",
});

const vkSansDemiBold = localFont({
  src: "./fonts/VKSansDisplay-DemiBold.ttf",
  variable: "--font-geist-sans",
  weight: "500",
});

const vkSansBold = localFont({
  src: "./fonts/VKSansDisplay-Bold.ttf",
  variable: "--font-geist-sans",
  weight: "700",
});

export const metadata: Metadata = {
  title: "TravelEase",
  description: "Приложение для поиска туров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${vkSansRegular.variable} ${vkSansMedium.variable} ${vkSansDemiBold.variable} ${vkSansBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
