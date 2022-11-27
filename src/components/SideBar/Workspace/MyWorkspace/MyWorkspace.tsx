import styled from "styled-components";

const {default: avatarPath} = require("../../../../imgs/userAvatar.svg");

const MyWorkspaceBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-bottom: 11px;
  gap: 8px;

  width: 121px;
  height: 24px;
  
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

const Avatar = styled.img`
  width: 22px;
  height: 22px;

  //background: url(.svg);
  
  flex: none;
  order: 0;
  flex-grow: 0;
`

const MyWorkspaceText = styled.div`
  width: 91px;
  height: 16px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #FFFFFF;
  
  flex: none;
  order: 1;
  flex-grow: 0;
`

export function MyWorkspace() {

    return (
        <MyWorkspaceBlock>
            <Avatar src={avatarPath} alt="..."/>
            <MyWorkspaceText>My workspace</MyWorkspaceText>
        </MyWorkspaceBlock>
    )
}