import {
  SidebarButton,
  SidebarContainer,
  SidebarFriend,
  SidebarFriendImg,
  SidebarFriendList,
  SidebarFriendName,
  SidebarHr,
  SidebarList,
  SidebarListItem,
  SidebarListItemText,
  SidebarWrapper,
} from "./Sidebar.styled";

import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { friendsData } from "../../dummyData";

const Sidebar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarList>
          <SidebarListItem>
            <RssFeedIcon style={{ marginRight: "15px" }} />
            <SidebarListItemText>Feed</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <ChatIcon style={{ marginRight: "15px" }} />
            <SidebarListItemText>Chat</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <PlayCircleIcon style={{ marginRight: "15px" }} />
            <SidebarListItemText>Videos</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <GroupIcon style={{ marginRight: "15px" }} />
            <SidebarListItemText>Groups</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <BookmarkIcon style={{ marginRight: "15px" }} />
            <SidebarListItemText>Bookmarks</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <HelpOutlineIcon style={{ marginRight: "15px" }} />
            <SidebarListItemText>Questions</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <WorkOutlineIcon style={{ marginRight: "15px" }} />
            <SidebarListItemText>Jobs</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <EventIcon style={{ marginRight: "15px" }} />
            <SidebarListItemText>Events</SidebarListItemText>
          </SidebarListItem>

          <SidebarListItem>
            <SchoolIcon style={{ marginRight: "15px" }} />
            <SidebarListItemText>Courses</SidebarListItemText>
          </SidebarListItem>
        </SidebarList>
        <SidebarButton>Show More</SidebarButton>
        <SidebarHr />
        <SidebarFriendList>
          {friendsData.map((item: any, index: number) => {
            return (
              <SidebarFriend key={index}>
                <SidebarFriendImg src={PF + item.img} />
                <SidebarFriendName>{item.name}</SidebarFriendName>
              </SidebarFriend>
            );
          })}
        </SidebarFriendList>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
