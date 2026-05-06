'use client'

import { useRouter } from 'next/navigation'

export default function DeleteInventoryPage({ params }: { params: { inventoryId: string } }) {
  const router = useRouter()

  const handleDelete = async () => {
    await fetch(`/api/inventories/${params.inventoryId}`, {
      method: 'DELETE'
    })

    router.push('/dashboard/inventories')
  }

  return (
    <div>
      <h1>Delete Inventory {params.inventoryId}</h1>
      <button onClick={handleDelete}>Confirm Delete</button>
    </div>
  )
}