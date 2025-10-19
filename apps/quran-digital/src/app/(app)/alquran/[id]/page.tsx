import React from 'react'
import AlquranDetailScreen from '#/screens/AlquranDetail'

interface PageProps {
  params: Promise<{ id: string }>
}

// Generate static params for all 114 surahs
export async function generateStaticParams() {
  // Generate paths for all 114 surahs
  const paths = Array.from({ length: 114 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
  
  return paths;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params
  const suratId = parseInt(id, 10)
  
  return (
    <AlquranDetailScreen suratId={suratId} />
  )
}

export default page
