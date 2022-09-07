import * as React from "react";
import styles from "../scss/main.module.scss";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import {
    FaPlay
} from "react-icons/fa";
import Logo from "./logo.svg";

export default function MainPage({scrollRef}) {
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.text}>
                    Загальноосвітній навчальний заклад із поглибленим вивченням природничих дисциплін, який дає змогу здобути освіту понад державний освітній мінімум, здійснює науково-практичну підготовку здібної, талановитої учнівської молоді.
                </div>
                <span className={styles.separator} />
                <div className={styles.text}>
                    Навчання в ліцеї відбувається українською мовою.
                </div>
            </div>
            <div className={styles.intro}>
                <span className={styles.title}>
                    Львівський<br />фізико-математичний ліцей
                </span>
                <div className={styles.image}>
                    <span className={styles.overlay} />
                    <span className={styles.button}>
                        <FaPlay />
                    </span>
                </div>
            </div>
        </div>
    );
}
