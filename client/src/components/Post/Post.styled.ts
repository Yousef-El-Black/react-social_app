import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`;

export const PostWrapper = styled.div`
  padding: 10px;
`;

export const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const PostTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const PostProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PostUsername = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
`;

export const PostDate = styled.span`
  font-size: 12px;
`;

export const PostTopRight = styled.div`
  position: relative;
`;

export const MoreOptionsMenu = styled.ul`
  width: 100px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 30px;
`;

export const MenuOption = styled.li`
  cursor: pointer;
  padding: 10px;
  width: 100%;
  text-align: center;
  list-style-type: none;
  transition: 0.3s;
  background-color: white;

  &:hover {
    background-color: #eee;
  }
`;

export const PostCenter = styled.div`
  margin: 10px 5px;
`;

export const PostText = styled.span``;

export const PostImg = styled.img`
  margin-top: 15px;
  width: 100%;
  object-fit: cover;
`;

export const PostBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
`;

export const PostBottomLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeartIcon = styled.div`
  position: relative;
  width: 25px;
  height: 22.5px;
  margin-top: 2.5px;
  margin-right: 5px;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 13px;
    height: 20px;
    border-radius: 12.5px 12.5px 0 0;
    background: ${(props) => props.color};
  }

  &::before {
    left: 12.5px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

export const LikeIcon = styled.img`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.25;
  cursor: pointer;
`;

export const LikeCounter = styled.span`
  font-weight: 500;
`;

export const PostBottomRight = styled.div`
  border-bottom: 1px dotted black;
  cursor: pointer;
`;
