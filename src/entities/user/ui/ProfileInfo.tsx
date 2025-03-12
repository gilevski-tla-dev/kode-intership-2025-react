import { FC } from "react";
import styled from "styled-components";
import PhoneIcon from "@/shared/assets/PhoneIcon";
import StarIcon from "@/shared/assets/StarIcon";
import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import { calculateAge, formatPhoneNumber, getAgeSuffix } from "../utils/utils";

interface ProfileInfoProps {
  user: {
    birthday: string;
    phone: string;
  };
}

const Container = styled.div`
  height: 126px;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 6px;
  padding: 0px 16px 0px 16px;
`;

const Block = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;

const Text = styled.p`
  margin-left: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
`;

const Age = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #97979b;
  margin-left: auto;
  margin-right: 4px;
`;

export const ProfileInfo: FC<ProfileInfoProps> = ({ user }) => {
  // Форматирование даты рождения
  const formattedBirthday = format(parseISO(user.birthday), "d MMMM yyyy", {
    locale: ru,
  });

  // Вычисляем возраст
  const age = calculateAge(user.birthday);

  // Форматируем телефон
  const formattedPhone = formatPhoneNumber(user.phone);

  // Создаем ссылку для звонка
  const phoneLink = `tel:${user.phone}`; // Удаляем все нецифровые символы

  return (
    <Container>
      <Block>
        <StarIcon />
        <Text>{formattedBirthday}</Text>
        <Age>{`${age} ${getAgeSuffix(age)}`}</Age>
      </Block>
      <Block as="a" href={phoneLink}>
        <PhoneIcon />
        <Text>{formattedPhone}</Text>
      </Block>
    </Container>
  );
};

export default ProfileInfo;
