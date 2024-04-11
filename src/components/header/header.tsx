import style from './css/style.module.scss'
import {Divider} from "@mui/material";

export const Header = () => {
  return(
    <div className={style.header}>
      <h1>Header</h1>
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        className={style.divider}
      />
    </div>
  )
}