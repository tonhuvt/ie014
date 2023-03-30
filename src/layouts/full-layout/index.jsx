import "./styles.scss"
import {Header, Footer} from "../../components";
import { Outlet } from "react-router-dom";
const FullLayout = () =>{
    return (
    <>
        <Header />
        <div className="content">
            <Outlet />
        </div>
        <Footer />
    </>
    )
}

export default FullLayout;