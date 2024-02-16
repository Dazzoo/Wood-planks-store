import React from "react";
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import ProductsList from '@/components/widgets/ProductsList'
import { getProducts } from '@/service/routes/products'

export default async function Main() {
  const products = await getProducts()
  
  return (
      <ProductsList products={products} />
  );
}
