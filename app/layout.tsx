import type { Metadata } from "next";
import Link from "next/link";
// COMPONENTS
import { NavMenu } from "@/components/nav-menu";
import { 
  BannerDescription, 
  BannerFooter, 
  BannerHeader, 
  BannerTitle, 
  bannerVariants 
} from "@/components/banner";
import { InstagramSVG, FacebookSVG } from "@/components/SVGs";
// UTILS
import { roboto, poppins } from "@/utils/fonts";
import { cn } from "@/utils/helpers";
// STYLES
import '@/styles/global.css';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          "min-h-screen bg-secondary font-roboto antialiased",
          roboto.variable,
          poppins.variable
        
        )}
      >
        <NavMenu />
        {children}
        <footer className={cn(bannerVariants({ variant: "center", size: "quarter", className: "flex-col bg-alternate rounded-t-[25px]" }))}>
          <BannerHeader className="text-center">
            <BannerTitle 
              className="text-xl font-poppins font-bold text-secondary"
            >
              Follow us on social media
            </BannerTitle>
            <BannerDescription className="text-md font-roboto font-bold text-secondary">
              <div className="text-center text-secondary flex justify-center gap-2.5">
                <Link 
                  href="/showcase"
                  className="text-secondary text-lg font-poppins font-bold hover:opacity-80"
                >
                  <InstagramSVG width={24} height={24} fill="#ffffff" />
                </Link>
                <Link 
                  href="/showcase"
                  className="text-secondary text-lg font-poppins font-bold hover:opacity-80"
                >
                  <FacebookSVG width={24} height={24} fill="#ffffff" />
                </Link>
              </div>
              <div className="text-center text-secondary flex justify-center gap-5">
                <Link 
                  href="/showcase"
                  className="text-secondary text-lg font-poppins font-bold hover:opacity-80"
                >
                  Showcase
                </Link>
                <Link 
                  href="/contact"
                  className="text-secondary text-lg font-poppins font-bold hover:opacity-80"
                >
                  Contact
                </Link>
                <Link 
                  href="/privacy-policy"
                  className="text-secondary text-lg font-poppins font-bold hover:opacity-80"
                >
                  Privacy Policy
                </Link>
              </div>
            </BannerDescription>
          </BannerHeader>
          <BannerFooter className="text-secondary flex flex-col">
            <p>Trademark ™ A handy man in newcastle</p>
            <p>Copyright © 2024 ahandymaninnewcastle.co.uk. All rights reserved.</p>
          </BannerFooter>
        </footer>
      </body>
    </html>
  );
}
