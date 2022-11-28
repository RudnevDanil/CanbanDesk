import {Outlet} from 'react-router-dom'
import {SideBar} from "../../components/SideBar/SideBar";
import {Tools} from "../../components/Tools/Tools";
import {Header} from "../../components/Header/Header";

export const Home = () => {
    return (
        <div>
            <SideBar/>
            <Tools/>
            <Header/>
            <Outlet/>
        </div>
    )
}