import styled from "styled-components";
import {Button} from "./Button/Button";
import {Dropdown} from "./Dropdown/Dropdown";

const {default: addNewIcon} = require("../../imgs/addNewIcon.svg");

const HeaderBlock = styled.div`
  position: absolute;
  width: 1547px;
  height: 80px;
  left: 373px;
  top: 0px;

  background: #FFFFFF;
  box-shadow: 0px 2px 4px #F0F1F2;
`

const LeftBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 363px;
  height: 40px;
  left: 20px;
  top: 20px;
`
const RightBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 284px;
  height: 40px;
  right: 20px;
  top: 20px;

`

export const Header = () => {

    return (
        <HeaderBlock>
            <LeftBlock>
                <Button label={"Add new"} iconPath={addNewIcon}/>
                <Dropdown label={"Kanban"} items={[]}/>
            </LeftBlock>

            <RightBlock/>
        </HeaderBlock>
    )
}