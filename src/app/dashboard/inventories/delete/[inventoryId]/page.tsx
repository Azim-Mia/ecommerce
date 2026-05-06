'use client'

import { useRouter } from 'next/navigation'

export default function DeleteInventoryPage() {
  const router = useRouter()

  // 🔥 static inventory
  const inventoryId = '1'
  const name = 'Product 1'

  const handleDelete = async () => {
    await fetch(`/api/inventories/${inventoryId}`, {
      method: 'DELETE',
    })

    router.push('/dashboard/inventories')
  }

  return (
    <div>
      <h1>Delete Inventory</h1>

      <p>ID: {inventoryId}</p>
      <p>Name: {name}</p>

      <button onClick={handleDelete}>
        Confirm Delete
      </button>
    </div>
  )
}