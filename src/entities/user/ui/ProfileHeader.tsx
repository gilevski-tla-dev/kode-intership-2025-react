import styled, { useTheme } from "styled-components";
import ArrowIcon from "@/shared/assets/ArrowIcon";
import mockAvatar from "@/shared/assets/mockAvatar.png";
import { FC, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ProfileHeaderProps {
  user: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
    userTag: string;
    position: string;
  };
  onBack: () => void;
}

const TopBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 280px;
  background-color: ${(props) => props.theme.colors.profileHeader};
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 24px;
  top: 22px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const AvatarImage = styled.img`
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
  color: ${(props) => props.theme.colors.primaryText};
`;

const UserDetails = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`;

const UserTag = styled.span`
  color: #97979b;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  text-transform: lowercase;
  align-self: center;
`;

const Position = styled.p`
  color: ${(props) => props.theme.colors.secondaryText};
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 12px;
`;

export const ProfileHeader: FC<ProfileHeaderProps> = ({ user, onBack }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const theme = useTheme();

  return (
    <TopBlock>
      {/* Иконка назад */}
      <IconWrapper onClick={onBack}>
        <ArrowIcon color={theme.colors.icons} />
      </IconWrapper>

      {/* Аватар */}
      <div style={{ marginTop: "72px" }}>
        {!isLoaded && (
          <Skeleton
            circle
            width={104}
            height={104}
            baseColor={theme.colors.skeletonBaseColor}
            highlightColor={theme.colors.skeletonHighlightColor}
          />
        )}
        <AvatarImage
          src={hasError ? mockAvatar : user.avatarUrl}
          alt={`${user.firstName} ${user.lastName}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setIsLoaded(true);
            setHasError(true);
          }}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>

      {/* Имя и тег пользователя */}
      <UserDetails>
        <Name>{`${user.firstName} ${user.lastName}`}</Name>
        <UserTag>{user.userTag}</UserTag>
      </UserDetails>

      {/* Должность */}
      <Position>{user.position}</Position>
    </TopBlock>
  );
};

export default ProfileHeader;
