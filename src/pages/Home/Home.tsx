import {Outlet} from 'react-router-dom'
import {SideBar} from "../../components/SideBar/SideBar";

export const Home = () => {
    return (
        <div>
            <SideBar/>
            <Outlet/>
        </div>
    )
}