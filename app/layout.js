import { Outfit, Big_Shoulders_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const shoulders = Big_Shoulders_Display({
  subsets: ['latin'],
  variable: '--font-shoulders',
});

export const metadata = {
  title: 'Modern Art Gallery',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${outfit.variable} ${shoulders.variable}`}>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
