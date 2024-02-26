// NEXT
import Link from "next/link";
// COMPONENTS
import { 
  Banner,
  BannerDescription, 
  BannerFooter, 
  BannerHeader, 
  BannerTitle, 
  bannerVariants
} from "@/components/banner";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// UTILS
import { cn } from "@/utils/helpers";
import { DrillAndWrenchSVG, PaintBrushSVG, TillingSVG } from "@/components/SVGs";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <main className="container p-5">
      <Banner className={cn(bannerVariants({ variant: "center", size: "threeQuarters", className: "flex-col bg-alternate rounded-[25px]" }))}>
        <BannerHeader className="text-center max-w-[350px] sm:max-w-[600px]">
          <BannerTitle 
            className="text-2xl font-poppins font-bold text-secondary"
          >
            We paint, we build, we fix all your problems
          </BannerTitle>
          <BannerDescription className="text-md font-roboto font-bold text-secondary ">Affordable solutions to common problems, with a unique customer experience for everyday households</BannerDescription>
        </BannerHeader>        
        <BannerFooter className="text-center text-secondary gap-5">
          <Link 
            href="/contact"
            className={cn(buttonVariants({ variant: "alternate", size: "lg" }))}
          >
            Get in touch
          </Link>
          <Link 
            href="/contact"
            className={cn(buttonVariants({ variant: "alternateOutlined", size: "lg" }))}
          >
            Our work
          </Link>
        </BannerFooter>
      </Banner>

      <section className={cn(bannerVariants({ variant: "center", size: "half", className: "flex-col items-stretch gap-10" }))}>
        <h2 className="font-font font-poppins text-xl text-primary text-center">Our Expertise</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,300px))] auto-rows-[350px] gap-8 mx-0 my-4 p-4 justify-center">
          <Card className={cn("border-solid border-primary border-[0.3rem]")}>
            <CardHeader>
              <PaintBrushSVG width={48} height={48} fill="black"/>
              <CardTitle className="text-lg text-primary font-bold font-poppins">Painting</CardTitle>
              <CardDescription className="text-primary font-roboto">Our painting services are second to none, we take pride in our work and ensure that our customers are satisfied</CardDescription>
            </ CardHeader>
          </Card>
          <Card className={cn("border-solid border-primary border-[0.3rem]")}>
            <CardHeader>
              <TillingSVG width={48} height={48} fill="black"/>
              <CardTitle className="text-lg text-primary font-bold font-poppins">Tilling</CardTitle>
              <CardDescription className="text-primary font-roboto">Our painting services are second to none, we take pride in our work and ensure that our customers are satisfied</CardDescription>
            </ CardHeader>
          </Card>
          <Card className={cn("border-solid border-primary border-[0.3rem]")}>
            <CardHeader>
              <DrillAndWrenchSVG width={48} height={48} fill="black"/>
              <CardTitle className="text-lg text-primary font-bold font-poppins">Miscelleneous</CardTitle>
              <CardDescription className="text-primary font-roboto">Our painting services are second to none, we take pride in our work and ensure that our customers are satisfied</CardDescription>
            </ CardHeader>
          </Card>
        </div>
      </section>
      
      <section className={cn(bannerVariants({ variant: "center", size: "half", className: "flex-col items-stretch gap-10" }))}>
        <h2 className="font-font font-poppins text-xl text-primary">FAQs</h2>
        <FAQ />
      </section>

    </main>
  );
}
