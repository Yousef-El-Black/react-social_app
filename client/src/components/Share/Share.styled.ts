import styled from "styled-components";
import { mobile } from "../../responsive";

export const ShareContainer = styled.div`
  width: 100%;
  min-height: 170px;
  border-radius: 10px;
  box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
`;

export const ShareWrapper = styled.div`
  padding: 10px;
`;

export const ShareTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ShareProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ShareInput = styled.input`
  border: none;
  width: 80%;

  &:focus {
    outline: none;
  }
`;

export const ShareHr = styled.hr`
  margin: 20px;
`;

export const ShareBottom = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ flexDirection: "column", alignItems: "center" })}
`;

export const ShareOptions = styled.div`
  display: flex;
  margin-left: 20px;

  ${mobile({ flexDirection: "column", width: "100%" })}
`;

export const ShareOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;

  ${mobile({ marginBottom: "10px" })}
`;

export const ImportLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ShareOptionText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const ShareBtn = styled.button`
  border: none;
  padding: 7px;
  border-radius: 5px;
  background-color: green;
  font-weight: 500;
  margin-right: 20px;
  color: white;
  cursor: pointer;
`;
