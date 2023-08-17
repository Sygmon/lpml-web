import React from "react";
import Head from "next/head";
import styles from "../scss/error.module.scss";
import Link from "next/link";

export default function App({}) {
  return (
    <>
      <Head>
        <title>500 - Львівський фізико-математичний ліцей</title>
        <meta name="description" content="500 - Помилка сервера" />
      </Head>
      <div className={styles.container}>
        <div className={styles.error}>
          <h1 className={styles.title}>500</h1>
          <div className={styles.text}>
            <p className={styles.description}>Помилка сервера</p>
            <Link href="/">Повернутися на головну</Link>
          </div>
        </div>
      </div>
    </>
  );
}
