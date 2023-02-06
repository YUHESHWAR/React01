import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "./Context";

export default function Employee() {
  const consumer = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/employee/create")}>Create</button>
      <table border={1}>
        <thead>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Email</b>
          </td>
          <td>
            <b>UserName</b>
          </td>
          <td>
            <b>Address</b>
          </td>
          <td>
            <b>Action</b>
          </td>
        </thead>
        <tbody>
          {consumer.data.map((value) => (
            <tr>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.username}</td>
              <td>{value.address}</td>
              <td>
                <button onClick={() => navigate(`/employee/view/${value.id}`)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
