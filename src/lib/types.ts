export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface ProductState {
  allProducts: Product[]
  filteredProducts: Product[]
  displayedProducts: Product[]
  categories: string[]
  selectedCategory: string | "all"
  sortBy: "price-asc" | "price-desc" | "none"
  currentPage: number
  itemsPerPage: number
  totalProducts: number
  loading: boolean
  error: string | null
}
