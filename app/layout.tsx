import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import "@/globals.css";

export const metadata: Metadata = {
  title: "CompraViva",
  description: "Generated by Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-row w-full font-body h-full text-white justify-center items-center">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
