import Card from "./Card";
import styles from "./styles.module.css";
import imgProjeto from "../../assets/image.png";
export default function Projects({ title,id }) {
  return (
    <section className={styles.projects} id={id}>
      <h2>{title}</h2>
      <div className={styles.cardContainer}>
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "O TaskMaster é um aplicativo para ajudar os usuários a organizar suas tarefas diárias. Com ele, é possível criar, editar e acompanhar atividades de forma prática e eficiente."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"#"}
          livePreview={"Live Preview"}
          linkViewCode={"#"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "O TaskMaster é um aplicativo para ajudar os usuários a organizar suas tarefas diárias. Com ele, é possível criar, editar e acompanhar atividades de forma prática e eficiente."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"#"}
          livePreview={"Live Preview"}
          linkViewCode={"#"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "O TaskMaster é um aplicativo para ajudar os usuários a organizar suas tarefas diárias. Com ele, é possível criar, editar e acompanhar atividades de forma prática e eficiente."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"#"}
          livePreview={"Live Preview"}
          linkViewCode={"#"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "O TaskMaster é um aplicativo para ajudar os usuários a organizar suas tarefas diárias. Com ele, é possível criar, editar e acompanhar atividades de forma prática e eficiente."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"#"}
          livePreview={"Live Preview"}
          linkViewCode={"#"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "O TaskMaster é um aplicativo para ajudar os usuários a organizar suas tarefas diárias. Com ele, é possível criar, editar e acompanhar atividades de forma prática e eficiente."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"#"}
          livePreview={"Live Preview"}
          linkViewCode={"#"}
          viewCode={"View Code"}
        />
        <Card
          imgProjeto={imgProjeto}
          descricao={
            "O TaskMaster é um aplicativo para ajudar os usuários a organizar suas tarefas diárias. Com ele, é possível criar, editar e acompanhar atividades de forma prática e eficiente."
          }
          subDescricao={"tech stack: HTML, JavaScript, Sass, React"}
          linkLivePreview={"#"}
          livePreview={"Live Preview"}
          linkViewCode={"#"}
          viewCode={"View Code"}
        />
      </div>
    </section>
  );
}
