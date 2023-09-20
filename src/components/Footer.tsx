import styles from "../scss/Footer.module.scss";
import Switcher from "./Themeswitcher";
import { FaFacebook } from "react-icons/fa";
import Logo from "./logo.svg";
import Link from "next/link";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <a href={href} className={styles.link}>
        {children}
      </a>
    </Link>
  );
}

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.links}>
          <FooterLink href="/info/about">ліцей</FooterLink>
          <FooterLink href="/info/for-entrants">вступ</FooterLink>
          <FooterLink href="/info/for-students">для ліцеїстів</FooterLink>
          <FooterLink href="/info/public-info">публічно</FooterLink>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.label}>Контактна інформація:</div>
        <div className={styles.label}>
          79059, Україна, м. Львів, вул. Караджича, 29
        </div>
        <div className={styles.label}>телефон: (032) 262-00-68</div>
      </div>
      <div className={styles.column}>
        <div className={styles.label}>Ми у соцмережах</div>
        <div className={styles.logos}>
          <Link href="http://www.facebook.com/groups/33427370676/">
            <a
              href="http://www.facebook.com/groups/33427370676/"
              className={styles.social}
              aria-label="facebook"
            >
              <FaFacebook />
            </a>
          </Link>
        </div>
        <Link href="/info/about/конкурси">
          <div className={`${styles.label} ${styles.link}`}>Конкурси</div>
        </Link>
        <div className={styles.logos}>
          <a href="http://kangaroo.com.ua">
            <img src="/images/contests/kangaroo.png" alt="kangaroo" />
          </a>
          <a href="http://levenia.com.ua">
            <img src="/images/contests/levenia.png" alt="levenia" />
          </a>
          <a href="http://bober.net.ua">
            <img
              src="/images/contests/bebras.png"
              alt="bebras"
              className={styles.outlined}
            />
          </a>
        </div>
        <Link href="/">
          <a href="/" className={styles.logo} aria-label="logo">
            <Logo width={295 / 2} height={131 / 2} viewBox="0 0 295 131" />
          </a>
        </Link>
        <Switcher />
      </div>
    </div>
  );
}
