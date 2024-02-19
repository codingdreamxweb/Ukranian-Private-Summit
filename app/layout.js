import "./globals.css";
import './styles/style.scss';
import Header from "./components/Header";
import localFont from 'next/font/local';

const myFont = localFont({src: '../public/mon.ttf'});

export const metadata = {
  title: "Ukrainian Private Equity & Venture Capital Summit",
  description: "Ukrainian Private Equity & Venture Capital Summit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={myFont.className}>
        {/* <main> */}
        {children}
        </main>
      </body>
    </html>
  );
}
