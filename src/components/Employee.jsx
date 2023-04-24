import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Employee = ({ id, name, discount, salary, onDeleteEmployee }) => {
  const calculateDiscountedSalary = (salary, discount) => {
    return salary - (salary * discount) / 100;
  };

  const discountedSalary = calculateDiscountedSalary(salary, discount);

  return (
    <Box className="employee" sx={{ m: 2, p: 2, border: "1px solid grey" }}>
      <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
        {name} ({discount}%)
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Salario original: {salary} nuevos soles
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Salario con descuento: {discountedSalary} nuevos soles
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => onDeleteEmployee(id)}
      >
        Eliminar
      </Button>
    </Box>
  );
};

export default Employee;
