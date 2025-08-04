"use client"

import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { setCurrentPage } from "@/store/products-slice"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PaginationControls() {
  const dispatch = useAppDispatch()
  const { filteredProducts, currentPage, itemsPerPage } = useAppSelector((state) => state.products)

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1))
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  if (totalPages <= 1) {
    return null 
  }

  return (
    <div className="flex justify-center items-center gap-4 p-4 border-t bg-background">
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
