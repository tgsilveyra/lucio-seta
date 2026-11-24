import styles from "./AboutSection.module.scss";
import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

const WorkLink = ({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) => (
  <Link href={`/works/${slug}`} className={styles.workLink}>
    <em>{children}</em>
  </Link>
);

export const AboutSection = async () => {
  return (
    <section
      id="about-me"
      className={clsx("grid-container", styles.aboutSection)}
    >
      <h2 className={styles.title}>About Me</h2>

      <div id="biography" className={styles.subSection}>
        <h4 className={styles.subTitle}>BIOGRAPHY</h4>
        <div className={styles.copy}>
          <p>
            Lucio Seta is an Argentinian dancer, performer and choreographer
            based in Berlin since 2019. From an early age, movement has been a
            central part of his life, shaped by sports, contemporary dance and
            somatic practices. He approaches movement as a space for
            self-discovery, emotional exploration and connection with something
            beyond the self—a way of expressing existence and allowing deeper
            aspects of his being to emerge.
          </p>
          <p>
            In Buenos Aires, he worked with the dance company Fuera de Foco
            Crew, developing performances and social projects in vulnerable
            neighbourhoods across the city. In 2018, he participated in the
            European tour of the production{" "}
            <WorkLink slug="quien-levanta-la-mano">
              Quién levanta la mano?
            </WorkLink>
            , also teaching repertoire and workshops with the company.
          </p>
          <p>
            Since moving to Berlin, he has performed in various productions,
            including{" "}
            <WorkLink slug="schaf-im-wolfspelz">Schaf im Wolfspelz</WorkLink> by
            Viola Mikolasch, <WorkLink slug="cleo">Cleopatra</WorkLink> by Lior
            Schneior,{" "}
            <WorkLink slug="upstairs-downtown">Upstairs Downtown</WorkLink> by
            Karin Wickenhaeuser,{" "}
            <WorkLink slug="lucio-caleuche">Caleuche</WorkLink> by Marjorie Chau
            and <WorkLink slug="ab-auf-die-matte">Ab auf die Matte</WorkLink> by
            Kosmas Kosmopoulos. In 2022, he premiered{" "}
            <WorkLink slug="state-of-joint">State of Joint</WorkLink>,
            co-created with Sofia Seta. In 2024, he premiered his solo work{" "}
            <WorkLink slug="unlocked">Unlocked</WorkLink>, which has since been
            presented at festivals internationally. In 2025, he choreographed
            and performed in the dance film{" "}
            <WorkLink slug="the-straight-path">The Straight Path</WorkLink> with
            Iman Kay, created{" "}
            <WorkLink slug="man-in-the-mirror">Man in the Mirror</WorkLink>, a
            dance and live-electronic sound duo with Federico Pipia, and
            developed <WorkLink slug="intention">Intention</WorkLink>, a solo
            choreographic work.
          </p>
          <p>
            Currently, he is deepening his studies in Klein Technique and
            pursuing a certification in the Feldenkrais Method, while continuing
            to present his creations at festivals and venues. He has also
            collaborated with Berlin-based companies LUNA PARKS and Oxymoron
            Dance Company as a performer and teacher.
          </p>
          <p>
            Alongside his artistic practice, he develops and shares his teaching
            methodologies through Floorwork Dynamics (with Sofia Seta),
            Floorwork LAB, Experimental Dance Lab (with Naja Parejas) and
            regular Contemporary Dance classes. His pedagogical approach
            combines technical exploration, somatic awareness and creative
            research, encouraging dancers to develop their own movement language
            and deepen their relationship with the body.
          </p>
        </div>
      </div>

      <div id="artistic-statement" className={styles.subSection}>
        <h4 className={styles.subTitle}>ARTISTIC STATEMENT</h4>
        <div className={styles.copy}>
          <p>
            Lucio Seta is a dancer, performer and choreographer whose practice
            explores the body as a living archive of experiences, emotions and
            identity. Moving between Breaking, Contemporary Dance, acrobatics
            and somatic practices, he develops a dynamic physical language that
            combines breaking elements, floorwork, improvisation and physical
            theatre.
          </p>
          <p>
            His artistic research investigates the relationship between body,
            memory and personal transformation, exploring topics of
            vulnerability, resilience, identity and the tensions between
            individual freedom and social conditioning. Through movement, he
            seeks to reveal how personal and collective experiences shape the
            body, and how dance can become a space for expression, resistance
            and transformation.
          </p>
          <p>
            His creative process is rooted in physical experimentation, somatic
            awareness and the exploration of movement possibilities. This
            approach also informs his pedagogy, where he combines technical
            tools with improvisation and guided research, encouraging individual
            discovery, body awareness and creative autonomy.
          </p>
          <p>
            Through his work, Lucio invites audiences to question familiar
            perceptions of the body and experience movement as a powerful
            language for connection, reflection and change.
          </p>
        </div>
      </div>

      <div id="studies-influences" className={styles.subSection}>
        <h4 className={styles.subTitle}>STUDIES | INFLUENCES</h4>
        <p className={styles.description}>
          Through regular classes, workshops, training, personalized mentoring,
          choreographic assistance, artistic work, these teachers are the ones
          who have supported me during my path, had influenced my movement
          practice today through their methods and artistic visions, and I
          consider that I have grown artistically through their knowledge.
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
      </div>
    </section>
  );
};
