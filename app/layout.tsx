// NEXT
import type { Metadata } from "next";
// COMPONENTS
import { CSPostHogProvider } from "./_analytics/provider";
import { ReactQueryProvider } from "./_react-query/provider";
import { Toaster } from "@/components/ui/sonner";
// UTILS
import { roboto, poppins } from "@/utils/fonts";
import { cn } from "@/utils/helpers";
// STYLES
import '@/styles/global.css';

export const metadata: Metadata = {
  title: {
    default: "RefubCity",
    template: "%s - RefubCity",
  },
  description: "We offer home refurbishment services including painting, tiling, gardening, and general building. Contact us for professional home improvements",
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <CSPostHogProvider>
          <body 
            className={cn(
              "min-h-screen bg-background font-roboto antialiased",
              roboto.variable,
              poppins.variable
              
            )}
            >
              <main className="container">
                {children}
              </main>
              <Toaster />
          </body>
        </CSPostHogProvider>
        </ReactQueryProvider>
    </html>
  );
}
