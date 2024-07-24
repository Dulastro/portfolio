import styles from "./styles.module.css";
export default function About({ about, aboutDescription, id }) {
  return (
    <section className={styles.about} id={id}>
      <h2>{about}</h2>
      <p>{aboutDescription}</p>
    </section>
  );
}
