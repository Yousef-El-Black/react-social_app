import Layout from "../../components/Layout/Layout";
import {
  NotFoundContainer,
  NotFoundMainText,
  NotFoundWrapper,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <Layout>
      <NotFoundContainer>
        <NotFoundWrapper>
          <NotFoundMainText>El-Black Social | 404 Not Found</NotFoundMainText>
        </NotFoundWrapper>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFound;
