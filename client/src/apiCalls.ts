import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./redux/userSlice";

export const loginCall = async (userCredential: any, dispatch: any) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "http://localhost:8080/api/auth/login",
      userCredential
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
