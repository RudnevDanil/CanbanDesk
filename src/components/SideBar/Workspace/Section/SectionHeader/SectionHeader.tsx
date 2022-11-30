import styled from "styled-components";

const {default: arrowDown} = require("../../../../../imgs/arrowDown.svg");

const SectionHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.125rem;
`

const LabelBlock = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  margin-left: 0.5rem;
`

const Arrow = styled.img`
  height: 1.5rem;
`

export function SectionHeader({label} : {label: string}) {

    return (
        <SectionHeaderBlock>
            <Arrow src={arrowDown} alt="..."/>
            <LabelBlock>{label}</LabelBlock>
        </SectionHeaderBlock>
    )
}