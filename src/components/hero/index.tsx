import { FiArrowRight } from "react-icons/fi";
import { Container } from "../container";
import { Badge } from "./badge";
import Image from "next/image";

export function SectionHero() {
    return (
        <section className="bg-onahau pt-10 lg:pt-20">
            <Container>
                <div className="flex flex-col xl:flex-row items-center gap-[90px]">
                    <div className="w-full xl:max-w-[656px] text-center xl:text-start">
                        <Badge text="Digital Marketing Agency" theme="dark"/>
                        <h1 className="font-semibold text-4xl lg:text-5xl mt-6 mb-4">Advanced analytics to grow your business</h1>
                        <p className="text-charcoal text-sm lg:text-base mb-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className="w-full flex flex-col md:flex-row items-center justify-center xl:justify-start gap-5 lg:gap-[71px] mb-8 lg:mb-0 xl:mb-20">
                            <a href="#" className="bg-zinc-950 text-white text-sm py-5 px-8 rounded-xl flex items-center justify-center gap-1 hover:bg-zinc-700 transition-colors w-full md:w-auto">
                                Get Started
                                <FiArrowRight />
                            </a>
                            <a href="#" className="w-full md:w-auto border border-lagoon text-sm py-5 px-8 rounded-xl flex justify-center items-center gap-1 hover:bg-lagoon hover:text-white transition-colors">
                                How it works
                                <FiArrowRight />
                            </a>
                        </div>
                    </div>
                    <div className="relative border-2 border-lagoon rounded-[37px] w-[315px] h-[394px] mb-10 hidden lg:block">
                        <Image 
                            src='/hero.png'
                            alt="people working"
                            width={339}
                            height={398}
                            quality={100}
                            className="absolute -top-5 -right-10"
                        />

                        <div className="bg-white w-[184px] h-48 rounded-xl overflow-hidden flex items-end absolute bottom-5 -left-8">
                            <Image 
                                src='/wave.png'
                                alt="wave"
                                width={184}
                                height={127}
                                quality={100}
                                className="max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}