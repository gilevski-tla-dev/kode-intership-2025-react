import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card = styled.div`
  display: flex;
  align-items: center;
  height: 84px;
  padding-left: 16px;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #000;
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
`;

const Position = styled.p`
  color: #55555c;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
`;

const loading = false; // Флаг загрузки

export const ProfileCard = () => {
  return (
    <Card>
      {loading ? (
        <Skeleton
          circle
          width={72}
          height={72}
          baseColor="#FAFAFA"
          highlightColor="#F3F3F6"
        />
      ) : (
        <ImageContainer></ImageContainer>
      )}

      <InfoContainer>
        <TopRow>
          {loading ? (
            <>
              <Skeleton
                borderRadius={50}
                width={144}
                height={16}
                baseColor="#FAFAFA"
                highlightColor="#F3F3F6"
              />
            </>
          ) : (
            <>
              <Name>Name</Name>
              <Usertag>Роль</Usertag>
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
          <Position>Должность</Position>
        )}
      </InfoContainer>
    </Card>
  );
};

export default ProfileCard;
