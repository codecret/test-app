"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "@/app/ui/dashboard/nav-links.module.css";

// Map of links to display in the side navigation.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(styles.link, "md:" + styles.linkMd, {
              [styles.linkActive]: pathname === link.href,
            })}
          >
            <LinkIcon className={styles.icon} />
            <p className={clsx(styles.linkText, "md:" + styles.linkTextMd)}>
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
