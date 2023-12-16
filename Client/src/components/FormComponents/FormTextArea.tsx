import TextField from "@mui/material/TextField";
import React from "react";

interface Props {
  label: string;
  placeholder: string;
  //   onChange?: () => {};
}

const FormTextArea: React.FC<Props> = ({ label, placeholder }) => {
  return (
    <TextField
      placeholder={placeholder}
      label={label}
      multiline
      rows={2}
      maxRows={4}
    />
  );
};

export default FormTextArea;
