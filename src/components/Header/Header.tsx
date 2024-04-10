import style from './assets/css/style.module.scss'
import {Search} from "../Search/Search.tsx";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.search}>
          <Search width={200} />
        </div>
      </div>
    </div>
  )
}