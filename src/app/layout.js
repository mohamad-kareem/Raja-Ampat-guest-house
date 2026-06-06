import "./globals.css";

export const metadata = {
  title: "Raja Ampat Sandy Guest House | Paradise in West Papua",
  description:
    "Experience the world's most biodiverse marine paradise at Raja Ampat Sandy Guest House. Boutique accommodation in Saonek, West Papua, Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
