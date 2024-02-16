import React from "react";
import ProductCard from "@/components/widgets/ProductCard";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

interface Product {
  id: string;
  name: string;
  brand_name: string;
  price: string;
  currency_symbols: string;
  img_url: string;
  is_vailable: number;
  description: string;
}

interface Props {
  products?: Product[];
}

const ProductsList: React.FC<Props> = ({ products }) => {

    return (
      <section className="flex flex-col items-center w-full">
            <div className=" px-6 py-12" >
              <h2 className="uppercase text-sm" >
                The innovation leader in luxury vinyl plank
              </h2>
                <h3 className="text-5xl" >
                Let's Get Started
              </h3>
            </div>
            <div className="w-[75%] flex flex-wrap justify-center content-center items-center py-20 px-20 bb" >
            {products && products.length > 0 ? 
                products.map(product => {
                  return (
                    <div className="m-4" >
                      <ProductCard
                        product={product}
                      />
                    </div>
                  );
                })
                : 
                <div className="" >
                    No data
                </div>
            }
            </div>
      </section>
    );
}

export default ProductsList;
