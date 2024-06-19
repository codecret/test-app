import styles from "./nav.module.css";
import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { BsCartPlus } from "react-icons/bs";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftSide}>
        <Image
          className={styles.logo}
          src="/logo.png"
          width={100}
          height={30}
          alt="Logo"
        />
        <ul className={styles.ul}>
          <li className={styles.li}>Categories</li>
          <li className={styles.li}>Deal</li>
          <li className={styles.li}>Whats New</li>
          <li className={styles.li}>Delivery</li>
        </ul>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.inputSearch}>
          <input
            type="text"
            placeholder="Search Product"
            className={styles.search}
          />
        </div>
        <div className={styles.iconParent}>
          <div className={styles.iconDiv}>
            <GoPerson size={18} />
            <span className={styles.iconParagraph}>Account</span>
          </div>
          <div className={styles.iconDiv}>
            <BsCartPlus size={18} />
            <span className={styles.iconParagraph}>Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
