/* eslint-disable react/prop-types */
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
      <p className="font-medium text-sm mt-3">{name}</p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            width: width,  // Ensure the width is responsive
            height: "30px",
            marginBottom: "20px",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          size="small"
          placeholder={placeholder}
          variant="outlined"
          type={type}
          value={value}
          onChange={onChange}
          helperText={helperText}
          error={error}
          required={required ?? null}
        />
      </Box>
    </div>
  );
}