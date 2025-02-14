import Image from "next/image"

interface UserProps {
    name: string
    text: string
    src: string
}

export function User({name, text, src}: UserProps) {
    return(
        <div className="space-y-5">
            <div className="flex items-center gap-5">
                <Image 
                    src={src}
                    alt="user"
                    width={50.56}
                    height={45}
                    quality={100}
                />

                <h3>{name}</h3>
            </div>
            <p className="text-charcoal text-base/relaxed text-justify">{text}</p>
        </div>
    )
}