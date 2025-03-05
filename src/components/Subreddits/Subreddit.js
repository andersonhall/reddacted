import styles from "./subreddit.module.css";

const Subreddit = () => {
  return (
    <div className={styles.subreddit}>
      <img
        className={styles.subredditImg}
        src="https://placehold.co/50x50"
        alt="icon"
      />
      <span className={styles.subredditName}>Subreddit name</span>
    </div>
  );
};

export default Subreddit;
