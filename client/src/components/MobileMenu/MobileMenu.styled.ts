import styled from "styled-components";
import { mobile } from "../../responsive";

export const SearchContainer = styled.div`
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: 0.3s;
`;

export const SearchInput = styled.input`
  width: calc(100% - 50px);
  height: 100%;
  text-indent: 15px;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const CloseIconContainer = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: white;
  cursor: pointer;
`;

export const SearchIconContainer = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  right: 60px;
  cursor: pointer;
`;

export const MobileMenuContainer = styled.div`
  display: none;
  position: fixed;
  bottom: 0px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.36);
  background-color: #1877f2;
  margin: 0;
  padding: 0;
  z-index: 999;

  ${mobile({ display: "block" })}
`;

export const MobileMenuWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MobileMenuIcon = styled.div`
  color: white;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
