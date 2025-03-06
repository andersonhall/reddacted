import { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.reddit.com/r/popular.json")
      .then((response) => response.json())
      .then((json) => {
        const redditData = json.data.children;
        console.log(redditData);
        let fetchedPosts = [];
        for (let i = 0; i < redditData.length; i++) {
          const {
            author,
            downs,
            id,
            num_comments,
            permalink,
            subreddit_name_prefixed,
            title,
            ups,
            url,
          } = redditData[i].data;
          fetchedPosts.push({
            id,
            author,
            subreddit_name_prefixed,
            title,
            ups,
            downs,
            num_comments,
            permalink,
            url,
          });
          setPosts(fetchedPosts);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
