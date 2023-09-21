import Link from "next/link";
import styles from "../scss/Partners.module.scss";

function Partner({
  src,
  href,
  name,
}: {
  src: string;
  href: string;
  name: string;
}) {
  return (
    <Link href={href}>
      <span className={styles.partner}>
        <img src={src} alt={name} className={styles.image} />
      </span>
    </Link>
  );
}

export default function Partners() {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="partners" className={styles.checkbox} hidden />
      <label htmlFor="partners" className={styles.title}>
        Партнери
      </label>
      <div className={styles.partners}>
        <Partner
          src="/images/partners/mon.png"
          href="https://mon.gov.ua/ua"
          name="Міністерство освіти і науки України"
        />
        <Partner
          src="/images/partners/vso.png"
          href="https://lms.e-school.net.ua/"
          name="Всеукраїнська школа онлайн"
        />
        <Partner
          src="/images/partners/nus.png"
          href="https://nus.org.ua/"
          name="Нова Українська Школа"
        />
        <Partner
          src="/images/partners/city-adm.png"
          href="https://city-adm.lviv.ua/"
          name="Львівська міська рада"
        />
        <Partner
          src="/images/partners/loda.png"
          href="https://osvita.loda.gov.ua/"
          name="Освіта Львівщини"
        />
        <Partner
          src="/images/partners/lnu.png"
          href="https://lnu.edu.ua/"
          name="Львівський національний університет імені Івана Франка"
        />
        <Partner
          src="/images/partners/sqe.png"
          href="https://sqe.gov.ua/"
          name="Державна служба якості освіти України"
        />
        <Partner
          src="/images/partners/testportal.png"
          href="https://testportal.gov.ua/"
          name="Український центр оцінювання якості освіти"
        />
      </div>
    </div>
  );
}
