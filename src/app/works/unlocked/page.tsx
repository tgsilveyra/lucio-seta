import clsx from "clsx";
import styles from "./page.module.scss";

export default function UnlockedPage() {
  return (
    <div className={styles.page}>
      <main className={clsx("grid-container", styles.main)}>
        <h2>Unlocked</h2>
        <h3>2024 - Dance Solo</h3>
        <p>
          &quot;Unlocked&quot; is a solo dance piece, based on a 29 year body
          record of strong emotional experiences that shaped the body to express
          itself in this way. What is the meaning of this body in movement? How
          much do these emotional experiences shape the body and influence its
          expression through movement? The dance piece tells an inner journey
          where the memory of the body navigates to past states of rage and
          despair. It&apos;s not about seeking to be overshadowed by the weight
          of trauma. On the contrary, the performer aims to shed light on the
          triumphs and successes that emerge from the human body&apos;s capacity
          to heal and overcome adversity through dance.
        </p>
        <p>PREMIERED AT EXPEDITION METROPOLIS THEATER BERLIN (2024)</p>
        <h4>CREDITS</h4>
        <ul>
          <li>CHOREOGRAPHER- LUCIO SETA</li>
          <li>PERFORMER- LUCIO SETA</li>
          <li>OUTSIDE EYE- JESUS GUIRALDI</li>
          <li>SOUND DESIGNER- MARTIN CROCCO</li>
        </ul>
        <a href="https://www.youtube.com/watch?v=KR_mvG2uBfM" target="_blank">
          (play) Performance
        </a>
      </main>
    </div>
  );
}
