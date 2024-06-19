import React from "react";
import Product from "../shared/Product";
import styles from "@/app/ui/home.module.css";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  isAddedToCart: boolean;
  isFavorite: boolean;
}

export default function FirstSectionsProduct({ sectionTitle, products }) {
  console.log(products);
  return (
    <div className={styles.pageHorizPadding}>
      <h1>{sectionTitle}</h1>
      <div className={styles.productContainer}>
        {products &&
          products.map((ele: ProductType, index: number) => {
            return (
              <Product
                key={index}
                title={ele.title}
                image={ele.image}
                isAddedToCart={ele.isAddedToCart}
                description={ele.description}
                category={ele.category}
                stock={ele.stock}
                isFavorite={ele.isFavorite}
                price={ele.price}
              />
            );
          })}
      </div>
    </div>
  );
}
