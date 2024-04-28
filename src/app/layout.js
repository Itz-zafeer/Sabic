import GoogleAnalytics from "./GoogleAnalytics";
import "./globals.css";

export const metadata = {
  //relative path
  // metadataBase: new URL("https://acme.com"),

  title: "Hadeed || Home Page",
  description:
    "Forging the future with eco-conscious steel production, SABIC's Hadid leads with innovation and responsibility in the Gulf's industrial growth",
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1
  },
  openGraph: {
    title: "Hadeed || Home Page",
    siteName: "Hadeed || Home Page",
    description:
      "Forging the future with eco-conscious steel production, SABIC's Hadid leads with innovation and responsibility in the Gulf's industrial growth"
  },
  twitter: {
    title: "Hadeed || Home Page",
    siteName: "Hadeed || Home Page",
    description:
      "Forging the future with eco-conscious steel production, SABIC's Hadid leads with innovation and responsibility in the Gulf's industrial growth"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="ltr">
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        property="og:image"
        content="https://sabic-front.vercel.app/opengraph-image.jpg"
      ></meta>
      <meta
        property="twitter:image"
        content="https://sabic-front.vercel.app/opengraph-image.jpg"
      ></meta>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/images/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
