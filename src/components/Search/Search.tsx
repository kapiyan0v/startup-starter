import { TextField } from "@mui/material";
import { SearchProps } from "../../types";

export const Search = ({ width }: SearchProps) => {
  return (
    <>
      <TextField
        sx={{ width: `${width}px`, color: "#fafafa"}}
        placeholder="Поиск"
        size="small"
        color="primary"
      />
    </>
  )
}