import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Optimize Electrical",
  description:
    "Your local electrician on the Sunshine Coast, Beerwah 4519, Caloundra 4551, Nambour 4560, electrician near me",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
