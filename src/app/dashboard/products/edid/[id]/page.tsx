type Product = {
  id: string
  name: string
}

async function getProducts(): Promise<Product[]> {
  // fake data (API later replace করবে)
  return [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
  ]
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1>products</h1>

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - 
            <a href={`/dashboard/products/edid/${item.id}`}>
              Edid
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}