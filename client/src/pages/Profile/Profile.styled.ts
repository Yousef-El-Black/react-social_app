import styled from "styled-components";
import { mobile } from "../../responsive";

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  flex: 9;
`;

export const ProfileTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 500px;

  ${mobile({ height: "400px" })}
`;

export const ProfileCoverContainer = styled.div`
  height: 300px;
  width: 100%;
  position: relative;
`;

export const ProfileCover = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ChangeCover = styled.div`
  width: 120px;
  padding: 10px 0;
  background-color: #1877f2;
  border-radius: 10px;
  color: white;
  position: absolute;
  top: calc(100% - 10px);
  transform: translateY(-100%);
  margin-left: 10px;
  cursor: pointer;
  overflow: hidden;
`;

export const ChangeCoverOptions = styled.div`
  display: flex;
`;

export const ChangeCoverBtn = styled.button`
  flex: 1;
  border-top: none;
  border-left: none;
  border-bottom: none;
  background-color: transparent;
  text-align: center;
  color: white;
  width: 100%;
  cursor: pointer;

  &:nth-child(1) {
    border-right: 1px solid black;
  }

  &:nth-child(2) {
    border-right: none;
  }
`;

export const ProfilePicContainer = styled.div`
  position: relative;
  display: block;
  width: 200px !important;
  height: 200px !important;
  border-radius: 50%;
  transform: translateY(-100px);
  margin-left: auto;
  margin-right: auto;
  border: 3px solid white;
  overflow: hidden;
  box-sizing: content-box;

  &:hover > label {
    transform: translateY(0);
  }
`;

export const ProfilePic = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  position: relative;
`;

export const ChangeProfilePic = styled.label`
  transform: translateY(100%);
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  transition: 1s;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  cursor: pointer;
`;

export const ProfileUser = styled.div`
  text-align: center;
  transform: translateY(-100px);
`;

export const ProfileName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProfileAbout = styled.p`
  font-size: 16px;
  color: gray;
  width: 50%;
  margin-right: auto;
  margin-left: auto;

  ${mobile({ width: "90%" })}
`;

export const ProfileBottom = styled.div`
  display: flex;
  padding: 0 20px 20px;

  ${mobile({ flexDirection: "column-reverse" })}
`;

export const ProfileBottomLeft = styled.div`
  flex: 3;
  margin-bottom: 20px;
`;

export const ProfileBottomRight = styled.div`
  flex: 2;
  margin-bottom: 20px;

  ${mobile({
    backgroundColor: "#ddd",
    marginTop: "20px",
    borderRadius: "10px",
  })}
`;

export const FollowBtn = styled.button`
  margin: 20px;
  width: calc(100% - 40px);
  padding: 10px;
  background-color: #1877f2;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Details = styled.div`
  padding: 10px 20px;

  ${mobile({ margin: "20px 0" })}
`;

export const DetailsHead = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const DetailsList = styled.ul`
  margin-left: 15px;
`;

export const DetailsListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

export const DetailsListItemKey = styled.span`
  margin-right: 5px;
  color: gray;
  font-weight: 500;
`;

export const DetailsListItemValue = styled.span`
  color: black;
  font-weight: 300;
`;
