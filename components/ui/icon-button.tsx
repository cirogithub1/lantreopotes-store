import { cn } from "@/lib/utils";
import { FC, MouseEventHandler, ReactElement } from "react";

interface Props {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined
	icon: ReactElement
	className?: string
}

const IconButton: FC<Props> = ({ onClick, icon, className }) => {
	return (  
		<button
			onClick={onClick}
			className={cn(
				"flex items-center justify-center rounded-full bg-white border shadow-md p-2 hover:scale-110 transition-none",
				className
			)}
		>
			{icon}
		</button>
	)
}
 
export default IconButton