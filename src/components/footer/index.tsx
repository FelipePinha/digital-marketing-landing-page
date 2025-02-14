import Image from "next/image";
import { Container } from "../container";
import { FooterItem } from "./footer-item";

export function Footer() {
    return (
        <footer className="pt-16 lg:pt-32">
            <Container>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div>
                        <Image 
                            src='/logo.svg'
                            alt="logo"
                            width={160}
                            height={50}
                        />

                        <h2 className="font-semibold text-lg mt-7 mb-3">Eleanor Pena</h2>

                        <p className="text-charcoal w-full lg:w-64">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-32 gap-y-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-5">ABOUT US</h3>

                            <div className="space-y-4">
                                <FooterItem text="Mission & Vision" />
                                <FooterItem text="Our comapny" />
                                <FooterItem text="Our projects" />
                                <FooterItem text="Our Team" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-5">Discover</h3>

                            <div className="space-y-4">
                                <FooterItem text="Projects & Research" />
                                <FooterItem text="Clents Review" />
                                <FooterItem text="Our projects" />
                                <FooterItem text="Our Team" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-5">Useful Links</h3>

                            <div className="space-y-4">
                                <FooterItem text="Contact us" />
                                <FooterItem text="Terms & Conditions" />
                                <FooterItem text="Review" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="bg-lagoon flex justify-center items-center pt-14 pb-10 mt-[90px]">
                <p className="text-white font-semibold">copyright, All Rights Resreved</p>
            </div>
        </footer>
    )
}