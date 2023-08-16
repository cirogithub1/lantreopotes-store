"use client"

import { useEffect, useState } from "react"

import { ShoppingBag } from "lucide-react"
import Button from "@/components/ui/button"

import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

const NavbarActions = () => {
	const router = useRouter()
	const cart = useCart()

	// Start Block for preventing rerendering (hydration)
	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		setIsMounted(true)
	}, [])
	if (!isMounted) return null
	// End Block for preventing rerendering (hydration)

	return (  
		<div className="flex ml-auto items-center gap-x-4">
			<Button 
				className="flex items-center rounded-full bg-black px-4 py-2"
				onClick={() => router.push("/cart")}
			>
				<ShoppingBag className="w-5 h-5" />

				<span className="text-sm ml-2 font-medium text-white">
					{cart.items.length}
				</span>
			</Button>
		</div>
	)
}
 
export default NavbarActions