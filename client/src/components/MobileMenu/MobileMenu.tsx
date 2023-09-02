import {
  SearchIconContainer,
  CloseIconContainer,
  MobileMenuContainer,
  MobileMenuIcon,
  MobileMenuWrapper,
  ProfileImg,
  SearchContainer,
  SearchInput,
} from "./MobileMenu.styled";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const MobileMenu = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  const { currentUser } = useSelector((state: any) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/users/" + currentUser._id
        );
        setUser(res.data);
      } catch (err) {}
    };
    if (currentUser) {
      fetchUser();
    }
  }, [currentUser]);

  return (
    <>
      <SearchContainer
        style={{
          width: `${isSearch ? "100%" : "0"}`,
          transform: `${isSearch ? "translateX(0)" : "translateX(-10px)"}`,
        }}
      >
        <SearchInput
          placeholder="Search for friend, post or video"
          onChange={(e: any) => setSearchText(e.target.value)}
        />
        <CloseIconContainer onClick={() => setIsSearch(false)}>
          <CloseIcon />
        </CloseIconContainer>
        <Link to={searchText === "" ? "/" : "/search/?key=" + searchText}>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
        </Link>
      </SearchContainer>
      <MobileMenuContainer>
        <MobileMenuWrapper>
          <MobileMenuIcon onClick={() => setIsSearch(true)}>
            <SearchIcon fontSize="large" />
          </MobileMenuIcon>
          <MobileMenuIcon>
            <ChatIcon fontSize="large" />
          </MobileMenuIcon>
          <MobileMenuIcon>
            <Link to={user && user.username && "/profile/" + user.username}>
              <ProfileImg
                src={
                  user && user.profilePicture
                    ? "http://localhost:8080/images/" + user.profilePicture
                    : "/assets/person/noAvatar.png"
                }
              />
            </Link>
          </MobileMenuIcon>
          <MobileMenuIcon>
            <NotificationsIcon fontSize="large" />
          </MobileMenuIcon>
          <Link to={"/"}>
            <MobileMenuIcon>
              <HomeIcon fontSize="large" />
            </MobileMenuIcon>
          </Link>
        </MobileMenuWrapper>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenu;
