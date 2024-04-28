export const metadata = {
  title: "حــــديــــد || الصفحة الرئيسية",
  description:
    "صياغة المستقبل من خلال إنتاج الصلب الصديق للبيئة، حديد من سابك تقود النمو الصناعي في الخليج بالابتكار والمسؤولية",
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1
  },
  openGraph: {
    title: "حــــديــــد || الصفحة الرئيسية",
    siteName: "حــــديــــد || الصفحة الرئيسية",
    description:
      "صياغة المستقبل من خلال إنتاج الصلب الصديق للبيئة، حديد من سابك تقود النمو الصناعي في الخليج بالابتكار والمسؤولية"
  },
  twitter: {
    title: "حــــديــــد || الصفحة الرئيسية",
    siteName: "حــــديــــد || الصفحة الرئيسية",
    description:
      "صياغة المستقبل من خلال إنتاج الصلب الصديق للبيئة، حديد من سابك تقود النمو الصناعي في الخليج بالابتكار والمسؤولية"
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
    <html lang="ar" className="rtl" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
