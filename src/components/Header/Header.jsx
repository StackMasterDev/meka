"use client"
import React, { useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className={styles.navbar}>
            <div onClick={() => router.push("/")} className={styles.logo}>Meka Teknik Pompa</div>

            <ul className={`${styles.menu} ${isOpen ? styles.showMenu : ""}`}>
                <li className={styles.menuItem}>
                    <Link className={styles.link} href="/">Ana Sayfa</Link>
                </li>
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    Kurumsal <span className={styles.arrow}>▼</span>
                    <ul className={styles.dropdownMenu}>
                        <li><Link className={styles.dropdownLink} href="/hakkimizda">Hakkımızda</Link></li>
                        <li><Link className={styles.dropdownLink} href="/vizyon-misyon">Misyon ve Vizyonumuz</Link></li>
                        <li><Link className={styles.dropdownLink} href="/kalite-belgeleri">Kalite Belgelerimiz</Link></li>
                        <li><Link className={styles.dropdownLink} href="/referanslar">Referanslarımız</Link></li>


                    </ul>
                </li>
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    Ürünlerimiz <span className={styles.arrow}>▼</span>
                    <ul className={styles.dropdownMenu}>
                        <li><Link className={styles.dropdownLink} href="/santrifuj-pompa">Santrifüj Pompa</Link></li>
                        <li><Link className={styles.dropdownLink} href="/dalgic-pompa">Dalgıç Pompa</Link></li>
                        <li><Link className={styles.dropdownLink} href="/vakum-pompasi">Vakum Pompası</Link></li>
                        <li><Link className={styles.dropdownLink} href="/hidrolik-pompa">Hidrolik Pompa</Link></li>
                        <li><Link className={styles.dropdownLink} href="/ozel-tasarim-pompa">Özel Tasarım Pompa</Link></li>


                    </ul>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/iletisim" className={styles.link}>İletişim</Link>
                </li>
            </ul>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </div>
        </nav>
    );
};

export default Header;