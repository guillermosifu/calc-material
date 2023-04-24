import React from "react";
import Employee from "./Employee";
import { Typography, Box, Grid } from "@mui/material";

const EmployeeList = ({ employees, onDeleteEmployee }) => {
  return (
    <Box className="employee-list" mt={2} >
      {employees.length > 0 ? (
        <Grid container spacing={2}>
          {employees.map((employee) => (
         <Grid item xs={12} sm={6} md={4} lg={3} key={employee.id} >
         <Employee
           id={employee.id}
           name={employee.employeeName}
           discount={employee.discount}
           salary={employee.salary}
           onDeleteEmployee={onDeleteEmployee}
           style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
         />
       </Grid>
       
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" align="center"></Typography>
      )}
    </Box>
  );
};

export default EmployeeList;
