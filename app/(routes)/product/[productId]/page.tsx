import { FC } from 'react';

import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Gallery from '@/components/gallery/page';
import Info from '@/components/info';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0

interface Props {
  params: {
    productId: string
  }
}

const ProductPage: FC<Props> = async ({ params }) => {
	const product = await getProduct(params.productId)
	// console.log('/app/routes)/product/[productId]/page.tsx product: ', product)

	const suggertedProducts = await getProducts({
		categoryId: product?.category?.id
	})

	return (  
		<div className="bg-white">
			<Container>
				<div className="px-4 py-10 sm:px-6 lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
						<Gallery images={product?.images} />

						<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
							<Info data={product} />
						</div>
					</div>

					<hr className="my-10" />

					<ProductList title="Related Items" items={suggertedProducts} />
				</div>
			</Container>
		</div>
	)
}
 
export default ProductPage