import Image from "next/image";
import React from "react";
import styles from "../home.module.css";
export default function Product({
  title,
  description,
  price,
  category,
  stock,
  image,
  isAddedToCart,
  isFavorite,
}) {
  const buttonClass = isAddedToCart
    ? styles.addedToCart
    : styles.notAddedToCart;
  return (
    <div className={styles.product}>
      <h3>{title}</h3>
      {/* <Image src={image} alt={title} width={50} height={300} /> */}
      <button className={buttonClass}>Added to Cart</button>
      <p>{isFavorite ? "Favorite" : "Not Favorite"}</p>{" "}
    </div>
  );
}
