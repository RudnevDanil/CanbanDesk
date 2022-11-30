import styled from "styled-components";

const {default: searchIcon} = require("../../../imgs/searchIcon.svg");

const SearchBlock = styled.div`
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  
  width: calc(100% - 2rem);
  height: 2rem;
  
  background: #2D4071;
  border-radius: 4px;

  display: flex;
  align-items: center;
  
`

const SearchPlaceholder = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  width: calc(100% - 2rem);
  color: #8C939F;
  margin-left: 0.5rem;
  /*&:after {
    content: " 🦄";
  }*/
`
const SearchInputIcon = styled.img`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`

export function Search() {

    return (
        <SearchBlock>
            <SearchPlaceholder>Search...</SearchPlaceholder>
            <SearchInputIcon src={searchIcon} alt="..."/>
        </SearchBlock>
    )
}