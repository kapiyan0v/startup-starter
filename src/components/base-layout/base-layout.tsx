import {Header} from "../header";
import {Navbar} from "../navbar";
import style from './assets/css/style.module.scss'
import {Outlet} from "react-router-dom";

export const BaseLayout = () => {
  return(
    <div className={style.main}>
      <Navbar />
      <div className={style.outlet}>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}