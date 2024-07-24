import styles from "./styles.module.css";

export default function Main({
  eu,
  name,
  profissao,
  srcAvatar,
  altAvatar,
  id,
}) {
  return (
    <header className={styles.header} id={id}>
      <section>
        <h1>
          <span>{eu}</span>
          {name}
        </h1>
        <p>{profissao}</p>

        <a
          href="https://wa.me/5521988633753?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
          target="_blank"
        >
          CONTACT-ME
        </a>
      </section>

      <figure className={styles.avatarContainer}>
        <img src={srcAvatar} alt={altAvatar} className={styles.avatar} />
      </figure>
    </header>
  );
}
