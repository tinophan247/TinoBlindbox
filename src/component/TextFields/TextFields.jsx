/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextFields({
  name,
  placeholder = "Vui lòng nhập ...",
  type = "text",
  value,
  onChange,
  helperText,
  error,
  required = false,
  width = "100%",
}) {
  return (
    <div>
      <p className="font-medium text-sm mt-3 mb-1">{name}</p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            width: width, 
            height: "30px",
          },
        }}
      >
        <TextField
          size="small"
          placeholder={placeholder}
          variant="outlined"
          type={type}
          value={value}
          onChange={onChange}
          error={error}
          required={required ?? null}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "14px", 
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
              color: "gray",
            },
            width: "100%", 
            minWidth: "300px",
          }}
        />
        {helperText && (
          <Typography
            variant="body2"
            sx={{
              color: error ? "error.main" : "text.secondary",
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            {helperText}
          </Typography>
        )}
      </Box>
    </div>
  );
}