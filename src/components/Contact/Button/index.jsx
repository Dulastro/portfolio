import styles from "./styles.module.css";

export default function Button({ incon, title, hrefTitle }) {
  return (
    <a href={hrefTitle} target="_blank" className={styles.btn}>
      <span className={styles.iconContainer}>{incon}</span>
      {title}
    </a>
  );
}
