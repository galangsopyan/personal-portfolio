import type { Metadata, Viewport } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Galang Sopyan — Portfolio",
  description:
    "Personal portfolio of Galang Sopyan — Web Developer & Full Stack Developer.",
};

export const viewport: Viewport = {
  width: 1280,
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
         
            <Navbar />
            {children}
            <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  );
}