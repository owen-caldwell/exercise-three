import Link from "next/link";
import styles from "./Header.module.css";

const cities = ["London", "New York", "Tokyo", "Paris", "Riyadh"];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          {cities.map((city) => (
            <li key={city} className={styles.navItem}>
              <Link href={`/city/${city}`}>
                <span className={styles.navLink}>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
