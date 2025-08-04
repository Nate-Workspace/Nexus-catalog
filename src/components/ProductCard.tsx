import type { Product } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={product.thumbnail || "/placeholder.svg?height=192&width=256&text=Product Image"}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-semibold line-clamp-2 mb-2">{product.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-3 mb-3">{product.description}</CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-green-600 font-medium">{product.discountPercentage.toFixed(0)}% off</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
