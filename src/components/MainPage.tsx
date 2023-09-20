import Link from "next/link";
import * as React from "react";
import styles from "../scss/main.module.scss";
import Logo from "./logo.svg";

export default function MainPage() {
  return (
    <div className={styles.info}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.about}>
        <div className={styles.text}>
          Загальноосвітній навчальний заклад із поглибленим вивченням
          природничих дисциплін, який дає змогу здобути освіту понад державний
          освітній мінімум, здійснює науково-практичну підготовку здібної,
          талановитої учнівської молоді.
        </div>
        <span className={styles.separator} />
        <div className={styles.text}>
          Навчання в ліцеї відбувається українською мовою.
        </div>
      </div>
      <span className={styles.title}>
        Львівський
        <br />
        фізико-математичний ліцей
      </span>
      <div className={styles.cover}>
        <Link href="/info/about">
          <div className={styles.image}>
            <span className={styles.overlay} />
          </div>
        </Link>
      </div>
    </div>
  );
}