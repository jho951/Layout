import Link from "next/link";
import styles from "./page.module.css"
export default function Home() {
  return (
    <main>
        <div className={styles.gnb}>
        <ul className={styles.index}>
            <li>
                <Link href="/display">display</Link>
            </li>
            <li>
                <Link href="/display">display</Link>
            </li> 
            <li>
                <Link href="/display">display</Link>
            </li>
        </ul>
        </div>
    </main>
  );
}
