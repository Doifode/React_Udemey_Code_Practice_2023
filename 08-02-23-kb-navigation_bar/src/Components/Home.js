import { Outlet } from "react-router-dom";
import NaviGatioBar from "./SideBar";
function Home() {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-md-2">
            <NaviGatioBar />
          </div>
          <div className="col-md-10 p-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
