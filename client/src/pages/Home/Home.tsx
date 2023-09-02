import Feed from "../../components/Feed/Feed";
import Layout from "../../components/Layout/Layout";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HomeContainer } from "./Home.styled";

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <Sidebar />
        <Feed />
        <Rightbar />
      </HomeContainer>
    </Layout>
  );
};

export default Home;
