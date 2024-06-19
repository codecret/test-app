import styles from "@/app/ui/home.module.css";

export default function Filters() {
  return (
    <div className={styles.pagePadding}>
      <div className={styles.FiltersContainer}>
        <button className={`${styles.btn} ${styles.filterItem}`}>
          Headphone Type
        </button>
        <button className={`${styles.btn} ${styles.filterItem}`}>Price</button>
        <button className={`${styles.btn} ${styles.filterItem}`}>Review</button>
        <button className={`${styles.btn} ${styles.filterItem}`}>Color</button>
        <button className={`${styles.btn} ${styles.filterItem}`}>
          Material
        </button>
        <button className={`${styles.btn} ${styles.filterItem}`}>Offer</button>
      </div>
    </div>
  );
}
