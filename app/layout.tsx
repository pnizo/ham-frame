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
      target: "https://warpcast.com/~/add-cast-action?url=https%3A%2F%2Flikeroot-git-main-pnizos-projects.vercel.app%2Fapi%2Fallowance",
    },
  ],
  image: {
    src: `https://frame-git-main-pnizos-projects.vercel.app/image.png`,
    aspectRatio: "1.91:1",
  },
  postUrl: `https://warpcast.com/~/add-cast-action?url=https%3A%2F%2Flikeroot-git-main-pnizos-projects.vercel.app%2Fapi%2Fallowance`,
});


//export async function generateMetadata() {
export const metadata: Metadata = {
    title: 'RT Degen Check Action installer',
    description: 'You can easily check $DEGEN amount. Just a simple wrapper of @edit \'s useful API.',
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
