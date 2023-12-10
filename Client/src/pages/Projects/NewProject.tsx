import {
  Typography,
  Container,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  styled
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const FormPaper = styled(Paper)(({ theme }) => ({
  width: 520,
  height: 400,
  backgroundColor: "rgba(255, 255, 255, 0.13)",
  padding: 10,
  boxSizing: "border-box",
  border: "1px solid lightgrey"
}));
interface INewProject {
  name: string;
  description: string;
  duration: string;
  startDate: string;
  employees: [];
}

const NewProject = () => {
  const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm<INewProject>(),
    onSubmit = handleSubmit(async (data: INewProject) => {
      // await getUser({ email: data.email, password: data.password });
    });
  return (
    <>
      <Typography textAlign={"center"} variant="h5">
        Add New Project
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          height: "100%"
        }}
      >
        <FormPaper variant="elevation">
          <form onSubmit={onSubmit}>
            <Stack p={2} flexDirection={"row"}>
              <TextField
                required
                type="name"
                label="Name"
                defaultValue="Name"
                {...register("name")}
              />
              <TextField
                required
                type="duration"
                label="Duration"
                defaultValue="Duration"
                {...register("duration")}
              />
            </Stack>
            <Stack p={2} flexDirection={"row"}>
              <TextField
                required
                type="startDate"
                label="StartDate"
                defaultValue="StartDate"
                {...register("startDate")}
              />
              <TextField
                required
                type="employees"
                label="Employees"
                defaultValue="Employees"
                {...register("employees")}
              />
            </Stack>
            <Stack flexDirection={"row"}>
              <TextField
                required
                type="description"
                label="Description"
                defaultValue="Description"
                {...register("description")}
              />
            </Stack>
            <Stack p={2} flexDirection={"row"} justifyContent={"center"}>
              <Button type="button" variant="outlined">
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Stack>
          </form>
        </FormPaper>
      </Container>
    </>
  );
};

export default NewProject;
