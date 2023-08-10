import { FC, ReactNode } from "react";

interface Props {
	children: ReactNode
}
const Container: FC<Props> = ({ children }) => {
	return (  
		<div className="mx-auto max-w-7xl">
			{children}
		</div>
	);
}
 
export default Container