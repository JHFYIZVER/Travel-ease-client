import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/header"), {
  ssr: false,
});

const vkSansRegular = localFont({
  src: "./fonts/VKSansDisplay-Regular.ttf",
  variable: "--font-geist-regular",
  weight: "200",
});

const vkSansMedium = localFont({
  src: "./fonts/VKSansDisplay-Medium.ttf",
  variable: "--font-geist-medium",
  weight: "400",
});

const vkSansDemiBold = localFont({
  src: "./fonts/VKSansDisplay-DemiBold.ttf",
  variable: "--font-geist-semiBold",
  weight: "500",
});

const vkSansBold = localFont({
  src: "./fonts/VKSansDisplay-Bold.ttf",
  variable: "--font-geist-bold",
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
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
