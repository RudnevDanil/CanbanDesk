import {Outlet} from 'react-router-dom'
import {SideBar} from "../../components/SideBar/SideBar";
import {Tools} from "../../components/Tools/Tools";
import {Header} from "../../components/Header/Header";
import styled from "styled-components";


const HomeBlock = styled.div`
  width: 100vw;
  height: 100vh;
`
export const Home = () => {
    return (
        <HomeBlock>
            <SideBar/>
            {/*<Tools/>
            <Header/>
            <Outlet/>*/}
        </HomeBlock>
    )
}