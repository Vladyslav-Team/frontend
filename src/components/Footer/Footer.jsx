import React from "react"
import styles from "./Footer.module.css"
import { Logo } from "../Header/components/Logo"

const Footer = () => {
    return (
        <footer className={styles.footer_wrap}>
            <div className={styles.footer_column}>
                <Logo />
                <p className={styles.moto}>Scoup out your skills</p>
                <p className={styles.main_text}>@Copyright</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footer_column}>
                <p className={styles.header_text}>FRONTEND</p>
                <ul className={styles.main_text}>
                    <li>Kirill Serebryakov</li>
                    <li>Yaroslav Usenko</li>
                    <li>Oleksandra Hryshchenko</li>
                    <li>Vladislav Zabilskiy</li>
                </ul>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footer_column}>
                <p className={styles.header_text}>BACKEND</p>
                <ul className={styles.main_text}>
                    <li>Samer Khomsi Kak</li>
                    <li>Illia Kuselov</li>
                    <li>Denis Panfilovskyi</li>
                </ul>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footer_column}>
                <p className={styles.header_text}>QA</p>
                <ul className={styles.main_text}>
                    <li>Daria Hontar</li>
                    <li>Bohdan Anashkin</li>
                    <li>Yurii Mykhailov</li>
                    <li>Olesia Polexhai</li>
                    <li>Anastasia Pidlisna</li>
                </ul>
            </div>
        </footer>
    )
}

export { Footer }