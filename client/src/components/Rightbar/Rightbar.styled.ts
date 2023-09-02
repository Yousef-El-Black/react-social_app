import styled from "styled-components";
import { mobile } from "../../responsive";

export const RightbarContainer = styled.div`
  flex: 3.5;
  overflow-y: scroll;
  height: calc(100vh - 50px);

  ${mobile({ display: "none" })}
`;

export const RightbarWrapper = styled.div`
  padding: 20px;
`;

export const RightbarFriendEvents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const GiftIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 15px;
`;

export const RightbarFriendEventsText = styled.p``;

export const FriendName = styled.span`
  font-weight: bold;
`;

export const RightbarAdImg = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const OnlineFriends = styled.div``;

export const OnlineFriendsHeading = styled.h3`
  margin-bottom: 15px;
`;

export const OnlineFriendsList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const OnlineFriendsListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 15px;
`;

export const OnlineFriendsProfileImgContainer = styled.div`
  position: relative;
`;

export const OnlineFriendsProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

export const OnlineMark = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  position: absolute;
  top: -5%;
  right: 25%;
  background-color: green;
  border: 3px solid white;
`;

export const OnlineFriendsUsername = styled.span``;
