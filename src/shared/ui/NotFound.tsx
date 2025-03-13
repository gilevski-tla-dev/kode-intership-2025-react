import styled from "styled-components";
import notFoundIcon from "@/shared/assets/notFound.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const StyledImage = styled.img`
  width: 56px;
  height: auto;
  margin-bottom: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  color: ${(props) => props.theme.colors.primaryText};
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #97979b;
`;

const NotFound = () => {
  return (
    <Container>
      <StyledImage src={notFoundIcon} alt="Мы никого не нашли" />

      <InfoContainer>
        <Title>Мы никого не нашли</Title>
        <Text>Попробуй скорректировать запрос</Text>
      </InfoContainer>
    </Container>
  );
};

export default NotFound;
