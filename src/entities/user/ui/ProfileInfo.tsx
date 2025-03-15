import React from "react";
import styled, { useTheme } from "styled-components";
import PhoneIcon from "@/shared/assets/PhoneIcon";
import StarIcon from "@/shared/assets/StarIcon";
import { useTranslation } from "react-i18next";
import {
  calculateAge,
  formatPhoneNumber,
  getAgeSuffix,
  formatBirthday,
} from "../utils/utils";

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
  color: ${(props) => props.theme.colors.primaryText};
`;

const Age = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #97979b;
  margin-left: auto;
  margin-right: 4px;
`;

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  // Форматирование даты рождения
  const formattedBirthday = formatBirthday(user.birthday, t);

  // Вычисляем возраст
  const age = calculateAge(user.birthday);
  const ageSuffix = getAgeSuffix(age, t);

  // Форматируем телефон
  const formattedPhone = formatPhoneNumber(user.phone);

  // Создаем ссылку для звонка
  const phoneLink = `tel:${user.phone.replace(/\D/g, "")}`; // Удаляем все нецифровые символы

  return (
    <Container>
      <Block>
        <StarIcon color={theme.colors.icons} />
        <Text>{formattedBirthday}</Text>
        <Age>{`${age} ${ageSuffix}`}</Age>
      </Block>
      <Block as="a" href={phoneLink}>
        <PhoneIcon color={theme.colors.icons} />
        <Text>{formattedPhone}</Text>
      </Block>
    </Container>
  );
};

export default ProfileInfo;
