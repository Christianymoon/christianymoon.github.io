

export default function ProductCard(product) {
  return (
    <div className="w-full">
      <div className="product-card-image">
        <img className="object-fit w-full h-full rounded-lg" src={product.product.image} />
      </div>
      <div className="name pt-5">{product.product.name}</div>
      {product.product.status && (
        product.product.status == "Stock" ? <div className="status text-green-500">
          {product.product.status}
        </div> : <div className="status text-red-500">
          {product.product.status}
        </div>
        
      )}
      {product.product.specs && (
        <p className="specs text-sm">{product.product.specs}</p>
      )}
      <div className="price font-bold text-green-500">$ {product.product.price.toFixed(2)} MXN</div>
    </div>
  )
}