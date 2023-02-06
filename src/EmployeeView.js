import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "./Context";

export default function EmployeeView() {
  const { id } = useParams();
  const consumer = useContext(Context);
  return (
    <div>
      {consumer.data
        .filter((value) => value.id === id)
        .map((data) => {
          return <h1 style={{ textAlign: "center" }}>{data.name}</h1>;
        })}
    </div>
  );
}
