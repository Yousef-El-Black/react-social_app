import Topbar from "../Topbar/Topbar";
import { LayoutContainer } from "./Layout.styled";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = ({ children }: any) => {
  const user = useSelector((state: any) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    user && user.currentUser === null && navigate("/login");
  }, []);

  return (
    <LayoutContainer>
      <Topbar />
      {children}
      <MobileMenu />
    </LayoutContainer>
  );
};

export default Layout;
