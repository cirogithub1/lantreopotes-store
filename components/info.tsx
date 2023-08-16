"use client"

import { FC } from "react"
import { ShoppingCart } from "lucide-react"

import { Product } from "@/types"
import Currency from "@/components/ui/currency"
import Button from "./ui/button"

interface Props {
	data: Product	
}

const Info: FC<Props> = ({ data }) => {
	return (  
		<div>
			<h1 className="text-3xl font-bold text-gray-500">{data.name}</h1>

			<div className="felx mt-3 items-end justify-between">
				<p className="text-xl text-gray-500">
					<Currency value={data.price} />
				</p>
			</div>

			<hr className="my-4" />

			<div className="flex flex-col gap-y-6">
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-black">Size:</h3>

					<div>
						{data?.size?.name}
					</div>
				</div>
				
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-black">Color:</h3>

					<div 
						className="h-6 w-6 rounded-full border border-gray-600"
						style={{ backgroundColor: data?.color?.value }}
					/>
				</div>
			</div>

			<div className="flex mt-10 items-center gap-x-3">
				<Button className="flex items-center gap-x-2">
					Add to Cart

					<ShoppingCart />
				</Button>
			</div>
		</div>
	)
}
 
export default Info 