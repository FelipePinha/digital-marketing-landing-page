import clsx from "clsx"
import { FiChevronDown } from "react-icons/fi"

interface NavItemProps {
    isActive?: boolean
    isDropdown?: boolean
    text: string
}

export function NavItem({ isActive, isDropdown, text }: NavItemProps) {
    return (
        <a href="#" className={clsx("text-sm font-semibold hover:opacity-70 transition-opacity", {
            'text-lagoon': isActive,
            'text-black': !isActive,
            'flex items-center gap-1': isDropdown
        })}>
            {text}
            {isDropdown && <FiChevronDown />}
        </a>
    )
}