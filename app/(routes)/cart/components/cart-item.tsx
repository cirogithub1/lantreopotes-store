import { FC } from "react"

import { Product } from "@/types"
import Image from "next/image"
import IconButton from "@/components/ui/icon-button"
import { X } from "lucide-react"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"

interface Props {
	data: Product
}

const CartItem: FC<Props> = ({ data }) => {
	const cart = useCart()

	const removeItem = () => {
		cart.removeItem(data.id)
	}

	return (  
		<li className="flex py-6 border-b">
			<div className="relative h=24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
				<Image 
					className="object-cover object-center"
					src={data.images[0].url}
					alt="image"
					fill
					sizes="100%"
				/> </div>

			<div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
				<div className="absolute z-10 right-0 top-0">
					<IconButton 
						icon={<X size={15} />} 
						onClick={removeItem} />
				</div>

				<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
					<div className="flex justify-between">
						<p className="text-lg font-semibold text-black">
							{data.name} </p>
					</div>

					<div className="flex text-sm mt-1">
						<p className="text-gray-500">{data.color.name}</p>
						<p className="text-gray-500 ml-4 border-l border-r-gray-400 pl-4">
								{data.size.name}
						</p>
					</div>

					<Currency value={data.price} />
				</div>
			</div>
		</li>
	)
}
 
export default CartItem