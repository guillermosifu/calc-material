import React, { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Clock from "./components/Clock";
import { Container, Typography } from "@mui/material";

function App() {
  const h1Style = {
    fontFamily: "Poppins, Roboto, sans-serif",
  };

  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = ({ employeeName, discount, salary }) => {
    const newEmployee = {
      id: new Date().getTime().toString(),
      employeeName,
      discount,
      salary,
    };
    setEmployees([...employees, newEmployee]);
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:ital,wght@0,400;1,100&display=swap"
          rel="stylesheet"
        />
      </div>
      <div className="App-header">
        <Container
          maxWidth="xl"
          className="container"
          style={{ marginBottom: "50px" }}
        >
          <Typography
            variant="h2"
            gutterBottom
            className="title"
            style={{
              textAlign: "justify",
              fontFamily: "Roboto",
              fontWeight: "bold",
              marginTop: "50%",
            }}
          >
            Calculando Mis Descuentos
          </Typography>
          <Clock className="Clock" />
        </Container>
      </div>
      <div className="App-body">
        <Container maxWidth="xl" className="container">
          <Typography
            variant="h5"
            gutterBottom
            className="title"
            style={{
              textAlign: "justify",
              fontFamily: "Roboto",
              fontWeight: "bold",
              marginTop: "15%",
            }}
          >
            Agregar Empleado
          </Typography>
          <EmployeeForm
            onAddEmployee={handleAddEmployee}
            className="EmployeeForm"
          />
        </Container>
        <Container
          maxWidth="xl"
          className="container"
          style={
            (h1Style,
            { textAlign: "justify", fontFamily: "poppins", marginTop: "1%" })
          }
        >
          <EmployeeList
            employees={employees}
            onDeleteEmployee={handleDeleteEmployee}
          />
          <Typography
            className="App-footer"
            style={
              (h1Style,
              {
                textAlign: "justify",
                fontFamily: "poppins",
                fontStyle: "italic",
              })
            }
          >
            Developed by{" "}
            <a href="https://devsolutionsa.com/" className="btn">
              Devsolutionsa.com
            </a>
          </Typography>{" "}
        </Container>
      </div>
    </div>
  );
}

export default App;
