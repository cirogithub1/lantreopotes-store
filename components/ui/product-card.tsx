"use client"

import { FC, MouseEventHandler } from "react";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency"
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface Props {
	data: Product
}

const ProductCard: FC<Props> = ({ data }) => {
	const router = useRouter()
	const previewModal = usePreviewModal()
	const cart = useCart()

	const handleClick = () => {
		router.push(`/product/${data?.id}`)
	}

	const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation()
		previewModal.onOpen(data)
	}
	
	const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation()
		cart.addItem(data)
	}

	return (  
		<div 
			className="group bg-gray-100 rounded-xl border p-3 space-y-4 cursor-pointer"
			onClick={handleClick}
		>
			{/* Images & Actions */}
			<div className="relative aspect-square rounded-xl bg-gray-300">
				<Image 
					className="object-cover aspect-square rounded-md"
					src={data?.images?.[0]?.url}
					alt="Image"
					fill
					sizes={"20"}
				/>

				<div className="absolute group-hover:opacity-100 opacity-0 transition w-full px-6 bottom-5">
					<div className="flex justify-center gap-x-6">
						<IconButton 
							icon={<Expand className="h-6 w-6 text-gray-600" />}
							onClick={onPreview}
						/>
						
						<IconButton 
							icon={<ShoppingCart className="h-6 w-6 text-gray-600" />}
							onClick={addToCart}
						/>
					</div>
				</div>
			</div>
			{/* Description */}
			<div>
				<p className="text-lg font-semibold">
					{data.name}
				</p>
				
				<p className="text-sm text-gray-500">
					{data.category?.name}
				</p>
			</div>
			
			{/* Price */}
			<div className="flex items-center justify-between">
				<Currency value={data?.price} /> 
			</div>
		</div>
	)
}
 
export default ProductCard

// http://localhost:3000/api/32b01bf4-7286-407c-9619-f858d626f830/products/8d0e9511-c377-4d1a-b2e6-43b10a1de7ed
// http://localhost:3000/api/32b01bf4-7286-407c-9619-f858d626f830/products/8d0e9511-c377-4d1a-b2e6-43b10a1de7ed

// http://localhost:3000/api/32b01bf4-7286-407c-9619-f858d626f830/products
// http://localhost:3000/api/32b01bf4-7286-407c-9619-f858d626f830/products

// 8d0e9511-c377-4d1a-b2e6-43b10a1de7ed
// 8d0e9511-c377-4d1a-b2e6-43b10a1de7ed