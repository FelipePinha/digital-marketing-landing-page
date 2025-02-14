import { FiChevronRight } from "react-icons/fi";

interface FooterItemProps {
    text: string
}

export function FooterItem({text}: FooterItemProps) {
    return (
        <p className="flex items-center gap-1 text-suvaGrey">
            <FiChevronRight />
            {text}
        </p>
    )
}