

export default function ProductCard(product) {
  return (
    <div className="w-full">
      <div className="product-card-image">
        <img className="object-fit w-full h-full" src={product.product.image} />
      </div>
      <div className="name text-center pt-5">{product.product.name}</div>
      {product.specs && (
        <p className="specs">{product.product.specs}</p>
      )}
      <div className="price text-center">${product.product.price.toFixed(2)} MXN</div>
    </div>
  )
}