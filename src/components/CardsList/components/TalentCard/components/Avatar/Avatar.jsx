import styles from "./Avatar.module.css";

const Avatar = ({ avatar }) => {
  return (
    <div className={styles.wrapper}>
      {avatar && <img src={avatar} alt="avatar" className={styles.avatar} />}
    </div>
  );
};

export { Avatar };
