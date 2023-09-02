import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  ProfileWrapper,
  ProfileContainer,
  ProfileTop,
  ProfileBottom,
  ProfileCoverContainer,
  ProfileCover,
  ProfilePic,
  ProfileUser,
  ProfileName,
  ProfileAbout,
  ProfileBottomLeft,
  ProfileBottomRight,
  Details,
  DetailsHead,
  DetailsList,
  DetailsListItem,
  DetailsListItemKey,
  DetailsListItemValue,
  FollowBtn,
  ChangeCover,
  ChangeCoverOptions,
  ChangeCoverBtn,
  ProfilePicContainer,
  ChangeProfilePic,
} from "./Profile.styled";
import { useState, useEffect } from "react";
import Feed from "../../components/Feed/Feed";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const [user, setUser] = useState<any | null>(null);
  const [isFollowed, setIsFollowed] = useState(false);
  const [cover, setCover] = useState<any>(null);
  const [coverName, setCoverName] = useState("");
  const [profileImg, setProfileImg] = useState<any>(null);
  const [profileImgName, setProfileImgName] = useState("");
  const username = useParams().username;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER || "";

  const { currentUser } = useSelector((state: any) => state.user);

  const handleFollow = async () => {
    !isFollowed
      ? await axios.post(
          `http://localhost:8080/api/users/${user._id}/follow`,
          {
            userId: currentUser._id,
          },
          { headers: { Authorization: `Bearer ${currentUser.accessToken}` } }
        )
      : await axios.post(
          `http://localhost:8080/api/users/${user._id}/unfollow`,
          { userId: currentUser._id },
          { headers: { Authorization: `Bearer ${currentUser.accessToken}` } }
        );
    setIsFollowed(!isFollowed);
  };

  const submitCover = async (e: any) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:8080/api/users/" + user._id,
        {
          coverPicture: coverName,
        },
        { headers: { Authorization: `Bearer ${currentUser.accessToken}` } }
      );
    } catch (err) {
    } finally {
      window.location.reload();
    }
  };

  const submitProfileImg = async () => {
    try {
      await axios.put(
        "http://localhost:8080/api/users/" + user._id,
        {
          profilePicture: profileImgName,
        },
        { headers: { Authorization: `Bearer ${currentUser.accessToken}` } }
      );
    } catch (err) {
    } finally {
      window.location.reload();
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        "http://localhost:8080/api/users/profile/" + username
      );
      setUser(res.data);
      setIsFollowed(res.data.followers.includes(currentUser._id));
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    const previewCover = async () => {
      if (cover) {
        const data = new FormData();
        const coverName = `${Date.now() + cover.name}`.split(" ").join("");
        data.append("file", cover);
        data.append("name", coverName);
        try {
          const res = await axios.post(
            "http://localhost:8080/api/upload",
            data
          );
          setCoverName(res.data.filename);
        } catch (err) {}
      }
    };
    previewCover();
  }, [cover]);

  useEffect(() => {
    const previewProfileImg = async () => {
      if (profileImg) {
        const data = new FormData();
        const profileImgName = `${Date.now() + profileImg.name}`
          .split(" ")
          .join("");
        data.append("file", profileImg);
        data.append("name", profileImgName);
        try {
          const res = await axios.post(
            "http://localhost:8080/api/upload",
            data
          );
          setProfileImgName(res.data.filename);
        } catch (err) {}
      }
    };
    previewProfileImg();
  }, [profileImg]);

  useEffect(() => {
    if (profileImgName !== "") {
      if (window.confirm("Do you really want to change the Profile Picture?")) {
        submitProfileImg();
        window.location.reload();
      } else {
        window.location.reload();
      }
    }
  }, [profileImgName]);

  return (
    <Layout>
      <ProfileContainer>
        <Sidebar />
        <ProfileWrapper>
          <ProfileTop>
            <ProfileCoverContainer>
              <ProfileCover
                src={
                  coverName !== ""
                    ? `http://localhost:8080/images/${coverName}`
                    : user && user.coverPicture !== ""
                    ? `http://localhost:8080/images/${user.coverPicture}`
                    : PF + "person/noCover.jpg"
                }
              />
              {user && username && user.username === username && (
                <ChangeCover>
                  <input
                    type="file"
                    id="cover"
                    style={{ display: "none" }}
                    onChange={(e: any) => setCover(e.target.files[0])}
                  />
                  <label
                    htmlFor="cover"
                    style={{
                      display: `${cover ? "none" : "block"}`,
                      textAlign: "center",
                    }}
                  >
                    Change Cover
                  </label>
                  <ChangeCoverOptions
                    style={{ display: `${!cover ? "none" : "flex"}` }}
                  >
                    <ChangeCoverBtn onClick={submitCover}>Save</ChangeCoverBtn>
                    <ChangeCoverBtn onClick={() => window.location.reload()}>
                      Cancel
                    </ChangeCoverBtn>
                  </ChangeCoverOptions>
                </ChangeCover>
              )}
            </ProfileCoverContainer>
            <ProfilePicContainer>
              <ProfilePic
                src={
                  profileImgName !== ""
                    ? `http://localhost:8080/images/${profileImgName}`
                    : user && user.profilePicture !== ""
                    ? `http://localhost:8080/images/${user.profilePicture}`
                    : PF + "person/noAvatar.png"
                }
              />
              <input
                type="file"
                id="profile"
                onChange={(e: any) => setProfileImg(e.target.files[0])}
                style={{ display: "none" }}
              />
              <ChangeProfilePic htmlFor="profile">
                Chnage Image
              </ChangeProfilePic>
            </ProfilePicContainer>

            <ProfileUser>
              <ProfileName>{user ? user.name : ""}</ProfileName>
              <ProfileAbout>
                {user && user.about && user.about !== "" ? user.about : ""}
              </ProfileAbout>
            </ProfileUser>
          </ProfileTop>

          <ProfileBottom>
            <ProfileBottomLeft>
              <Feed username={username} />
            </ProfileBottomLeft>
            <ProfileBottomRight>
              {currentUser && username && username !== currentUser.username && (
                <FollowBtn onClick={handleFollow}>
                  {isFollowed ? "Unfollow" : "Follow"}
                </FollowBtn>
              )}
              {user && user.userInfo && (
                <Details>
                  <DetailsHead>User information</DetailsHead>
                  <DetailsList>
                    <DetailsListItem>
                      <DetailsListItemKey>City:</DetailsListItemKey>
                      <DetailsListItemValue>
                        {user ? user.userInfo.city : ""}
                      </DetailsListItemValue>
                    </DetailsListItem>
                    <DetailsListItem>
                      <DetailsListItemKey>From:</DetailsListItemKey>
                      <DetailsListItemValue>
                        {user ? user.userInfo.from : ""}
                      </DetailsListItemValue>
                    </DetailsListItem>
                    <DetailsListItem>
                      <DetailsListItemKey>Relationship:</DetailsListItemKey>
                      <DetailsListItemValue>
                        {user ? user.userInfo.relationship : ""}
                      </DetailsListItemValue>
                    </DetailsListItem>
                  </DetailsList>
                </Details>
              )}
              {user && user.userContact && (
                <Details>
                  <DetailsHead>Contact</DetailsHead>
                  <DetailsList>
                    <DetailsListItem>
                      <DetailsListItemKey>Phone:</DetailsListItemKey>
                      <DetailsListItemValue>
                        {user ? user.userContact.phone : ""}
                      </DetailsListItemValue>
                    </DetailsListItem>
                    <DetailsListItem>
                      <DetailsListItemKey>Email:</DetailsListItemKey>
                      <DetailsListItemValue>
                        {user ? user.userContact.email : ""}
                      </DetailsListItemValue>
                    </DetailsListItem>
                    <DetailsListItem>
                      <DetailsListItemKey>Address:</DetailsListItemKey>
                      <DetailsListItemValue>
                        {user ? user.userContact.address : ""}
                      </DetailsListItemValue>
                    </DetailsListItem>
                  </DetailsList>
                </Details>
              )}
              {user && user.family && (
                <Details>
                  <DetailsHead>Family</DetailsHead>
                  <DetailsList>
                    {user.family.map((item: any, index: number) => {
                      return (
                        <DetailsListItem key={index}>
                          <DetailsListItemKey>{item.key}:</DetailsListItemKey>
                          <DetailsListItemValue>
                            {item.value}
                          </DetailsListItemValue>
                        </DetailsListItem>
                      );
                    })}
                  </DetailsList>
                </Details>
              )}
            </ProfileBottomRight>
          </ProfileBottom>
        </ProfileWrapper>
      </ProfileContainer>
    </Layout>
  );
};

export default Profile;
