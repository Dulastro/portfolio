import styles from "./styles.module.css";
export default function Card({
  imgProjeto,
  descricao,
  subDescricao,
  livePreview,
  linkLivePreview,
  linkViewCode,
  viewCode,
}) {
  return (
    <div className={styles.card}>
      <img src={imgProjeto} alt="foto do projeto" />
      <section>
        <p className={styles.descricao}>{descricao}</p>
        <p className={styles.subDescricao}>{subDescricao}</p>
        <span>
          <a href={linkLivePreview}>💻{livePreview}</a>
          <a href={linkViewCode}>🔗{viewCode}</a>
        </span>
      </section>
    </div>
  );
}
