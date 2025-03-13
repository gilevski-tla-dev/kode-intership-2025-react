import styled from "styled-components";
import { useEffect, useRef } from "react";
import { setActiveTab } from "../model/searchFilterSlice";
import { useAppDispatch, useAppSelector } from "@/app/store/types";

interface TabProps {
  $active: boolean;
}

const TabsContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  margin-top: auto;
  scrollbar-width: none;
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.div<TabProps>`
  font-size: 15px;
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  color: ${(props) =>
    props.$active
      ? props.theme.colors.activeTab
      : props.theme.colors.inactiveTab};
  line-height: 20px;
  cursor: pointer;
  padding: 0 13px 10px 13px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`;

const Indicator = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #6534ff;
  transition: all 0.3s ease;
`;

const tabs = [
  "Все",
  "Android",
  "iOS",
  "Дизайн",
  "Менеджмент",
  "QA",
  "Бэк-офис",
  "Frontend",
  "HR",
  "PR",
  "Backend",
  "Техподдержка",
  "Аналитика",
];

export const DepartmentSelector = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.searchFilter.activeTab);
  const containerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateIndicatorPosition = () => {
      const container = containerRef.current;
      const indicator = indicatorRef.current;

      if (!container || !indicator) return;

      const activeTabElement = container.querySelector(
        `[data-active="true"]`
      ) as HTMLDivElement | null;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        indicator.style.left = `${offsetLeft}px`;
        indicator.style.width = `${offsetWidth}px`;
      }
    };

    updateIndicatorPosition();
  }, [activeTab]);

  // скролл колесиком мыши
  const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollBy({
      left: event.deltaY < 0 ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <TabsContainer ref={containerRef} onWheel={handleWheelScroll}>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          $active={activeTab === tab}
          onClick={() => dispatch(setActiveTab(tab))}
          data-active={activeTab === tab}
        >
          {tab}
        </Tab>
      ))}
      <Indicator ref={indicatorRef} />
    </TabsContainer>
  );
};

export default DepartmentSelector;
