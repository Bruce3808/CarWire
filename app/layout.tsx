import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarWire",
  description: "CarWire.ai platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
