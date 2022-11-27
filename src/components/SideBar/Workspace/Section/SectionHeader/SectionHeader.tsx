import styled from "styled-components";

const {default: arrowDown} = require("../../../../../imgs/arrowDown.svg");

const SectionHeaderBlock = styled.div`
  position: relative;
  width: 187px;
  height: 24px;
`

const LeftBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  position: absolute;
  //width: 90px;
  height: 24px;
  left: 0px;
  top: 0px;
`

const LabelBlock = styled.div`
  //width: 58px;
  height: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`

const Arrow = styled.img`
  width: 24px;
  height: 24px;
`

export function SectionHeader({label} : {label: string}) {

    return (
        <SectionHeaderBlock>
            <LeftBlock>
                <Arrow src={arrowDown} alt="..."/>
                <LabelBlock>{label}</LabelBlock>
            </LeftBlock>
        </SectionHeaderBlock>
    )
}