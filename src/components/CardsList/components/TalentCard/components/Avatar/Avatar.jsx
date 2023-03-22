import styles from "./Avatar.module.css";

function Avatar({ avatar }) {
  return (
    <div className={styles.wrapper}>
      {avatar && <img src={avatar} alt="avatar" className={styles.avatar} />}
    </div>
  );
}

export { Avatar };
