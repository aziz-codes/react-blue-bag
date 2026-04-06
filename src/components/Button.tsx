export interface ButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

export function Button({ children, onClick, disabled, type }: ButtonProps) {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClick} disabled={disabled} type={type}>
            {children || "Button"}
        </button>
    )
}

export default Button