import {
  Form,
  Input,
  LoginBtn,
  RegisterContainer,
  RegisterLeft,
  RegisterRight,
  RegisterWrapper,
  Logo,
  RegisterBtn,
  Text,
} from "./Register.styled";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const { currentUser } = useSelector((state: any) => state.user);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      username &&
      email &&
      password === confirmedPassword &&
      password.length >= 6
    ) {
      await axios
        .post("http://localhost:8080/api/auth/register", {
          username,
          email,
          password,
        })
        .then(() => {
          navigate("/login");
        });
    } else {
      alert("Something went Wrong!");
    }
  };

  currentUser !== null && <Navigate to="/" replace />;

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterLeft>
          <Logo>ElBlacksocial</Logo>
          <Text>
            Connect with friends and the world around you on ElBlacksocial
          </Text>
        </RegisterLeft>

        <RegisterRight>
          <Form>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Password Again"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
            <RegisterBtn onClick={handleSubmit}>Sign Up</RegisterBtn>
            <Link
              to={"/login"}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <LoginBtn>Log into Account</LoginBtn>
            </Link>
          </Form>
        </RegisterRight>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default Register;
