import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gusnaldi Kristiadi Syah | Portofolio",
  description: "Portofolio Gusnaldi Kristiadi Syah - Pustakawan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${syne.variable} antialiased bg-background`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="bg-transparent pt-12 md:pt-0">
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
