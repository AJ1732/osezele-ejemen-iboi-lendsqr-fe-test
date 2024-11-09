import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to Lendsqr Admin</h1>
      <p>
        <Link href={"/login"}>Login</Link> to go to Dashboard
      </p>
    </div>
  );
}
