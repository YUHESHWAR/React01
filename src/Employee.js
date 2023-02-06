import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "./Context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export default function Employee() {
  const consumer = useContext(Context);
  const navigate = useNavigate();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div>
      <Table
        sx={{ maxWidth: 1000, margin: "0 auto" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">User Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consumer.data.map((value) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {value.name}
              </StyledTableCell>
              <StyledTableCell align="right">{value.email}</StyledTableCell>
              <StyledTableCell align="right">{value.username}</StyledTableCell>
              <StyledTableCell align="right">{value.address}</StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <Button
                  sx={{ padding: 0 }}
                  variant="contained"
                  onClick={() => navigate(`/employee/view/${value.id}`)}
                >
                  View
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ width: 400 }}
          variant="contained"
          onClick={() => navigate("/employee/create")}
        >
          Add Employee
        </Button>
      </div>
    </div>
  );
}
