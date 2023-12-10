import {
  Stack,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  styled,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
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

interface IEmployeeForm {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  role: string;
  gender: string;
}

const Onboarding = () => {
  const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm<IEmployeeForm>(),
    onSubmit = handleSubmit(async (data: IEmployeeForm) => {
      // await getUser({ email: data.email, password: data.password });
    });
  const [role, setRole] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };
  const [gender, setGender] = React.useState("");

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  return (
    <>
      <Typography textAlign={"center"} variant="h5">
        New Employee Onboarding
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
                type="firstname"
                label="Firstname"
                defaultValue="Firstname"
                {...register("firstname")}
              />
              <TextField
                required
                type="lastname"
                label="Lastname"
                defaultValue="Lastname"
                {...register("lastname")}
              />
            </Stack>
            <Stack p={2} flexDirection={"row"}>
              <TextField
                required
                type="username"
                label="Username"
                defaultValue="Username"
                {...register("username")}
              />
              <TextField
                required
                type="email"
                label="Email"
                defaultValue="Email"
                {...register("email")}
              />
            </Stack>
            <Stack flexDirection={"row"}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>Employee</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleGenderChange}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack p={2} flexDirection={"row"} justifyContent={"center"}>
              <Button type="button" variant="outlined">
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Register
              </Button>
            </Stack>
          </form>
        </FormPaper>
      </Container>
    </>
  );
};

export default Onboarding;
