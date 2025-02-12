import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export function Container({children}: ContainerProps) {
    return (
        <div className="w-full max-w-[1253px] mx-auto px-2">
            {children}
        </div>
    )
}