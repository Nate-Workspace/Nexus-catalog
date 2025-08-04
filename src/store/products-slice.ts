import { createAsyncThunk } from "@reduxjs/toolkit"
import type { Product } from "@/lib/types"

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