import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function EmployeeView() {
  const { id } = useParams();
  const location = useLocation();
  return (
    <div>
      {location.state.data
        .filter((value) => value.id === id)
        .map((data) => {
          return <h1>{data.name}</h1>;
        })}
    </div>
  );
}
