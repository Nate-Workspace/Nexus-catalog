import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import type { Product, ProductState } from "@/lib/types"

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100")
      if (!response.ok) {
        throw new Error("Failed to fetch products")
      }
      const data = await response.json()
      return data.products as Product[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong")
    }
  },
)

const initialState: ProductState = {
  allProducts: [],
  filteredProducts: [],
  displayedProducts: [],
  categories: [],
  selectedCategory: "all",
  sortBy: "none",
  currentPage: 1,
  itemsPerPage: 12, // Display 12 products per page
  totalProducts: 0,
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoryFilter: (state, action: PayloadAction<string | "all">) => {
      state.selectedCategory = action.payload
      state.currentPage = 1 // Reset to first page on filter change
      productsSlice.caseReducers.applyFiltersAndSort(state)
    },
    setSortBy: (state, action: PayloadAction<"price-asc" | "price-desc" | "none">) => {
      state.sortBy = action.payload
      state.currentPage = 1 // Reset to first page on sort change
      productsSlice.caseReducers.applyFiltersAndSort(state)
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
      productsSlice.caseReducers.applyFiltersAndSort(state)
    },
    applyFiltersAndSort: (state) => {
      let tempProducts = [...state.allProducts]

      // Apply category filter
      if (state.selectedCategory !== "all") {
        tempProducts = tempProducts.filter((product) => product.category === state.selectedCategory)
      }
      state.filteredProducts = tempProducts

      // Apply sorting
      if (state.sortBy === "price-asc") {
        tempProducts.sort((a, b) => a.price - b.price)
      } else if (state.sortBy === "price-desc") {
        tempProducts.sort((a, b) => b.price - a.price)
      }

      // Apply pagination
      const startIndex = (state.currentPage - 1) * state.itemsPerPage
      const endIndex = startIndex + state.itemsPerPage
      state.displayedProducts = tempProducts.slice(startIndex, endIndex)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.allProducts = action.payload
        state.totalProducts = action.payload.length

        // Extract unique categories
        const uniqueCategories = Array.from(new Set(action.payload.map((product) => product.category)))
        state.categories = ["all", ...uniqueCategories]

        productsSlice.caseReducers.applyFiltersAndSort(state)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Failed to fetch products"
      })
  },
})

export const { setCategoryFilter, setSortBy, setCurrentPage } = productsSlice.actions
export default productsSlice.reducer