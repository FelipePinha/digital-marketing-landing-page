import Image from "next/image";

interface UserTestimonialProps {
    src: string
    alt: string
    name: string
    text: string
}

export function UserTestimonial({ src, alt, name, text }: UserTestimonialProps) {
    return (
        <div className="flex items-start gap-5">
            <Image 
                src={src}
                alt={alt}
                width={46}
                height={46}
            />

            <div className="space-y-2">
                <h3 className="font-semibold">{name}</h3>

                <p className="text-sm/6">{text}</p>
            </div>
        </div>
    )
}