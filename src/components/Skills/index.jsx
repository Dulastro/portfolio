import styles from "./styles.module.css";
import HtmlIcon from "../../assets/html5.svg";
import CssIcon from "../../assets/css-3.svg";
import JsIcon from "../../assets/javascript.svg";
import TsIcon from "../../assets/typescript.svg";
import ReactIcon from "../../assets/react.svg";
import GitIcon from "../../assets/git.svg";

export default function Skills({ titleSection, id }) {
  return (
    <section className={styles.skills} id={id}>
      <h2>{titleSection}</h2>

      <div className={styles.iconContainer}>
        <img src={HtmlIcon} alt="html icone" />
        <img src={CssIcon} alt="css icone" />
        <img src={JsIcon} alt="js icone" />
        <img src={TsIcon} alt="ts icone" />
        <img src={ReactIcon} alt="react icone" />
        <img src={GitIcon} alt="git icone" />
      </div>
    </section>
  );
}
