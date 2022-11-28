import styled from "styled-components";
import {TTool} from "../Tools";

const ToolBlock = styled.div<{isActive: boolean}>`
  position: relative;
  width: 154px;
  height: 978px;
  //left: 219px;
  top: 0px;

  background: #F5F8FA;
  color: ${props => props.isActive ? "#0094FF" : "#222222"}
`

const LabelBlock = styled.div`
  position: absolute;
  width: 86px;
  height: 16px;
  left: 48px;
  top: 17px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  //color: #222222;
`

const ActiveMarker = styled.div`
  position: absolute;
  width: 4.12px;
  height: 50px;
  left: 0px;
  top: 0px;

  background: #0094FF;
  border-radius: 0px 10px 10px 0px;
`

const Icon = styled.img`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 10px;
  top: 11px;
`

export const Tool = (
    {
        tool: {label, iconPath},
        isActive
    }: {
        tool: TTool,
        isActive: boolean
    }) => {

    return (
        <ToolBlock isActive={isActive}>
            {isActive && <ActiveMarker/>}
            <Icon src={iconPath} alt={"..."}/>
            <LabelBlock>{label}</LabelBlock>
        </ToolBlock>
    )
}