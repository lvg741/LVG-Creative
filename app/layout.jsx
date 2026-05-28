import './globals.css';

export const metadata = {
  title: 'LVG Creative | Video Production, Editing & Social Media Content',
  description: 'LVG Creative creates video production, video editing and social media content for ambitious brands.',
  metadataBase: new URL('https://www.lvgcreative.co.uk'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
