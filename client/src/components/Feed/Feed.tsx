import { useState, useEffect } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import { FeedContainer, FeedWrapper } from "./Feed.styled";
import axios from "axios";
import { useSelector } from "react-redux";
// import { posts } from "../../dummyData";

const Feed = ({ username }: { username?: string }) => {
  const [posts, setPosts] = useState([]);

  const [text, setText] = useState("");

  const { currentUser } = useSelector((state: any) => state.user);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("http://localhost:8080/api/posts/profile/" + username)
        : await axios.get(
            "http://localhost:8080/api/posts/timeline/" + currentUser._id
          );
      setPosts(
        res.data.sort((p1: any, p2: any) => {
          let p1Time: any = new Date(p1.createdAt);
          let p2Time: any = new Date(p2.createdAt);
          return p2Time - p1Time;
        })
      );
    };
    currentUser && fetchPosts();
  }, []);

  return (
    <FeedContainer>
      <FeedWrapper>
        <Share />

        {posts.map((post: any, index: any) => {
          return <Post post={post} key={index} />;
        })}
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Feed;
