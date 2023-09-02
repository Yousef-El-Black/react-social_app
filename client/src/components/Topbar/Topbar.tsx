import {
  TopbarContainer,
  TopbarLeft,
  TopbarCenter,
  TopbarRight,
  Logo,
  Searchbar,
  SearchInput,
  TopbarLinks,
  TopbarLink,
  TopbarIcons,
  TopbarIconItem,
  TopbarIconBadge,
  TopbarImg,
} from "./Topbar.styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useEffect, useState } from "react";
import axios from "axios";

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { currentUser } = useSelector((state: any) => state.user);
  const [user, setUser] = useState<any>(null);

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
      <TopbarContainer>
        <TopbarLeft>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Logo>elblacksocial</Logo>
          </Link>
        </TopbarLeft>
        <TopbarCenter>
          <Searchbar>
            <SearchIcon style={{ fontSize: "24px", marginLeft: "10px" }} />
            <SearchInput placeholder="Search for friend, post or video" />
          </Searchbar>
        </TopbarCenter>
        <TopbarRight>
          <TopbarLinks>
            <TopbarLink>Homepage</TopbarLink>
            <TopbarLink>Timeline</TopbarLink>
          </TopbarLinks>
          <TopbarIcons>
            <TopbarIconItem>
              <PersonIcon />
              <TopbarIconBadge>1</TopbarIconBadge>
            </TopbarIconItem>
            <TopbarIconItem>
              <ChatIcon />
              <TopbarIconBadge>2</TopbarIconBadge>
            </TopbarIconItem>
            <TopbarIconItem>
              <NotificationsIcon />
              <TopbarIconBadge>1</TopbarIconBadge>
            </TopbarIconItem>
          </TopbarIcons>
          <Link
            to={
              currentUser
                ? currentUser.username && "/profile/" + currentUser.username
                : "/login"
            }
            style={{ textDecoration: "none" }}
          >
            <TopbarImg
              src={
                user && user.profilePicture !== ""
                  ? "http://localhost:8080/images/" + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
            />
          </Link>
        </TopbarRight>
      </TopbarContainer>
    </>
  );
};

export default Topbar;
