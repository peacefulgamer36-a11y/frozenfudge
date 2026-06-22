import "./globals.css";

export const metadata = {
  title: "Netflix",
  description: "Love Story Netflix OTT platform clone",
  manifest: "/manifest.webmanifest",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

