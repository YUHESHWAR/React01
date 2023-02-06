import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Context from "./Context";
import Employee from "./Employee";

export default function EmployeeCreate() {
  const consumer = useContext(Context);
  const emp = {
    name: "Nathan Mohr",
    email: "Dianna_Weimann99@yahoo.com",
    address: "Bothell",
    username: "Zita.Johnson48",
    id: "1",
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const id = Math.floor(Math.random * 100).toString();
  const createEmployee = () => {
    const newEmp = { name, email, address, username, id };
    consumer.setData([...consumer.data, newEmp]);
    console.log("Done craeting");
    <Employee />;
  };
  return (
    <div className="add-movie-form">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Button variant="contained" onClick={createEmployee}>
        Add Employee
      </Button>
    </div>
  );
}
