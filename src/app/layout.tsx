"use client";

import "./globals.css";

import { Toaster } from "sonner";
import { ProgressProvider } from "@bprogress/next/app";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ProgressProvider
          color="#000"
          options={{ showSpinner: false }}
          shallowRouting
        >
          <main>{children}</main>
          <Toaster richColors />
        </ProgressProvider>
      </body>
    </html>
  );
}
