import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import mockAvatar from "@/shared/assets/mockAvatar.png";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 16px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

const Name = styled.p`
  color: #050510;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

const Usertag = styled.p`
  color: #97979b;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-transform: lowercase;
`;

const Position = styled.p`
  color: #55555c;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
`;

const Birthday = styled.p`
  margin-left: auto;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #55555c;
`;

interface ProfileCardProps {
  id?: string;
  loading?: boolean;
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  userTag?: string;
  position?: string;
  birthday?: string;
}

export const ProfileCard = ({
  id,
  loading,
  avatarUrl,
  firstName,
  lastName,
  userTag,
  position,
  birthday,
}: ProfileCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!loading && id) {
      navigate(`/profile/${id}`);
    }
  };

  return (
    <Card onClick={handleClick}>
      {loading ? (
        <Skeleton
          circle
          width={72}
          height={72}
          baseColor="#FAFAFA"
          highlightColor="#F3F3F6"
        />
      ) : (
        <ImageContainer>
          <StyledImage
            src={avatarUrl || mockAvatar}
            alt={`${firstName} ${lastName}`}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = mockAvatar;
            }}
          />
        </ImageContainer>
      )}

      <InfoContainer>
        <TopRow>
          {loading ? (
            <Skeleton
              borderRadius={50}
              width={144}
              height={16}
              baseColor="#FAFAFA"
              highlightColor="#F3F3F6"
            />
          ) : (
            <>
              <Name>{`${firstName} ${lastName}`}</Name>
              <Usertag>{userTag}</Usertag>
            </>
          )}
        </TopRow>

        {loading ? (
          <Skeleton
            borderRadius={50}
            width={80}
            height={12}
            baseColor="#FAFAFA"
            highlightColor="#F3F3F6"
          />
        ) : (
          <>
            <Position>{position}</Position>
          </>
        )}
      </InfoContainer>
      {birthday && <Birthday>{birthday}</Birthday>}
    </Card>
  );
};

export default ProfileCard;
