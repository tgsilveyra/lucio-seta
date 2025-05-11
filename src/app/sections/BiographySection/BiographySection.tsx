import styles from "./BiographySection.module.scss";
import clsx from "clsx";

export const BiographySection = async () => {
  return (
    <section
      id="biography"
      className={clsx("grid-container", styles.biographySection)}
    >
      <h2 className={styles.title}>Biography</h2>
      <h4>STUDIES | INFLUENCES</h4>
      <p className={styles.description}>
        Through regular classes, workshops, training, personalized mentoring,
        choreographic assistance, artistic work, these teachers are the ones who
        have influenced my dance today through their methods and artistic
        visions, and I consider that I have grown artistically through their
        knowledge.
      </p>
      <p>RODRIGO SPACE AKA BBOY SPACE (ARG) - BREAKING</p>
      <p>CRISTIAN CORRIDONI BBOY SIRK (ARG) - BREAKING</p>
      <p>
        ROMINA SOSA (ARG) DANCE IMPROVISATION - URBAN AND CONTEMPORARY DANCE -
        CHOREOGRAPHY
      </p>
      <p>SOFIA SETA (ARG) - DANCE IMPROVISATION - CHOREOGRAPHY</p>
      <p>
        JESUS GUIRALDI (ARG) - CONTEMPORARY DANCE, DANCE IMPROVISATION -
        CHOREOGRAPHY
      </p>
      <p>JOSE SADRINAS - YOGA IYENGAR. FELDENKRAIS. </p>
      <p>HANNA HEGENSCHEIDT(GER) - KLEIN TECHNIQUE </p>
      <p>
        LUCIA TOKER (ARG) - ACROBATICS, FLEXIBILITY AND ARCHS . MOVEMENT
        PEDAGOGY .{" "}
      </p>
      <p>EMILIANO CASTEL (ARG) - INTRODUCCION TO THE FASCIA</p>
    </section>
  );
};
