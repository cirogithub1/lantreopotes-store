import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
	{
		className,
		children,
		disabled,
		type = "button",
		...props
	}, 
	ref	) => {
		return (  
			<button
				className={cn('w-auto rounded-full bg-black border-transparent px-4 py-2 disabled:cursor-not-allowed desabled:opacity-50 text-white font-semibold hover:opacity-75 transition', className)}
				disabled={disabled}
			 	ref={ref}
				{...props}
			>
				{children}
			</button>
		)
	}
)
 
Button.displayName = "Button"

export default Button