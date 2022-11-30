import styled from "styled-components";

const {default: avatarPath} = require("../../../../imgs/userAvatar.svg");

const MyWorkspaceBlock = styled.div`
  width: 100%;
  height: 2.125rem;
  margin-top: 1.2rem;
  background: #2D4071;
  display: flex;
  //justify-content: center;
  align-items: center;
`

const Avatar = styled.img`
  height: 1.375rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
`

const MyWorkspaceText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #FFFFFF;
`

export function MyWorkspace() {

    return (
        <MyWorkspaceBlock>
            <Avatar src={avatarPath} alt="..."/>
            <MyWorkspaceText>My workspace</MyWorkspaceText>
        </MyWorkspaceBlock>
    )
}