import styled from "styled-components";
import { useUsers } from "../api/fetchProfiles";
import { ProfileCard } from "./ProfileCard";
import ErrorRefetch from "@/shared/ui/ErrorRefetch";
import { useDepartment } from "@/app/providers/DepartmentContext";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`;

export const ProfileList = () => {
  const { activeTab } = useDepartment();
  const { users, isLoading, refetch, error } = useUsers(activeTab);

  // Состояние загрузки
  if (isLoading) {
    return (
      <ListContainer>
        {Array.from({ length: 15 }).map((_, index) => (
          <ProfileCard key={index} loading />
        ))}
      </ListContainer>
    );
  }

  // Состояние ошибки
  if (error) {
    return (
      <CenteredContainer>
        <ErrorRefetch onRefetch={refetch} />
      </CenteredContainer>
    );
  }

  // Отображение списка пользователей
  return (
    <ListContainer>
      {users?.map((user) => (
        <ProfileCard
          key={user.id}
          avatarUrl={user.avatarUrl}
          firstName={user.firstName}
          lastName={user.lastName}
          userTag={user.userTag}
          position={user.position}
        />
      ))}
    </ListContainer>
  );
};

export default ProfileList;
