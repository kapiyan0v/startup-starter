import style from './css/style.module.scss'
import {Link} from "react-router-dom";

export const Navbar = () => {

  const navs = [
    {
      title: 'Home',
      value: 'test1'
    },
    {
      title: 'Settings',
      value: 'test2'
    }
  ]

  return(
    <div className={style.navbar}>
      <h1 className={style.title}>EaTinDer</h1>
      <div className={style.navMain}>
        {navs.map((item) => (
          <Link
            to={item.value}
            className={style.navItem}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}