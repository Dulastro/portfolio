import styles from "./styles.module.css";
import { FaCode, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import cv from "../../assets/Profile.pdf";
export default function Header({
  mySkills,
  about,
  contact,
  projects,
  hrefLinkedin,
  hrefGit,
  hrefInstagran,
  id,
}) {
  return (
    <header className={styles.header} id={id}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <FaCode aria-hidden="true" className={styles.logoIcon} />
          <h2 className={styles.logoText}>PDulastro</h2>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#mySkills">{mySkills}</a>
          </li>
          <li>
            <a href="#about">{about}</a>
          </li>
          <li>
            <a href="#contact">{contact}</a>
          </li>
          <li>
            <a href="#projects">{projects}</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href={hrefInstagran} target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href={hrefLinkedin} target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={hrefGit} target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>

      <a href="#" className={styles.downloadCv} download={cv}>
        DOWNLOAD CV
      </a>
    </header>
  );
}
