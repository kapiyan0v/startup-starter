import { TextField } from "@mui/material";
import { SearchProps } from "../../types";

export const Search = ({ width }: SearchProps) => {

  return (
    <>
      <TextField
        id="outlined-basic"
        variant="outlined"
        color="primary"
        focused
        sx={{ width: `${width}px` }}
      />
    </>
  )
}