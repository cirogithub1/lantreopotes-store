import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0

const billboardId = process.env.PUBLIC_BILLBOARD_ID

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true })
  // console.log('products: ', products)
  const billboard = await getBillboard(String(billboardId))
  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard}/>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default Homepage