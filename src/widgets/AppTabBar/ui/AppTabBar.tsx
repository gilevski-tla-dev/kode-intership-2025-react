import styled from "styled-components";
import SearchInput from "./SearchInput";
import DepartmentSelector from "./DepartmentSelector";
import { useState } from "react";

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
`;

export const AppTabBar = () => {
  const [activeTab, setActiveTab] = useState<string>("Все");

  return (
    <Container>
      <Title>Поиск</Title>
      <SearchInput />
      <DepartmentSelector activeTab={activeTab} onTabChange={setActiveTab} />
    </Container>
  );
};

export default AppTabBar;
