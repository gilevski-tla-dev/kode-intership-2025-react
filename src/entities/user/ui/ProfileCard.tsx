import styled, { useTheme } from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import mockAvatar from "/mockAvatar.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  cursor: pointer;
  transition: background-color 0.2s;
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

const StyledImage = styled.img<{ $isLoading?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #f0f0f0;
  display: ${(props) => (props.$isLoading ? "none" : "block")};
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
  color: ${(props) => props.theme.colors.primaryText};
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
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();

  // Сбрасываем loaded при изменении avatarUrl или loading
  useEffect(() => {
    setLoaded(false);
  }, [avatarUrl, loading]);

  const handleClick = () => {
    if (!loading && id) {
      navigate(`/profile/${id}`);
    }
  };

  return (
    <Card onClick={handleClick}>
      <ImageContainer>
        {/* Скелетон отображается, если loading или (!loaded && !avatarUrl) */}
        {(loading || (!loaded && !avatarUrl)) && (
          <Skeleton
            circle
            width={72}
            height={72}
            baseColor={theme.colors.skeletonBaseColor}
            highlightColor={theme.colors.skeletonHighlightColor}
          />
        )}

        {/* Изображение рендерится только если !loading */}
        {!loading && (
          <StyledImage
            src={avatarUrl || mockAvatar}
            alt={`${firstName} ${lastName}`}
            $isLoading={!loaded}
            onLoad={() => setLoaded(true)}
            onError={(e) => {
              console.error("Image load error:", e);
              e.currentTarget.src = mockAvatar;
            }}
          />
        )}
      </ImageContainer>

      <InfoContainer>
        {loading ? (
          <>
            <Skeleton
              borderRadius={50}
              width={144}
              height={16}
              baseColor={theme.colors.skeletonBaseColor}
              highlightColor={theme.colors.skeletonHighlightColor}
            />
            <Skeleton
              borderRadius={50}
              width={80}
              height={12}
              baseColor={theme.colors.skeletonBaseColor}
              highlightColor={theme.colors.skeletonHighlightColor}
            />
          </>
        ) : (
          <>
            <TopRow>
              <Name>{`${firstName} ${lastName}`}</Name>
              <Usertag>{userTag}</Usertag>
            </TopRow>
            <Position>{position}</Position>
          </>
        )}
      </InfoContainer>
      {birthday && <Birthday>{birthday}</Birthday>}
    </Card>
  );
};

export default ProfileCard;
