import React from "react";
import { Formik, Form, useFormik } from "formik";
import CustomInput from "./CustomInput";
import { Button } from "@mui/material";

function FormInputs({
  initialValues,
  validationSchema,
  onSubmit,
  inputField,
  inputField,
}) {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const { errors, getFieldProps, touched } = formik;

  const fieldNames = Object.keys(errors);
  //   const options = Object.keys(model.data);

  const handleSubmit = () => formik.submitForm();
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        {inputField.map((field) => (
          <CustomInput
            {...field}
            {...getFieldProps(field.name)}
            error={touched[field.name] && fieldNames.includes(field.name)}
            helperText={
              fieldNames.includes(field.name) && touched[field.name]
                ? errors[field.name]
                : ""
            }
            key={field.name}
            // options={
            //   options.includes(field.name) ? model.data[field.name] : undefined
            // }
          />
        ))}

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Formik>
  );
}

export default FormInputs;
