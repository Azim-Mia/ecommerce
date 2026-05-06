'use client'

import { useRouter, useParams } from 'next/navigation'

export default function DeleteInventoryPage() {
  const router = useRouter()
  const params = useParams()

  const inventoryId = params.inventoryId as string

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

      <button onClick={handleDelete}>
        Confirm Delete
      </button>
    </div>
  )
}