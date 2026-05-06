'use client'

import { useRouter } from 'next/navigation'

export default function DeleteInventoryPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  const handleDelete = async () => {
    await fetch(`/api/inventories/${params.id}`, {
      method: 'DELETE'
    })

    router.push('/dashboard/inventories')
  }

  return (
    <div>
      <h1>Delete Inventory {params.id}</h1>
      <button onClick={handleDelete}>Confirm Delete</button>
    </div>
  )
}