import styled from "styled-components";
import {Search} from "./Search/Search";
import {Workspace} from "./Workspace/Workspace";

const {default: logoPath} = require("../../imgs/bordio-logo.svg");

const SideBarStyle = styled.div`
  background: #0F1D40;
  width: 11%;
  height: 100%;
`

const SideBarLogo = styled.img`
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  
  max-width: calc(100% - 2rem);
  max-height: 2rem;
`

export const SideBar = () => {

    return (
        <SideBarStyle>
            <SideBarLogo src={logoPath} alt="..."/>

            <Search/>

            <Workspace/>

        </SideBarStyle>
    )
}