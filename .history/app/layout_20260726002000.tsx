import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iron Daisy Agri Portal",
  description: "Regional agricultural command and telemetry portal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#05070a', color: '#ffffff' }}>
        {children}
      </body>
    </html>
  );
}