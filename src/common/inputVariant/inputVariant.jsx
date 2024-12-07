import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const InputVariant = ({
  value,
  onChange,
  placeholder = "Search...",
  type = "text",
  ...rest
}) => {
  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      fullWidth
      className={`border border-custom-grey-1 bg-white rounded-[12px]`}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
        style: {
          borderRadius: "12px",
          height: "44px",
          fontSize: "12px",
        },
      }}
      inputProps={{
        style: {
          fontSize: "12px",
        },
      }}
      {...rest}
    />
  );
};

export default InputVariant;
