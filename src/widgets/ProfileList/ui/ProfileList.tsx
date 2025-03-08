import styled from "styled-components";
import { useUsers } from "../../../entities/user/api/fetchProfiles";
import { ProfileCard } from "../../../entities/user/ui/ProfileCard";
import ErrorRefetch from "@/shared/ui/ErrorRefetch";
import { useAppSelector } from "@/app/store/types";
import { selectFilters } from "@/features/SearchFilter/model/selectors";
import NotFound from "@/shared/ui/NotFound";

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
  const filters = useAppSelector(selectFilters);
  const { users, isLoading, refetch, error } = useUsers(filters.activeTab);

  // Фильтрация пользователей
  const filteredUsers = users?.filter((user) => {
    const { firstName, lastName, userTag } = user;
    const query = filters.searchQuery;

    return (
      firstName.toLowerCase().includes(query) ||
      lastName.toLowerCase().includes(query) ||
      userTag.toLowerCase().includes(query)
    );
  });

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

  // Состояние когда не найден ни один профиль
  if (filters.searchQuery && filteredUsers?.length === 0) {
    return (
      <CenteredContainer>
        <NotFound />
      </CenteredContainer>
    );
  }

  // Отображение списка пользователей
  return (
    <ListContainer>
      {filteredUsers?.map((user) => (
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
