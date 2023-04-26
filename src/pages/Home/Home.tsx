import { motion } from "framer-motion";
import myPicture from "../../assets/DSC_1317.jpg";
import { secondaryColor } from "../../consts/colors";
import styled from "styled-components";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Wrapper>
        <PictureContainer>
          <Picture src={myPicture} alt="Photo" />
          <TitleName>Tomas Krinickas</TitleName>
          <SubTitle>Front-End Developer</SubTitle>
        </PictureContainer>
      </Wrapper>
    </motion.div>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  height: 80vh;
`;

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Picture = styled.img`
  height: 300px;
  border-radius: 50%;
`;

const TitleName = styled.h1`
  font-size: 2.5rem;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: ${secondaryColor};
`;
