import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import addIcon from "../image/user.svg";
import coinIcon from "../image/coin-1.svg";
import porcentajeCircleIcon from "../image/percentage-circle.svg";

const EmployeeForm = ({ onAddEmployee }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [discount, setDiscount] = useState("");
  const [salary, setSalary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]); // nuevo estado para almacenar los empleados

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!employeeName || !discount || !salary) {
      alert("Por favor ingrese un nombre de empleado, un descuento y un salario.");
      return;
    }
    const newEmployee = { employeeName, discount, salary };
    setEmployees([...employees, newEmployee]); // actualizar el estado con el nuevo empleado
    onAddEmployee(newEmployee); // llamar a la función prop onAddEmployee con el nuevo empleado
    setEmployeeName("");
    setDiscount("");
    setSalary("");
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={addIcon}
          alt="Nombre del empleado"
          style={{ height: "20px", width: "20px", marginRight: "10px" }}
        />
        <TextField
          label="Nombre del empleado"
          variant="outlined"
          color="primary"
          type="text"
          id="employeeName"
          value={employeeName}
          onChange={(event) => setEmployeeName(event.target.value)}
          placeholder="Ingrese el nombre del empleado"
          style={{
            borderRadius: "10px 10px 0 0",
            marginBottom: "10px",
            flex: 1,
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={porcentajeCircleIcon}
          alt="Descuento"
          style={{ height: "20px", width: "20px", marginRight: "10px" }}
        />
        <TextField
          label="Descuento"
          variant="outlined"
          type="number"
          id="discount"
          value={discount}
          onChange={(event) => setDiscount(event.target.value)}
          placeholder="Descuento a aplicar"
          style={{ borderRadius: "0 0 0 0", marginBottom: "10px", flex: 1 }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={coinIcon}
          alt="Salario"
          style={{ height: "20px", width: "20px", marginRight: "10px" }}
        />
        <TextField
          label="Salario"
          variant="outlined"
          type="number"
          id="salary"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
          placeholder="Ingrese el salario"
          style={{
            borderRadius: "0 0 10px 10px",
            marginBottom: "10px",
            flex: 1,
          }}
        />
      </div>
      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          type="submit"
          disabled={isLoading}
          style={{
            borderRadius: "5px 5px 5px 5px",
            marginBottom: "0px",
            fontFamily: "Poppins, Roboto, sans-serif",
            fontWeight: 400,
            marginLeft: "2.1em",
            fontSize: "14px",
            width: "fit-content",
            padding: "10px",
            backgroundColor: "#1a1841",
            color: "#fff",
            position: "relative", // Agregar posición relativa para que los ::before y ::after estén posicionados correctamente
          }}
        >
          Agregar empleado
       
           
        </Button>

       
      </div>
    </form>
  );
};

export default EmployeeForm;
