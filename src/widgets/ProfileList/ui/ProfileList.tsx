import styled from "styled-components";
import { useUsers } from "../../../entities/user/api/fetchProfiles";
import { ProfileCard } from "../../../entities/user/ui/ProfileCard";
import ErrorRefetch from "@/shared/ui/ErrorRefetch";
import { useAppSelector } from "@/app/store/types";
import { selectFilters } from "@/features/SearchFilter/model/selectors";
import NotFound from "@/shared/ui/NotFound";
import { useSortedAndFilteredUsers } from "@/features/FilterModal/lib/useSortedAndFilteredUsers";

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

const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  color: #c3c3c6;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 100%;

  &::before {
    margin: 0 70px 0 24px;
  }

  &::after {
    margin: 0 24px 0 70px;
  }

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: #c3c3c6;
  }
`;
export const ProfileList = () => {
  const filters = useAppSelector(selectFilters);
  const { users, isLoading, refetch, error } = useUsers(filters.activeTab);

  const normalizedFilters = {
    searchQuery: filters.searchQuery,
    sortType: filters.sortType || "alphabet",
  };

  const { sortedUsersWithSeparators, formatDateForDisplay } =
    useSortedAndFilteredUsers(users, normalizedFilters);

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
  if (filters.searchQuery && sortedUsersWithSeparators.length === 0) {
    return (
      <CenteredContainer>
        <NotFound />
      </CenteredContainer>
    );
  }

  // Отображение списка пользователей
  return (
    <ListContainer>
      {sortedUsersWithSeparators.map((item, index) =>
        item.type === "separator" ? (
          <Separator key={`sep-${index}`}>
            {new Date().getFullYear() + 1}
          </Separator>
        ) : (
          <ProfileCard
            key={item.user.id}
            avatarUrl={item.user.avatarUrl}
            firstName={item.user.firstName}
            lastName={item.user.lastName}
            userTag={item.user.userTag}
            position={item.user.position}
            birthday={
              normalizedFilters.sortType === "birthDate"
                ? formatDateForDisplay(item.user.birthday)
                : undefined
            }
          />
        )
      )}
    </ListContainer>
  );
};

export default ProfileList;
