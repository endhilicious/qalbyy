import React from 'react'
import AlquranDetailScreen from '#/screens/AlquranDetail'

interface PageProps {
  params: Promise<{ id: string }>
}

const page = async ({ params }: PageProps) => {
  const { id } = await params
  const suratId = parseInt(id, 10)
  
  return (
    <AlquranDetailScreen suratId={suratId} />
  )
}

export default page
