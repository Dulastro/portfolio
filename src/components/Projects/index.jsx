import Card from "./Card";
import styles from "./styles.module.css";
import imgProjeto from "../../assets/projeto.jpeg";
export default function Projects({ title, id }) {
  return (
    <section className={styles.projects} id={id}>
      <h2>{title}</h2>
      <div className={styles.cardContainer}>
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "A Dolor Sit Et Ipsum Velit Adipiscing Proin Bibendum Ut Cursus. Duis Viverra Et Quis Euismod At Tellus Ac Vestibulum. Nam Orci Efficitur Nibh Sed Etiam Elit."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"https://dulastro.github.io/portfolio/"}
          livePreview={"Live Preview"}
          linkViewCode={"https://github.com/Dulastro/portfolio"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "A Dolor Sit Et Ipsum Velit Adipiscing Proin Bibendum Ut Cursus. Duis Viverra Et Quis Euismod At Tellus Ac Vestibulum. Nam Orci Efficitur Nibh Sed Etiam Elit."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"https://dulastro.github.io/portfolio/"}
          livePreview={"Live Preview"}
          linkViewCode={"https://github.com/Dulastro/portfolio"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "A Dolor Sit Et Ipsum Velit Adipiscing Proin Bibendum Ut Cursus. Duis Viverra Et Quis Euismod At Tellus Ac Vestibulum. Nam Orci Efficitur Nibh Sed Etiam Elit."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"https://dulastro.github.io/portfolio/"}
          livePreview={"Live Preview"}
          linkViewCode={"https://github.com/Dulastro/portfolio"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "A Dolor Sit Et Ipsum Velit Adipiscing Proin Bibendum Ut Cursus. Duis Viverra Et Quis Euismod At Tellus Ac Vestibulum. Nam Orci Efficitur Nibh Sed Etiam Elit."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"https://dulastro.github.io/portfolio/"}
          livePreview={"Live Preview"}
          linkViewCode={"https://github.com/Dulastro/portfolio"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "A Dolor Sit Et Ipsum Velit Adipiscing Proin Bibendum Ut Cursus. Duis Viverra Et Quis Euismod At Tellus Ac Vestibulum. Nam Orci Efficitur Nibh Sed Etiam Elit."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"https://dulastro.github.io/portfolio/"}
          livePreview={"Live Preview"}
          linkViewCode={"https://github.com/Dulastro/portfolio"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "A Dolor Sit Et Ipsum Velit Adipiscing Proin Bibendum Ut Cursus. Duis Viverra Et Quis Euismod At Tellus Ac Vestibulum. Nam Orci Efficitur Nibh Sed Etiam Elit."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"https://dulastro.github.io/portfolio/"}
          livePreview={"Live Preview"}
          linkViewCode={"https://github.com/Dulastro/portfolio"}
          viewCode={"View Code"}
        />
      </div>
    </section>
  );
}
