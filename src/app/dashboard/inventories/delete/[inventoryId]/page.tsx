type Inventory = {
  id: string
  name: string
}

async function getInventories(): Promise<Inventory[]> {
  // fake data (API later replace করবে)
  return [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
  ]
}

export default async function InventoriesPage() {
  const inventories = await getInventories()

  return (
    <div>
      <h1>Inventories</h1>

      <ul>
        {inventories.map((item) => (
          <li key={item.id}>
            {item.name} - 
            <a href={`/dashboard/inventories/delete/${item.id}`}>
              Delete
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}