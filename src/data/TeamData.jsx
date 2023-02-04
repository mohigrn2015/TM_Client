import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const columns = [
  {
    field: "aba",
    headerName: "",
    minWidth: 50,
    renderCell: ({ row }) => (
      <Button
        variant="contained"
        color="primary"
        startIcon={<EditIcon />}
        onClick={() => editTeam(row)}
      ></Button>
    ),
  },
  {
    field: "hello",
    headerName: "",
    minWidth: 30,
    renderCell: ({ row }) => (
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => deleteTeam(row)}
      ></Button>
    ),
  },  
  { field: "team_id", headerName: "ID", minWidth: 350 },
  {
    field: "team_name",
    headerName: "Team Name",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth: 350,
  },
  {
    field: "team_type",
    headerName: "Team Type",
    cellClassName: "name-column--cell",
    headerAlign: "left",
    align: "left",
    minWidth: 350,
  },
];

const model = {
  RightId: sessionStorage.getItem("right_id"),
  TeamId: "1000",
  Session_Token: sessionStorage.getItem("session_token"),
  userId: sessionStorage.getItem("user_id"),
  team_name: "",
  team_type: "",
};

const TeamTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    try {
      fetch("https://localhost:7229/api/team-manage/get-team-list/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(model),
      })
        .then((response) => response.json())
        .then((data) => setTeams(data));
    } catch {
      //   console.log(onError());
    }
  }, []);

  return (
   
      <DataGrid
      //checkboxSelection
      rows={teams}
      columns={columns}
      getRowId={(row) => row.team_name}
    />
    
    
  );
};
function editTeam(row) {
  alert(row.team_id);
  console.log(row);
}

function deleteTeam(row) {
  alert(row.team_id);
}

export default TeamTable;
