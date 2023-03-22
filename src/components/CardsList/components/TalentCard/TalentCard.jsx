import { Avatar } from "./components/Avatar";
import { VisitButton } from "./components/VisitButton";
import styles from "./TalentCard.module.css";

function TalentCard({ talent }) {
  return (
    <div className={styles.card}>
      <div className={styles.background}>
        <Avatar avatar={talent.image} />
      </div>
      <div className={styles.content}>
        <div>{`${talent.name} ${talent.surname}`}</div>
        <div className={styles.location}>{talent.location}</div>
        <div className={styles.proof}></div>
      </div>
      <VisitButton />
    </div>
  );
}

export { TalentCard };
