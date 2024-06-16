import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana, inter } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
      <p>dsad</p>
      <p className={`${lusitana.className}`}>dsad</p>
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </main>
  );
}
