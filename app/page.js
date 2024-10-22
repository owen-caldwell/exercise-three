import styles from "./page.module.css";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Select a city to view its weather information.
        </h1>
        <Header />
      </main>
    </div>
  );
}
