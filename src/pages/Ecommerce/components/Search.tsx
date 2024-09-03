import React, { FC, useState } from 'react'
import styled from 'styled-components';
import css from 'classnames';
import { LuSearch } from "react-icons/lu";
const SearchContainer = styled.div`
  align-items: center;
  /* border: 1px solid #efeeee; */
  border-radius: 8px;
  width: max-content;
  padding: 4px 0.75rem;
  height: 32px;
  color: #ccc;
  background: rgba(219, 219, 219, 0.40);

  input {
    background-color: transparent;
    border: 0px;
    font-size: 14px;
    color: #bebcbc;

    width: max-content;
    &:hover,
    &:focus-visible,
    &:focus {
      border: none;
      outline: none;
    }


    &::placeholder{
      color: #ccc;
    }
  }

  .search-icon {
    color: #ffffff;
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
    <SearchContainer className='fl'>
      <input placeholder={placeHolderText??'Search...'} onChange={inputChangeHandler} />
    <LuSearch className={css('search-icon',{'hide':!inputText})} onClick={()=> (console.log(inputText),onSearch(inputText))} />
    </SearchContainer>
  )
}
export default Search