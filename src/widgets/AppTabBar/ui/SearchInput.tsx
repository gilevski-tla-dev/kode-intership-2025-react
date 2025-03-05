import styled from "styled-components";

const SearchInput = () => {
  const Input = styled.input`
    height: 40px;
    background-color: #f7f7f8;
    border: none;
    border-radius: 16px;
    padding: 8px 12px 8px 12px;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
  `;

  return <Input placeholder="Введи имя, тег, почту..."></Input>;
};

export default SearchInput;
