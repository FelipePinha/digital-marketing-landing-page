import Image from "next/image";
import { Container } from "../container";
import { NavItem } from "./nav-item";
import { FiArrowRight } from 'react-icons/fi'

export function Header() {
    return (
        <header className="py-7">
            <Container>
                <div className="w-full flex items-center justify-between">
                    <Image 
                        src='/logo.svg'
                        alt="company logo"
                        width={160}
                        height={50}
                        quality={100}
                    />

                    <nav className="hidden xl:flex items-center space-x-9">
                        <NavItem isActive text="Home"/>
                        <NavItem isDropdown text="About"/>
                        <NavItem isDropdown text="Company"/>
                        <NavItem isDropdown text="Pages"/>
                        <NavItem isDropdown text="Blog"/>
                        <NavItem isDropdown text="Shop"/>
                    </nav>

                    <a href="#" className="hidden xl:flex items-center gap-1 bg-onahau hover:opacity-80 rounded-md py-2 px-5 font-semibold transition-colors">
                        Get Started
                        <FiArrowRight size={12} />
                    </a>

                    <button>
                        <Image 
                            src='/hamburger.png'
                            alt="menu hamburger"
                            width={34}
                            height={34}
                            quality={100}
                        />
                    </button>
                </div>
            </Container>
        </header>
    )
}