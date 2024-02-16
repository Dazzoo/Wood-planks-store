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
      <div className=" flex-col p-4 border-2	border-stone-300	hover:border-stone-700	">
        <div className="cursor-pointer">
          <Image
            src={product.img_url}
            alt={product.name} 
            width={260} 
            height={260}

          />
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