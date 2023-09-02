import {
  HeartIcon,
  LikeCounter,
  MenuOption,
  MoreOptionsMenu,
  PostBottom,
  PostBottomLeft,
  PostBottomRight,
  PostCenter,
  PostContainer,
  PostDate,
  PostImg,
  PostProfileImg,
  PostText,
  PostTop,
  PostTopLeft,
  PostTopRight,
  PostUsername,
  PostWrapper,
} from "./Post.styled";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { format } from "timeago.js";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = ({
  post,
}: {
  post: {
    _id: string;
    desc: string;
    name: string;
    userId: string;
    userImg: string;
    img: string;
    likes: string[];
    createdAt: string;
    comments: [{ date: string; content: string }];
  };
}) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const menuRef: any = useRef(null);
  const { currentUser } = useSelector((state: any) => state.user);

  const likeHandler = async () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    await axios.put(`http://localhost:8080/api/posts/${post._id}/like`, {
      userId: currentUser._id,
    });
  };

  const toggleIsMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleDeletePost = async () => {
    await axios.delete("http://localhost:8080/api/posts/" + post._id);
    setIsDeleted(true);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/users/${post.userId}`
      );
      setUser(res.data);
    };
    post.userId && fetchUser();
  }, []);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, []);

  return (
    <PostContainer style={{ display: `${isDeleted ? "none" : "block"}` }}>
      <PostWrapper>
        <PostTop>
          <PostTopLeft>
            <Link to={`/profile/${user && user.username}`}>
              <PostProfileImg
                src={
                  (user &&
                    "http://localhost:8080/images/" + user.profilePicture) ||
                  PF + "person/noAvatar.png"
                }
              />
            </Link>
            <PostUsername>{user && user.username}</PostUsername>
            <PostDate>{format(post.createdAt)}</PostDate>
          </PostTopLeft>
          <PostTopRight>
            {!isMenuOpen ? (
              <MoreVertIcon
                style={{ cursor: "pointer" }}
                onClick={toggleIsMenuOpen}
              />
            ) : (
              <CloseIcon
                style={{ cursor: "pointer" }}
                onClick={toggleIsMenuOpen}
              />
            )}
            <MoreOptionsMenu
              ref={menuRef}
              style={{ display: `${isMenuOpen ? "block" : "none"}` }}
              onFocus={toggleIsMenuOpen}
            >
              {post.userId === currentUser._id && (
                <MenuOption onClick={handleDeletePost}>Delete</MenuOption>
              )}
            </MoreOptionsMenu>
          </PostTopRight>
        </PostTop>

        <PostCenter>
          <PostText>{post?.desc}</PostText>
          {post.img !== undefined && (
            <PostImg src={"http://localhost:8080/images/" + post.img} alt="" />
          )}
        </PostCenter>

        <PostBottom>
          <PostBottomLeft>
            <HeartIcon
              color={isLiked ? "red" : "#ddd"}
              onClick={likeHandler}
            ></HeartIcon>
            <LikeCounter>{like} people like it</LikeCounter>
          </PostBottomLeft>
          <PostBottomRight>comments</PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
};

export default Post;
