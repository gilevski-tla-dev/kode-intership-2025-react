import styled from "styled-components";
import SearchInput from "../../../features/SearchFilter/ui/SearchInput";
import DepartmentSelector from "../../../features/SearchFilter/ui/DepartmentSelector";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 152px;
  width: 100%;
  border-bottom: 0.5px solid #97979b;
  padding: 16px 16px 0px 16px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  margin-left: 8px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const AppTabBar = () => {
  return (
    <Container>
      <Title>Поиск</Title>
      <SearchInput />
      <DepartmentSelector />
    </Container>
  );
};

export default AppTabBar;
