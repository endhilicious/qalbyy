import React from 'react'
import DoaDetailScreen from '#/screens/DoaDetail'

interface PageProps {
  params: Promise<{ id: string }>
}

// Generate static params for doa pages
export async function generateStaticParams() {
  // Since we don't know the exact number of doa items, we'll generate a reasonable range
  // The API has 227 doa items based on the reference data
  const paths = Array.from({ length: 227 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
  
  return paths;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params
  const doaId = parseInt(id, 10)
  
  return (
    <DoaDetailScreen doaId={doaId} />
  )
}

export default page
