import {Outlet} from 'react-router-dom'
import {SideBar} from "../../components/SideBar/SideBar";
import {Tools} from "../../components/Tools/Tools";

export const Home = () => {
    return (
        <div>
            <SideBar/>
            <Tools/>
            <Outlet/>
        </div>
    )
}