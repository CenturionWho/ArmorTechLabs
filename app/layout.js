import './globals.css';

export const metadata = {
  title: 'ArmorTech Labs | Precision Microsoldering, Mail-In Board Repair & HDMI Repair',
  description:
    'ArmorTech Labs provides precision microsoldering, mail-in board repair, console HDMI repair, motherboard repair, automotive electronics repair, industrial board diagnostics, and specialty electronics recovery.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}