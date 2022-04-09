import React, { useState, useEffect } from 'react';

import { getProductById } from 'home/products';
import { currency } from 'home/utils';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export default function PDPContent() {
  const id = 1;
  const [product, setProduct] = useState<Product>(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((product: Product) => setProduct(product));
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
      </div>
    </div>
  );
}