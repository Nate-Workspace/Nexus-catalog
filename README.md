# Nexus Catalog: Modern E-commerce Product Catalog

A modern and responsive e-commerce product catalog built with React, TypeScript, Tailwind CSS, and shadcn/ui components. This application allows users to browse, filter, and sort products with a polished and responsive user experience.

## ✨ Features

*   **API Integration**: Fetches product data from a public API (https://dummyjson.com/products).
*   **Loading & Error States**: Includes loading skeletons for a smooth user experience and clear error state handling.
*   **Filtering & Sorting**:
    *   Category filtering using a dropdown.
    *   Price sorting (ascending/descending).
    *   Supports multi-criteria filtering (e.g., category and price).
*   **Pagination**: Traditional pagination with page numbers for easy navigation.
*   **Responsive Design**: Mobile-first layout with a responsive grid, ensuring a great experience across various devices.
*   **UI Components**: Utilizes `shadcn/ui` components like Card, Button, Skeleton, Select, and Alert for a consistent and accessible design.
*   **State Management**: Leverages Redux Toolkit to manage the product list, filters, sorting, and pagination state efficiently.
*   **Type Safety**: Built entirely with TypeScript, ensuring strict types for API responses, Redux state, and component props.
*   **User Experience**: Clean, accessible, and user-friendly interface with subtle transitions and a well-spaced layout.

## 🚀 Project Setup

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js (v18 or higher recommended) and npm installed.

### 1. Initialize your Vite Project

If you haven't already, create your Vite project with React and TypeScript:

```bash
npm create vite@latest nexus-catalog -- --template react-tsc
cd nexus-catalog
```

### 2. Install Dependencies

Install all the necessary packages, including Tailwind CSS, Redux Toolkit, Lucide React icons, and shadcn/ui components:

```bash
npm install
npm install tailwindcss @tailwindcss/vite
npm install @reduxjs/toolkit react-redux lucide-react
npx shadcn@latest init # Follow the prompts after this one
npx shadcn@latest add button card select skeleton alert
```

### 3. Update Tailwind CSS Configuration

Ensure your `tsconfig.json`, `vite.config.ts`and some other files are correctly configured to scan your source files for Tailwind classes.


### 4. Add Global CSS

Ensure your `src/index.css` file includes the Tailwind directives:

```css
@import "tailwindcss";
```

### 5. Copy Project Files

Place the provided React components, Redux store files, and type definitions into their respective `src/` subdirectories:

*   `src/main.tsx`
*   `src/App.tsx`
*   `src/lib/types.ts`
*   `src/store/products-slice.ts`
*   `src/store/store.ts`
*   `src/store/hooks.ts`
*   `src/components/LoadingSkeleton.tsx`
*   `src/components/ProductCard.tsx`
*   `src/components/ProductList.tsx`
*   `src/components/ProductFilters.tsx`
*   `src/components/PaginationControls.tsx`

### 6. Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port indicated by Vite) to see the application in action.
```

