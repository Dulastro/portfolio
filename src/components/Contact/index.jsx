import { FaEnvelope, FaWhatsapp, FaMap } from "react-icons/fa";
import Button from "./Button";
import styles from "./styles.module.css";
export default function Contact({ title, id }) {
  return (
    <section className={styles.contact} id={id}>
      <h2>{title}</h2>

      <div>
        <Button
          hrefTitle={"mailto:pedro.dulastro.silva@gmail.com"}
          incon={<FaEnvelope />}
          title={"pedro.dulastro.silva@gmail.com"}
        />
        <Button
          hrefTitle={
            "https://wa.me/5521988633753?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
          }
          incon={<FaWhatsapp />}
          title={"+5521988633753"}
        />
        <Button
          hrefTitle={
            "https://www.google.com/maps/place/Piratininga,+Niter%C3%B3i+-+RJ/data=!4m2!3m1!1s0x99867e347375cd:0x4c995a2bbb046ffc?sa=X&ved=1t:242&ictx=111"
          }
          incon={<FaMap />}
          title={"Niteroi, Rio de Janeiro"}
        />
      </div>
    </section>
  );
}
