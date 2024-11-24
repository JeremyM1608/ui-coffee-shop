import SelectedProduct from '@/sections/poducts/selected-product'

export default async function page({params}) {
  const {productId} = await params;

  return (
    <div>
        <SelectedProduct productId={productId}/>
    </div>
  )
}
