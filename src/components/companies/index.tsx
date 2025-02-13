import Image from "next/image";
import { Container } from "../container";

const companiesList = [
    { image: '/ob.svg', alt: 'ob' },
    { image: '/loveclip.svg', alt: 'loveclip' },
    { image: '/sushi.svg', alt: 'sushi' },
    { image: '/paint.svg', alt: 'paint' },
    { image: '/person.svg', alt: 'person' },
    { image: '/tyme.svg', alt: 'tyme' },
    { image: '/m.svg', alt: 'm' },
]

export function Companies() {
    return (
        <section>
            <Container>
                <div className="py-[103px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7">
                    {
                        companiesList.map((company, index) => (
                            <Image 
                                key={index}
                                src={company.image}
                                alt={company.alt}
                                width={255}
                                height={94}
                                quality={100}
                            />
                        ))
                    }
                </div>

                <hr className="border-gainsboro my-5"/>
            </Container>
        </section>
    )
}