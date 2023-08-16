import { FC } from "react"

import { Product } from "@/types"
import Noresults from "@/components/ui/no-results"
import ProductCard from "@/components/ui/product-card"

interface Props {
	title: string
	items: Product[]
}

const ProductList: FC<Props> = ({ title, items }) => {
	return (  
		<div className="space-y-4">
			<h3 className="text-3xl font-bold">{title}</h3>

			{items.length === 0 && <Noresults />}

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{items.map((item) => (
					<div key={item.id}>
						<ProductCard key={item.id} data={item}/>
					</div>
				))}
			</div>
		</div>
	)
}
 
export default ProductList