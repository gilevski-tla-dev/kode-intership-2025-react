import DepartmentSelector from "@/features/SearchFilter/ui/DepartmentSelector";
import SearchInput from "@/features/SearchFilter/ui/SearchInput";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div<{ $isOffline: boolean; $isReconnecting: boolean }>`
  display: flex;
  flex-direction: column;
  height: 108px;
  width: 100%;
  background-color: ${(props) => {
    if (props.$isOffline) return "#F44336"; // Красный фон при офлайне
    if (props.$isReconnecting) return "#6534FF"; // Фиолетовый фон при восстановлении
    return "transparent";
  }};
  transition: background-color 1s ease;
`;

const TopContainer = styled.div`
  margin: 16px 16px 0px 16px;
`;

const Title = styled.h1<{ $isOffline: boolean; $isReconnecting: boolean }>`
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  margin-left: 8px;
  color: ${(props) =>
    props.$isOffline || props.$isReconnecting
      ? "#ffffff"
      : props.theme.colors.primaryText};
`;

const OfflineMessage = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: #ffffff;
  margin-left: 8px;
  margin-top: 20px;
`;

export const AppTabBar = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isReconnecting, setIsReconnecting] = useState(false);
  const queryClient = useQueryClient(); // Получаем экземпляр queryClient

  // Обработчик изменения состояния сети
  useEffect(() => {
    const handleOnline = () => {
      setIsReconnecting(true); // Устанавливаем флаг восстановления
      setIsOnline(true);

      queryClient.invalidateQueries({ queryKey: ["users"] });
      // Через 3 секунды возвращаемся к нормальному состоянию
      setTimeout(() => {
        setIsReconnecting(false);
      }, 3000);
    };

    const handleOffline = () => {
      setIsReconnecting(false); // сброс флага восстановления
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [queryClient]);

  return (
    <>
      <Container $isOffline={!isOnline} $isReconnecting={isReconnecting}>
        <TopContainer>
          <Title $isOffline={!isOnline} $isReconnecting={isReconnecting}>
            Поиск
          </Title>
          {isOnline && !isReconnecting ? (
            <SearchInput />
          ) : isOnline && isReconnecting ? (
            <OfflineMessage>Секундочку, гружусь...</OfflineMessage>
          ) : (
            <OfflineMessage>
              Не могу обновить данные. Проверь соединение с интернетом.
            </OfflineMessage>
          )}
        </TopContainer>
      </Container>

      <DepartmentSelector />
    </>
  );
};

export default AppTabBar;
