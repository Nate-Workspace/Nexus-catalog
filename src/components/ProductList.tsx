"use client"

import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { fetchProducts } from "@/store/products-slice"
import { ProductCard } from "./ProductCard"
import { LoadingSkeleton } from "./LoadingSkeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function ProductList() {
  const dispatch = useAppDispatch()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { displayedProducts, loading, error } = useAppSelector((state:any) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return (
      <div className="p-4">
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (displayedProducts.length === 0) {
    return <div className="p-4 text-center text-gray-500">No products found matching your criteria.</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      displayedProducts.map((product:any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
