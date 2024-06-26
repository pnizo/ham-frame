import { Inter } from "next/font/google";
import "./globals.css";

import { Metadata } from 'next'
import { getFrameMetadata } from '@coinbase/onchainkit/frame';

const inter = Inter({ subsets: ["latin"] });

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Install",
      action: "link",
      target: "https://warpcast.com/~/add-cast-action?url=https%3A%2F%2Flikeroot-git-main-pnizos-projects.vercel.app%2Fapi%2Fham",
    },
  ],
  image: {
    src: `https://pnizo-ham-frame.vercel.app/ham_cover.png`,
    aspectRatio: "1.91:1",
  },
  postUrl: `https://warpcast.com/~/add-cast-action?url=https%3A%2F%2Flikeroot-git-main-pnizos-projects.vercel.app%2Fapi%2Fham`,
});


//export async function generateMetadata() {
export const metadata: Metadata = {
    title: 'Real-Time $HAM Check Action installer',
    description: 'You can easily check $HAM amount.',
    other: {
      ...frameMetadata,
    }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
