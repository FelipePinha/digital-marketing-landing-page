import { Companies } from "@/components/companies";
import { SectionHero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <SectionHero />
      <Companies />
      <Testimonials />
      <Services />
    </>
  )
}