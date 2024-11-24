import EditProduct from '@/sections/poducts/edit-product'

export default async function page({params}) {
  const {productId} = await params;
  return (
    <div>
        <EditProduct productId={productId} />
    </div>
  )
}