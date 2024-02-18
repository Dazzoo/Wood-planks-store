import React from "react";
import Image from 'next/image';
import CheckboxBasic from '@/components/shared/input/CheckBoxBasic'

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
    product: Product;
  }
  

const ProductCard: React.FC<Props> = ({ product }) => {

    return (
      <div className=" flex-col p-4 border-2	border-stone-300	hover:border-stone-700	group">
        <div className=" relative ">
          <Image
            src={product.img_url}
            alt={product.name} 
            width={260} 
            height={260}
          />
          <div className="absolute top-0 p-2	bg-gray-500	text-zinc-50 opacity-0 group-hover:opacity-100" >
            Shop by Room
          </div>
          <div className="absolute bottom-0 hover:bottom-[1px] p-2	text-xl	text-zinc-50 opacity-0 group-hover:opacity-100 " >
            <div className="border-b-2 border-gray-300 pb-0.5 mb-0.5 cursor-pointer">
            Product Details
            </div>
          </div>
          <div className="absolute top-0 hover:top-[-1px] right-0 p-2	text-xl	text-zinc-50 opacity-0 group-hover:opacity-100 cursor-pointer" >
          <Image
            src={"/img/heart.png"}
            alt={product.name} 
            width={30} 
            height={30}
          />
          </div>
        </div>
        <div className="flex pt-2" >
          <div className="basis-9/12	">
            <h4 className="text-base font-semibold" >
              {product.name}
            </h4>
            <div className="text-sm font-light	" >
              {product.brand_name}
            </div>
            {Number(product.is_vailable) ?
                <div className="text-xs	pt-2 inline-flex items-center" >
                  <span >
                    <Image
                      src={"/img/green-circle.png"}
                      alt={product.name} 
                      width={10} 
                      height={10}
                    />
                  </span>
                  <span className="ml-1" >
                    Available now
                  </span>
                </div>
                :

                <div className="text-xs	pt-2 inline-flex items-center" >
                  <span>
                    <Image
                      src={"/img/red-circle.png"}
                      alt={product.name} 
                      width={10} 
                      height={10}
                    />
                  </span>
                  <span className="ml-1" >
                    Out of stock
                  </span>
                </div>
            }

          </div>
          <div className=" flex justify-end basis-3/12	font-semibold">
            <div className="flex flex-col justify-between items-end"   style={{ textAlign: 'right' }}>
              <div className="" >
                {product.currency_symbols}
                {product.currency_symbols}
                {product.currency_symbols}
              </div>
              <div className="mt-auto" >
                <CheckboxBasic
                  name={"Compare"}
                  size={'sm'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ProductCard;