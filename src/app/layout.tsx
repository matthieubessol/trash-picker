import "../App.css";
import "../index.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
