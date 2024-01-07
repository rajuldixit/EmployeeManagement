import { Button, Container, Stack, Typography } from "@mui/material";
import FormDropdown from "components/FormComponents/FormDropdown";
import FormInput from "components/FormComponents/FormInput";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { INewEmployee } from "utils/interfaces";

const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  userType: "",
  gender: "",
  city: "",
  country: "",
  postcode: "",
  street: "",
  dob: new Date(),
  countryCode: "",
  phoneNumber: "",
  role: "",
  jobType: ""
};
const RoleOptions = [
  { value: 1, name: "Developer" },
  { value: 2, name: "Tester" }
];

const JobTypeOptions = [
  { value: 1, name: "Permanent" },
  { value: 2, name: "Contract" }
];

const Onboarding = () => {
  const methods = useForm<INewEmployee>({ defaultValues: defaultValues });
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors }
  } = methods;
  const onSubmit = (data: INewEmployee) => console.log(data);
  return (
    <>
      <Typography textAlign={"center"} variant="h5">
        New Employee Onboarding
      </Typography>
      <Container maxWidth="sm">
        <FormProvider {...methods}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ marginBottom: "4px" }}
          >
            <FormInput
              name="firstname"
              control={control}
              label="First name"
              errors={errors}
            />
            <FormInput
              name="lastname"
              control={control}
              label="Last name"
              errors={errors}
            />
          </Stack>
          <Stack flexDirection={"row"}>
            <FormInput
              name="email"
              control={control}
              label="Email"
              errors={errors}
              fullwidth={true}
              type={"email"}
            />
          </Stack>

          <Stack flexDirection={"row"}>
            <FormInput
              name="house No"
              control={control}
              label="House No"
              errors={errors}
              type={"house No"}
            />
            <FormInput
              name="street"
              control={control}
              label="Street"
              errors={errors}
              type={"street"}
            />
          </Stack>
          <Stack flexDirection={"row"}>
            <FormDropdown
              name="country"
              control={control}
              label="Country"
              errors={errors}
              options={RoleOptions}
            />
            <FormDropdown
              name="city"
              control={control}
              label="City"
              errors={errors}
              options={JobTypeOptions}
            />
          </Stack>
          <Stack flexDirection={"row"}>
            <FormInput
              name="zipcode"
              control={control}
              label="Zipcode"
              errors={errors}
              type={"zipcode"}
            />
            <FormInput
              name="phone"
              control={control}
              label="Phone"
              errors={errors}
              type={"phone"}
            />
          </Stack>
          <Stack flexDirection={"row"}>
            <FormDropdown
              name="role"
              control={control}
              label="Role"
              errors={errors}
              options={RoleOptions}
            />
            <FormDropdown
              name="jobType"
              control={control}
              label="Job Type"
              errors={errors}
              options={JobTypeOptions}
            />
          </Stack>
          <Stack></Stack>

          <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
            {" "}
            Submit{" "}
          </Button>
          <Button onClick={() => reset()} variant={"outlined"}>
            {" "}
            Reset{" "}
          </Button>
        </FormProvider>
      </Container>
    </>
  );
};

export default Onboarding;
