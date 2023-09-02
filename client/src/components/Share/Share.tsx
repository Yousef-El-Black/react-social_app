import {
  ImportLabel,
  ShareBottom,
  ShareBtn,
  ShareContainer,
  ShareHr,
  ShareInput,
  ShareOption,
  ShareOptionText,
  ShareOptions,
  ShareProfileImg,
  ShareTop,
  ShareWrapper,
} from "./Share.styled";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Share = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState<any | null>(null);
  const [user, setUser] = useState<any | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newPost: any = {
      userId: currentUser._id,
      desc,
    };

    if (file) {
      const data = new FormData();
      const fileName = `${Date.now() + file.name}`.split(" ").join("");
      data.append("file", file);
      data.append("name", fileName);
      try {
        const res = await axios.post("http://localhost:8080/api/upload", data);
        newPost.img = res.data.filename;
      } catch (err) {}
    }

    try {
      await axios
        .post("http://localhost:8080/api/posts/", newPost)
        .then(() => window.location.reload());
    } catch (error) {
      alert("Something went Wrong!");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/users/" + currentUser._id
        );
        setUser(res.data);
      } catch (err) {}
    };
    if (currentUser) {
      fetchUser();
    }
  }, [currentUser]);

  return (
    <ShareContainer>
      <ShareWrapper>
        <ShareTop>
          <ShareProfileImg
            src={
              user && user.profilePicture !== ""
                ? "http://localhost:8080/images/" + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="Avatar"
          />
          <ShareInput
            placeholder="What's in Your Mind?"
            value={desc}
            onChange={(e: any) => setDesc(e.target.value)}
          />
        </ShareTop>
        <ShareHr />
        <ShareBottom>
          <ShareOptions>
            <ShareOption>
              <ImportLabel htmlFor="file">
                <PermMediaIcon
                  htmlColor="tomato"
                  style={{ fontSize: "18px", marginRight: "3px" }}
                />
                <input
                  type="file"
                  id="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e: any) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <ShareOptionText>Photo or Video</ShareOptionText>
              </ImportLabel>
            </ShareOption>
            <ShareOption>
              <LabelIcon
                htmlColor="blue"
                style={{ fontSize: "18px", marginRight: "3px" }}
              />
              <ShareOptionText>Tag</ShareOptionText>
            </ShareOption>
            <ShareOption>
              <RoomIcon
                htmlColor="green"
                style={{ fontSize: "18px", marginRight: "3px" }}
              />
              <ShareOptionText>Location</ShareOptionText>
            </ShareOption>
            <ShareOption>
              <EmojiEmotionsIcon
                htmlColor="goldenrod"
                style={{ fontSize: "18px", marginRight: "3px" }}
              />
              <ShareOptionText>Feelings</ShareOptionText>
            </ShareOption>
          </ShareOptions>
          <ShareBtn onClick={handleSubmit}>Share</ShareBtn>
        </ShareBottom>
      </ShareWrapper>
    </ShareContainer>
  );
};

export default Share;
