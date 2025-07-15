import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";




const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Arunchal-web",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
