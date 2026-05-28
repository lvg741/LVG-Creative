import './globals.css';

export const metadata = {
  title: 'LVG Creative | Video Production, Editing & Social Media Content',
  description: 'LVG Creative creates professional video production, video editing, and social media content for ambitious brands.',
  metadataBase: new URL('https://www.lvgcreative.co.uk'),
  openGraph: {
    title: 'LVG Creative',
    description: 'Video production, video editing, and social media content.',
    url: 'https://www.lvgcreative.co.uk',
    siteName: 'LVG Creative',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
