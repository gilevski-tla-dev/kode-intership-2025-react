import styled from "styled-components";
import SearchInput from "./SearchInput";

export const AppTabBar = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 152px;
    width: 100%;
    border: 1px solid #000;
    padding: 16px;
  `;

  const Title = styled.h1`
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
  `;

  return (
    <Container>
      <Title>Поиск</Title>
      <SearchInput />
    </Container>
  );
};

export default AppTabBar;
