import { PaginationControls } from './components/PaginationControls'
import { ProductList } from './components/ProductList'

function App() {

  return (
     <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center md:text-left">Product Catalog</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-6">
        <ProductList />
        <PaginationControls />
      </main>
      <footer className="bg-white border-t p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Product Catalog. All rights reserved.
      </footer>
    </div>
  )
}

export default App
