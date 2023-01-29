import React from "react";
import { useNavigate } from "react-router-dom";

export default function Employee() {
  const data = [
    {
      name: "Nathan Mohr",
      email: "Dianna_Weimann99@yahoo.com",
      address: "Bothell",
      username: "Zita.Johnson48",
      id: "1",
    },
    {
      name: "Rosie Cartwright",
      email: "Hilton_Hettinger@hotmail.com",
      address: "Hermanhaven",
      username: "Bruce.Kerluke",
      id: "2",
    },
    {
      name: "Candace Gerlach",
      email: "Garfield.Bauch84@gmail.com",
      address: "Everett",
      username: "Nathaniel.Luettgen89",
      id: "3",
    },
    {
      name: "Roberta Hoppe",
      email: "Myles_Beer99@gmail.com",
      address: "East Ashtyn",
      username: "Novella.West",
      id: "4",
    },
    {
      name: "Miss Katherine Barrows",
      email: "Maximilian_Quigley39@yahoo.com",
      address: "Koelpinhaven",
      username: "Melody_Becker47",
      id: "5",
    },
    {
      name: "Ervin Kuvalis",
      email: "Brandyn71@yahoo.com",
      address: "Jakaylaport",
      username: "Noemie.Connelly",
      id: "6",
    },
    {
      name: "Mr. Ed Reinger",
      email: "Brannon.Zulauf49@gmail.com",
      address: "New Bonnie",
      username: "Matilda70",
      id: "7",
    },
    {
      name: "Sidney Ledner",
      email: "Josiane69@yahoo.com",
      address: "Melvinside",
      username: "Estefania.Rodriguez59",
      id: "8",
    },
    {
      name: "Rufus Fritsch",
      email: "Aditya.Lynch@yahoo.com",
      address: "Russelview",
      username: "Ernie_Von",
      id: "9",
    },
    {
      name: "Jenny Ryan",
      email: "Kristy_Gleichner93@yahoo.com",
      address: "Jerdefield",
      username: "Avery.Lind",
      id: "10",
    },
  ];
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
          {data.map((value) => (
            <tr>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.username}</td>
              <td>{value.address}</td>
              <td>
                <button
                  onClick={() =>
                    navigate(`/employee/view/${value.id}`, {
                      state: { data: data },
                    })
                  }
                >
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
