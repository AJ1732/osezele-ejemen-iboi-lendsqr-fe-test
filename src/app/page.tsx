import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to Lendsqr Admin</h1>
      <p>
        Go to <Link href={"/dashboard"}>Dashboard</Link>
      </p>
    </div>
  );
}
