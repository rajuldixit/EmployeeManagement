import TextField from "@mui/material/TextField";
import React from "react";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn
} from "react-hook-form";
import { INewEmployee } from "utils/interfaces";

interface Props {
  name: string;
  label: string;
  control: any;
  errors: any;
  fullwidth?: boolean;
  type?: string;
}

const FormInput: React.FC<Props> = ({
  name,
  label,
  control,
  errors,
  fullwidth = false,
  type = "text"
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: true, minLength: 2 }}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState
        }) => (
          <TextField
            type={type}
            helperText={error ? error.message : null}
            size="small"
            fullWidth={fullwidth}
            error={!!error}
            onChange={onChange}
            value={value}
            label={label}
            variant="outlined"
          />
        )}
      />

      {errors[name] && (
        <span style={{ color: "red" }} role="alert">
          required
        </span>
      )}
    </>
  );
};

export default FormInput;
