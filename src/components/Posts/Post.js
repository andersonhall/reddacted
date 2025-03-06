import styles from "./posts.module.css";
import upIcon from "../../assets/up.svg";
import downIcon from "../../assets/down.svg";

const Post = ({ post }) => {
  const {
    id,
    author,
    subreddit_name_prefixed,
    title,
    ups,
    downs,
    num_comments,
    permalink,
    url,
  } = post;
  return (
    <div className={styles.post}>
      <h2 className={styles.postTitle}>{title}</h2>
      {url.match(".jpeg") && (
        <img className={styles.postThumbnail} src={url} alt="thumb" />
      )}
      <div className={styles.postFooter}>
        <div className={styles.postFooterLeft}>
          <p>
            <img src={upIcon} alt="up" />
            <span>|</span>
            <span>{ups - downs}</span>
            <span>|</span>
            <img src={downIcon} alt="down" />
          </p>
        </div>
        <p className={styles.postFooterRight}>{subreddit_name_prefixed}</p>
      </div>
    </div>
  );
};

export default Post;
