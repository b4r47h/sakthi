'use client';

import { useState } from 'react';
import ProductCard from '@/components/products/ProductCard';
import ProductFilters from '@/components/products/ProductFilters';
import productsData from '@/data/allProducts.json';

interface Product {
  id: string;
  name: string;
  price: number;
  mrp: number;
  type: string;
  code: string;
  image: string;
  description: string;
  category: string;
}

const products: Product[] = productsData;

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    priceRange: [500, 30000],
    category: 'all'
  });

  const filteredProducts = products.filter(product => 
    product.price >= filters.priceRange[0] &&
    product.price <= filters.priceRange[1] &&
    (filters.category === 'all' || product.category === filters.category)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <ProductFilters onFilterChange={setFilters} />
        </div>
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}