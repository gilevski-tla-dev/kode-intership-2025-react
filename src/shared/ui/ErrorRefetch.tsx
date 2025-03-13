import styled from "styled-components";
import fetchErrorIcon from "@/shared/assets/fetchError.png";

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

const Button = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #6534ff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

interface ErrorRefetchProps {
  onRefetch: () => void;
}

const ErrorRefetch = ({ onRefetch }: ErrorRefetchProps) => {
  return (
    <Container>
      <StyledImage src={fetchErrorIcon} alt="Ошибка загрузки" />

      <InfoContainer>
        <Title>Какой-то сверхразум все сломал</Title>
        <Text>Постараемся быстро починить</Text>
        {/* onRefetch при клике */}
        <Button onClick={onRefetch}>Попробовать снова</Button>
      </InfoContainer>
    </Container>
  );
};

export default ErrorRefetch;
