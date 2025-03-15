import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoadingIndicator = () => {
  const { t } = useTranslation();

  return (
    <LoadingContainer>
      <Spinner />
      <p style={{ marginTop: "16px", fontSize: "16px", color: "#666" }}>
        {t("loadingindicator.message")}
      </p>
    </LoadingContainer>
  );
};
