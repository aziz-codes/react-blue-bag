import { useState, useId } from 'react'

interface InputProps {
    label?: string
    id?: string;
    hint?: string
    required?: boolean;
    error?: string
    size?: 'sm' | 'md' | 'lg'
    variant?: 'default' | 'filled' | 'ghost'
    icon?: React.ReactNode
    className?: string;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3.5 text-base',
}

const variantClasses = {
    default:
        'bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:ring-blue-500/20',
    filled:
        'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-blue-500 focus:ring-blue-500/20',
    ghost:
        'bg-transparent border-transparent border-b border-b-zinc-300 rounded-none text-zinc-900 placeholder-zinc-400 focus:border-b-blue-500 focus:ring-0',
}

export function Input({
    label,
    hint,
    error,
    size = 'md',
    variant = 'default',
    icon,
    className = '',
    id: providedId,
    required,
    ...props
}: InputProps) {
    const [focused, setFocused] = useState(false)
    const autoId = useId()
    const id = providedId || autoId

    const hasError = Boolean(error)

    return (
        <div className={`group flex flex-col gap-1.5 ${className}`}>
            {label && (
                <label
                    htmlFor={id}
                    className={[
                        'text-xs font-semibold tracking-wide uppercase transition-colors duration-150',
                        hasError ? 'text-red-500' : focused ? 'text-blue-600' : 'text-zinc-500',
                    ].join(' ')}
                >
                    {label}
                    {required && <span className="ml-1 text-red-400">*</span>}
                </label>
            )}

            <div className="relative flex items-center">
                {icon && (
                    <div
                        className={[
                            'absolute left-3 flex items-center pointer-events-none transition-colors duration-150',
                            hasError ? 'text-red-400' : focused ? 'text-blue-500' : 'text-zinc-400',
                        ].join(' ')}
                    >
                        {icon}
                    </div>
                )}

                <input
                    id={id}
                    onFocus={(e) => { setFocused(true); props.onFocus?.(e) }}
                    onBlur={(e) => { setFocused(false); props.onBlur?.(e) }}
                    className={[
                        'w-full rounded-lg border font-medium transition-all duration-150 outline-none focus:ring-4',
                        'disabled:opacity-50 disabled:cursor-not-allowed',
                        sizeClasses[size],
                        hasError
                            ? 'border-red-400 bg-red-50 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500/20'
                            : variantClasses[variant],
                        icon ? 'pl-10' : '',
                    ].join(' ')}
                    aria-invalid={hasError}
                    aria-describedby={hint || error ? `${id}-description` : undefined}
                    required={required}
                    {...props}
                />
            </div>

            {(hint || error) && (
                <p
                    id={`${id}-description`}
                    className={['text-xs leading-relaxed', hasError ? 'text-red-500' : 'text-zinc-400'].join(' ')}
                >
                    {error || hint}
                </p>
            )}
        </div>
    )
}

export default Input