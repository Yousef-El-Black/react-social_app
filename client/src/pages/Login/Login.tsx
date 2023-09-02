import { useDispatch, useSelector } from "react-redux";
import {
  ForgetPassword,
  Form,
  Input,
  LoginBtn,
  LoginContainer,
  LoginLeft,
  LoginRight,
  LoginWrapper,
  Logo,
  RegisterBtn,
  Text,
} from "./Login.styled";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const { currentUser } = useSelector((state: any) => state.user);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    email &&
      password &&
      email !== "" &&
      password !== "" &&
      loginCall({ email, password }, dispatch).then(() => {
        navigate("/");
      });
  };

  currentUser !== null && <Navigate to="/" replace />;

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginLeft>
          <Logo>ElBlacksocial</Logo>
          <Text>
            Connect with friends and the world around you on ElBlacksocial
          </Text>
        </LoginLeft>

        <LoginRight>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <LoginBtn>Log In</LoginBtn>
            <ForgetPassword>Forget Password?</ForgetPassword>
            <Link
              to={"/register"}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <RegisterBtn>Create a New Account</RegisterBtn>
            </Link>
          </Form>
        </LoginRight>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
