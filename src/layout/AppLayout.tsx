import Navbar from "@/components/Navbar.tsx";
import {Outlet} from "react-router-dom";
const AppLayout = () => {
    return (
       <>
           <Navbar/>
           <Outlet/>
       </>
    )
}
export default AppLayout
