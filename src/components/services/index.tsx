import Image from "next/image";
import { Container } from "../container";
import { Badge } from "../hero/badge";
import { User } from "./user";

export function Services() {
    return (
        <section className="py-12 lg:py-24 bg-cyan">
            <Container>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex flex-col gap-9 w-full lg:w-1/2">
                        <div className="space-y-5">
                            <Badge text="Top Leading Company" theme="light" />
                            <h2 className="font-semibold text-3xl">Fresh Ideas for your business design, Top digital marketing service company</h2>
                            <p className="text-base/normal text-charcoal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <User 
                                name="Guy Hawkins" 
                                src="/guy.svg" 
                                text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation." 
                            />

                            <User 
                                name="Darlene Robertson" 
                                src="/darlene.svg" 
                                text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation." 
                            />
                        </div>
                    </div>

                    <div className="relative w-full lg:w-1/3">
                        <Image 
                            src='/workspace.png'
                            alt="workspace"
                            width={350}
                            height={428}
                            quality={100}
                            className="mx-auto w-full"
                        />

                        <Image 
                            src='/girl.png'
                            alt="girl image"
                            width={160}
                            height={207}
                            quality={100}
                            className="hidden lg:block absolute -bottom-12 -right-10"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}