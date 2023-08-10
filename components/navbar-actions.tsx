"use client"

import { Trash } from "lucide-react"
import Button from "@/components/ui/button"

const NavbarActions = () => {
	return (  
		<div className="flex ml-auto items-center gap-x-4">
			<Button className="flex items-center rounded-full bg-black px-4 py-2">
				<Trash className="w-5 h-5"
					
				/>
			</Button>
		</div>
	)
}
 
export default NavbarActions