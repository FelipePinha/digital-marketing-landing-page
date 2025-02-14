import { Companies } from "@/components/companies";
import { Header } from "@/components/header";
import { SectionHero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <Companies />
      <Testimonials />
    </>
  )
}