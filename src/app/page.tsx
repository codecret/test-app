import styles from "@/app/ui/home.module.css";
import Image from "next/image";
import Filters from "./ui/Dashboard/Filters";
import FirstSectionsProduct from "./ui/Dashboard/FirstSectionsProduct";
import { productsData } from "@/lib/data";

export default function Page() {
  return (
    <main>
      <div className={styles.coverDiv}>
        <Image className={styles.heroImg} src="/cover.png" alt="Logo" fill />
      </div>
      <Filters />
      <FirstSectionsProduct
        sectionTitle={"Products For You"}
        products={productsData}
      />
    </main>
  );
}
