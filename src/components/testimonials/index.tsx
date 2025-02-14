import Image from "next/image";
import { Container } from "../container";
import { Badge } from "../hero/badge";
import { testimonialsList, users } from '@/utils/data'
import { UserTestimonial } from "./user-testimonial";

export function Testimonials() {
    return (
        <section className="py-12 lg:py-24">
            <Container>
                <div className="flex flex-col lg:flex-row items-start gap-x-32 gap-y-16">
                    <div className="relative mx-auto lg:mx-0">
                        <Image 
                            src='/business.png'
                            alt="business image"
                            width={540}
                            height={542}
                            quality={100}
                        />

                        <Image 
                            src='/data.png'
                            alt="data image"
                            width={190}
                            height={245}
                            quality={100}
                            className="hidden lg:block absolute rounded-md -right-20 -bottom-14"
                        />
                    </div>

                    <div className="space-y-12 w-full lg:w-[447px]">
                        <div className="space-y-5">
                            <Badge text="Digital Marketing Agency" theme="light"/>
                            <h2 className="font-semibold text-3xl ">Fresh Ideas for your business design.</h2>
                            <p className="text-base/loose text-charcoal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>

                        <div className="space-y-9">
                            {
                                users.map((user, index) => (
                                    <UserTestimonial 
                                        key={index}
                                        name={user.name}
                                        text={user.text}
                                        src={user.src}
                                        alt={user.alt}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                <div className="py-24">
                    <h3 className="font-semibold text-3xl text-center">Fresh Ideas for your business design.</h3>
                    <p className="text-center text-charcoal text-base/normal w-full lg:w-[637px] mx-auto mt-2 mb-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            testimonialsList.map((testimonial, index) => (
                                <UserTestimonial 
                                        key={index}
                                        name={testimonial.name}
                                        text={testimonial.text}
                                        src={testimonial.src}
                                        alt={testimonial.alt}
                                    />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}