import SearchIcon from "@/shared/assets/SearchIcon";
import FilterIcon from "@/shared/assets/FilterIcon";
import styled from "styled-components";
import { useAppDispatch } from "@/app/store/types";
import { setSearchQuery } from "../model/searchFilterSlice";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useState, useEffect } from "react";
import FilterModal from "@/features/FilterModal/ui/FilterModal";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-top: 15px;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  background-color: #f7f7f8;
  border: none;
  border-radius: 16px;
  padding: 8px 12px 8px 44px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  box-sizing: border-box;
  color: #c3c3c6;
  caret-color: #6534ff;

  &:focus {
    outline: none;
    color: #050510;
  }

  &::placeholder {
    color: #c3c3c6;
    transition: opacity 0.1s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${Wrapper}:has(${Input}:focus) & svg {
    fill: #050510;
  }
`;

const FilterIconWrapper = styled.div`
  right: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const debouncedValue = useDebounce<string>(inputValue, 300);

  useEffect(() => {
    dispatch(setSearchQuery(debouncedValue));
  }, [debouncedValue, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <IconWrapper>
        <SearchIcon color="#C3C3C6" />
      </IconWrapper>
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder="Введи имя, тег, почту..."
      />
      <FilterIconWrapper onClick={() => setIsFilterOpen(true)}>
        <FilterIcon />
      </FilterIconWrapper>

      {/* Модальное окно */}
      {isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} />}
    </Wrapper>
  );
};

export default SearchInput;
