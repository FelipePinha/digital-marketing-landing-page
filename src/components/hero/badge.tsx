import clsx from "clsx"

interface BadgeProps {
    theme: 'light' | 'dark',
    text: string
}

export function Badge({ theme, text }: BadgeProps) {
    return <span className={clsx(
        "text-xs md:text-sm py-[10px] px-4 rounded-full", 
        {
            'bg-lagoon text-white': theme === 'dark',
            'bg-onahau text-black': theme === 'light'
        })
    }>
        { text }
    </span>
}