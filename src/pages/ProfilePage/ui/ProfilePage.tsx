import { useParams } from "react-router-dom";
import { useUsers } from "@/entities/user/api/fetchProfiles";
import ErrorRefetch from "@/shared/ui/ErrorRefetch";
import styled from "styled-components";
import NotFound from "@/shared/ui/NotFound";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 280px;
  background-color: #f7f7f8;
`;

const Avatar = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  display: block;
  box-shadow: 0px 8px 12px 0px #161e3414;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #050510;
`;

const Position = styled.p`
  color: #55555c;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
`;

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { users, isLoading, error, refetch } = useUsers("all");
  const user = users?.find((user) => user.id === id);

  if (isLoading) {
    return (
      <>
        <h1>Загрузка профиля...</h1>
      </>
    );
  }

  if (error) {
    return (
      <>
        <ErrorRefetch onRefetch={refetch} />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <Container>
      <TopBlock>
        <Avatar
          src={user.avatarUrl}
          alt={`${user.firstName} ${user.lastName}`}
        />

        <Name>{`${user.firstName} ${user.lastName} ${user.userTag}`}</Name>
        <Position>{user.position}</Position>
      </TopBlock>
      {/* <Avatar src={user.avatarUrl} alt={`${user.firstName} ${user.lastName}`} />
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <p>Должность: {user.position}</p>
      <p>Телефон: {user.phone}</p>
      <p>Дата рождения: {new Date(user.birthday).toLocaleDateString()}</p>
      <p>Никнейм: @{user.userTag}</p> */}
    </Container>
  );
};

export default ProfilePage;
