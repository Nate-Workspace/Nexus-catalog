"use client"

import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { setCategoryFilter, setSortBy } from "@/store/products-slice"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function ProductFilters() {
  const dispatch = useAppDispatch()
  const { categories, selectedCategory, sortBy } = useAppSelector((state) => state.products)

  const handleCategoryChange = (value: string) => {
    dispatch(setCategoryFilter(value))
  }

  const handleSortChange = (value: "price-asc" | "price-desc" | "none") => {
    dispatch(setSortBy(value))
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full p-4 border-b bg-background top-0 z-10">
      <div className="flex-1">
        <Label htmlFor="category-filter" className="sr-only">
          Filter by Category
        </Label>
        <Select value={selectedCategory} onValueChange={handleCategoryChange}>
          <SelectTrigger id="category-filter" className="w-full sm:max-w-[200px]">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="justify-end">
        <Label htmlFor="sort-by" className="sr-only">
          Sort by Price
        </Label>
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger id="sort-by" className="w-full sm:max-w-[200px]">
            <SelectValue placeholder="Sort by Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Sort</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
