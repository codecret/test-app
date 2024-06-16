import Link from "next/link";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className={`${styles.container} md:px-2`}>
      <Link href="/" className={`${styles.link} md:${styles.linkMd}`}>
        <div className={`${styles.linkText} md:${styles.linkTextMd}`}>
          {/* <AcmeLogo /> */}
        </div>
      </Link>
      <div className={`${styles.navContainer} md:${styles.navContainerMd}`}>
        <NavLinks />
        <div
          className={`${styles.placeholder} md:${styles.placeholderMd}`}
        ></div>
        <form
          action={async () => {
            "use server";
            // await signOut();
          }}
        >
          <button
            className={`${styles.signOutButton} md:${styles.signOutButtonMd}`}
          >
            {/* <PowerIcon className="w-6" /> */}
            <div className={`${styles.signOutText} md:${styles.signOutTextMd}`}>
              Sign Out
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
