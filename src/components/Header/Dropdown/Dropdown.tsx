import styled from "styled-components";

const {default: arrowDown} = require("../../../imgs/arrowDown.svg");

export type TDropdownItem = {
    value: number,
    label: string,
}
export type TDropdown = {
    label: string,
    items: TDropdownItem[],
}

const DropdownBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px 8px 20px;
  gap: 8px;

  width: 114px;
  height: 40px;

  background: #F5F8FA;
  border-radius: 50px;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
`

const LabelBlock = styled.div`
  width: 48px;
  height: 16px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;

  /* Black/Main Black */

  color: #222222;

`

export const Dropdown = ({label, items}: TDropdown) => {

    return (
        <DropdownBlock>
            <LabelBlock>{label}</LabelBlock>
            <Icon src={arrowDown} alt={"..."}/>
        </DropdownBlock>
    )
}