import { parseISO, differenceInYears } from "date-fns";

// Функция для правильного склонения слова "год"
export const getAgeSuffix = (age: number): string => {
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "лет";
  }

  if (lastDigit === 1) {
    return "год";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "года";
  }

  return "лет";
};

// Функция для расчета возраста
export const calculateAge = (birthday: string): number => {
  const birthDate = parseISO(birthday);
  const today = new Date();
  return differenceInYears(today, birthDate);
};

// Функция для форматирования телефона
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, ""); // убираем все нецифровые символы
  const match = cleaned.match(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
  }
  return phone; // исходный номер, если формат неверный
};
