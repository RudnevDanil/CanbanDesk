import styled from "styled-components";
import {Search} from "./Search/Search";
import {Workspace} from "./Workspace/Workspace";

const {default: logoPath} = require("../../imgs/bordio-logo.svg");

const SideBarStyle = styled.div`
  position: absolute;
  width: 219px;
  height: 978px;
  left: 0px;
  top: 0px;

  background: #0F1D40;
`

const SideBarLogo = styled.div`
  position: absolute;
  width: 131px;
  height: 32px;
  left: 16px;
  top: 26px;
`

export const SideBar = () => {

    return (
        <SideBarStyle>
            <SideBarLogo>
                <img src={logoPath} alt="..."/>
            </SideBarLogo>

            <Search/>

            <Workspace/>

        </SideBarStyle>
    )
}