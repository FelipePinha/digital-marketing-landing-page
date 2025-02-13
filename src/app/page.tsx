import { Companies } from "@/components/companies";
import { Header } from "@/components/header";
import { SectionHero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <Companies />
    </>
  )
}