import styled from "styled-components";

const {default: searchIcon} = require("../../../imgs/searchIcon.svg");

const SearchBlock = styled.div`
  position: absolute;
  width: 187px;
  height: 32px;
  left: 16px;
  top: 84px;

  background: #2D4071;
  border-radius: 4px;
`

const SearchPlaceholder = styled.div`
  position: absolute;
  width: 143px;
  height: 14px;
  left: 10px;
  top: 9px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  color: #8C939F;
  /*&:after {
    content: " 🦄";
  }*/
`
const SearchInputIcon = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 8px;
  top: 8px;
`

export function Search() {

    return (
        <SearchBlock>
            <SearchPlaceholder>Search...</SearchPlaceholder>
            <SearchInputIcon src={searchIcon} alt="..."/>
        </SearchBlock>
    )
}