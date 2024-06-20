import styles from "@/app/ui/home.module.css";
import Image from "next/image";
import Filters from "./ui/Dashboard/Filters";
import FirstSectionsProduct from "./ui/Dashboard/FirstSectionsProduct";
import { productsData } from "@/lib/data";

export default function Page({ products }) {
  return (
    <main>
      <div className={styles.coverDiv}>
        <Image className={styles.heroImg} src="/cover.png" alt="Logo" fill />
      </div>
      <FirstSectionsProduct
        sectionTitle={"Products For You"}
        products={productsData}
        // products={products}
      />
    </main>
  );
}
// // getStaticProps to fetch data at build time
// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/products");
//   const productsData = await res.json();

//   const products = productsData;

//   return {
//     props: {
//       products,
//     },
//   };
// }
