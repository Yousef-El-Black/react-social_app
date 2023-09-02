import styled from "styled-components";
import { mobile } from "../../responsive";

export const RegisterContainer = styled.div`
  background-color: #eee;
  min-height: 100vh;
`;

export const RegisterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;

  ${mobile({
    flexDirection: "column",
    gap: "0",
    justifyContent: "space-around",
  })}
`;

export const RegisterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.h1`
  color: #1877f2;
  font-size: 46px;
  width: 500px;
  margin-bottom: 10px;
  font-weight: bolder;

  ${mobile({ width: "100%", textAlign: "center", fontSize: "32px" })}
`;

export const Text = styled.p`
  font-size: 24px;
  width: 500px;

  ${mobile({
    width: "100%",
    textAlign: "center",
    fontSize: "18px",
    padding: "0 15px",
  })}
`;

export const RegisterRight = styled.div``;

export const Form = styled.form`
  width: 450px;
  height: 500px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  ${mobile({ width: "100%" })}
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid gray;
  color: black;
  font-size: 18px;
  text-indent: 5px;

  &:focus {
    outline: none;
  }
`;

export const RegisterBtn = styled.button`
  background-color: #1877f2;
  color: white;
  border: none;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  width: 80%;
  background-color: green;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
`;
