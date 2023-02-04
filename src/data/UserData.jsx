import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "userid", headerName: "ID", minWidth:100 },
  {
    field: "username",
    headerName: "User Name",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth:150
  },
  {
    field: "designation",
    headerName: "Designation",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth:150    
  },
  {
    field: "team",
    headerName: "Team",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth:150    
  },
  {
    field: "mobile_no",
    headerName: "Contact No",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth:150    
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth:250    
  },
  {
    field: "present_addr",
    headerName: "Present Address",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth:350    
  },
  {
    field: "permanent_addr",
    headerName: "Permanent Address",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth:350    
  },
  {
    field: "blood_group",
    headerName: "Blood Group",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth:150    
  },
  {
    field: "f_name",
    headerName: "Father Name",
    flex: 1,
    cellClassName: "name-column--cell",
    minWidth:150    
  },
  {
    field: "m_name",
    headerName: "Mother Name",
    flex: 1,
    cellClassName: "name-column--cell" ,
    minWidth:150   
  },
  {
    field: "gurdian_contact",
    headerName: "Father Contact",
    flex: 1,
    cellClassName: "name-column--cell" ,
    minWidth:150   
  },
  
];

const model = {
  RightId: sessionStorage.getItem("right_id"),
  TeamId: "1000",
  Session_Token: sessionStorage.getItem("session_token"),
  userId: sessionStorage.getItem("user_id")
};

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      fetch("https://localhost:7229/api/user-mange/get-users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(model),
      })
        .then((response) => response.json())
        .then((data) => setUsers(data));
        console.log(users);
    } catch {
      //   console.log(onError());
    }
  }, []);

  return (
    <DataGrid
      checkboxSelection
      rows={users}
      columns={columns} 
      getRowId={(row) => row.userid}
    />
    
  );
};

export default UserTable;
