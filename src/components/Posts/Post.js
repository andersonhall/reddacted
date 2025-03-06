import styles from "./posts.module.css";
import upIcon from "../../assets/up.svg";
import downIcon from "../../assets/down.svg";

const Post = () => {
  return (
    <div className={styles.post}>
      <h2 className={styles.postTitle}>Post Title</h2>
      <img src="https://placehold.co/600x400" alt="placeholder" />
      <div className={styles.postFooter}>
        <div className={styles.postFooterLeft}>
          <p>
            <img src={upIcon} alt="up" />
            <span>|</span>
            <span>27</span>
            <span>|</span>
            <img src={downIcon} alt="down" />
          </p>
        </div>
        <p className={styles.postFooterRight}>/Subreddit * 27 hr ago</p>
      </div>
    </div>
  );
};

export default Post;
