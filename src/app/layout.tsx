import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--inter' });

export const metadata = {
  title: 'John Hodge',
  description: 'Product professional and adtech nerd.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
