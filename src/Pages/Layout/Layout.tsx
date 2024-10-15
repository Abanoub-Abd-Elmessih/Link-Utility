import { Outlet } from "react-router-dom";
import OffcanvasComp from "../../Components/offcanvas/OffcanvasComp";

export default function Layout() {
  return (
    <div>
        <OffcanvasComp/>
        <Outlet/>
    </div>
  )
}
