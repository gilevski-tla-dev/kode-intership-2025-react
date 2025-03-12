import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "@/entities/user/api/fetchProfiles";
import ErrorRefetch from "@/shared/ui/ErrorRefetch";
import styled from "styled-components";
import NotFound from "@/shared/ui/NotFound";
import ProfileHeader from "@/entities/user/ui/ProfileHeader";
import ArrowIcon from "@/shared/assets/ArrowIcon";
import { LoadingIndicator } from "@/shared/ui/LoadingIndicator";
import ProfileInfo from "@/entities/user/ui/ProfileInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const BackButton = styled.div`
  position: absolute;
  top: 22px;
  left: 24px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { users, isLoading, error, refetch } = useUsers("all");
  const user = users?.find((user) => user.id === id);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return (
      <CenteredContainer>
        {/* Кнопка "Назад" */}
        <BackButton onClick={() => navigate("/")}>
          <ArrowIcon />
        </BackButton>
        <ErrorRefetch onRefetch={refetch} />
      </CenteredContainer>
    );
  }

  if (!user) {
    return (
      <CenteredContainer>
        {/* Кнопка "Назад" */}
        <BackButton onClick={() => navigate("/")}>
          <ArrowIcon />
        </BackButton>
        <NotFound />
      </CenteredContainer>
    );
  }

  return (
    <Container>
      <ProfileHeader user={user} onBack={() => navigate("/")} />
      <ProfileInfo user={user} />
    </Container>
  );
};

export default ProfilePage;
