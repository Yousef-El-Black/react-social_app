import {
  FriendName,
  GiftIcon,
  OnlineFriends,
  OnlineFriendsHeading,
  OnlineFriendsList,
  OnlineFriendsListItem,
  OnlineFriendsProfileImg,
  OnlineFriendsProfileImgContainer,
  OnlineFriendsUsername,
  OnlineMark,
  RightbarAdImg,
  RightbarContainer,
  RightbarFriendEvents,
  RightbarFriendEventsText,
  RightbarWrapper,
} from "./Rightbar.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Rightbar = () => {
  const [friends, setFriends] = useState<any>([]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { currentUser } = useSelector((state: any) => state.user);

  useEffect(() => {
    // FIXME: Handle Friends
    if (currentUser) {
      const getFriends = async () => {
        const res = await axios.get(
          "http://localhost:8080/api/users/friends/" + currentUser._id
        );
        setFriends(res.data);
      };
      getFriends();
    }
  }, []);

  return (
    <RightbarContainer>
      <RightbarWrapper>
        <RightbarFriendEvents>
          <GiftIcon src="/assets/gift.png" />
          <RightbarFriendEventsText>
            <FriendName>Pola Foster</FriendName> and{" "}
            <FriendName>3 other friends</FriendName> have a birthday today.
          </RightbarFriendEventsText>
        </RightbarFriendEvents>

        <RightbarAdImg src="/assets/ad.png" />

        <OnlineFriends>
          <OnlineFriendsHeading>Online Friends</OnlineFriendsHeading>
          <OnlineFriendsList>
            {friends.length > 0 &&
              friends.map((item: any) => {
                return (
                  <OnlineFriendsListItem key={item._id}>
                    <OnlineFriendsProfileImgContainer>
                      <OnlineFriendsProfileImg
                        src={
                          item.profilePicture !== ""
                            ? "http://localhost:8080/images/" +
                              item.profilePicture
                            : "/assets/person/noAvatar.png"
                        }
                      />
                      {/* <OnlineMark></OnlineMark> */}
                    </OnlineFriendsProfileImgContainer>
                    <OnlineFriendsUsername>
                      {item.username}
                    </OnlineFriendsUsername>
                  </OnlineFriendsListItem>
                );
              })}
          </OnlineFriendsList>
        </OnlineFriends>
      </RightbarWrapper>
    </RightbarContainer>
  );
};

export default Rightbar;
