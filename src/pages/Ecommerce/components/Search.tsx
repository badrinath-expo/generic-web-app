import { FC, useState } from 'react';
import styled from 'styled-components';
import css from 'classnames';
import { LuSearch } from "react-icons/lu";
const SearchContainer = styled.div`
  align-items: center;
  border-radius: 8px;
  width: max-content;
  padding: 4px 0.75rem;
  height: 32px;
  color: #ccc;
  background: hsla(0, 0%, 52.54901960784314%, 0.4);


  input {
    background-color: transparent;
    border: 0px;
    font-size: 14px;
    color: #595959;
    letter-spacing: 1px;

    width: max-content;
    &:hover,
    &:focus-visible,
    &:focus {
      border: none;
      outline: none;
    }


    &::placeholder{
      color: #585858;
    }
  }

  .search-icon {
    color: #282828;
    align-self: center;

    &:hover{
      color: #606060;  
    }
  }
`;
interface SearchProps {
    className?: string;
    onSearch:(inputTxt:string)=>void;
    placeHolderText?:string;
}


const Search:FC<SearchProps> = ({onSearch,className,placeHolderText}) =>{
const [inputText,setInputText] = useState('')
const inputChangeHandler = (e:any)=> setInputText(e.target.value)


  return (
    <SearchContainer className={css('fl',className)}>
      <input placeholder={placeHolderText??'Search...'} onChange={inputChangeHandler} />
    <LuSearch className={css('search-icon cp',{'vis-hide':!inputText})} onClick={()=> inputText && onSearch(inputText)} />
    </SearchContainer>
  )
}
export default Search