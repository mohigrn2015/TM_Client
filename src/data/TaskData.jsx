import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "taskid", headerName: "Task ID" },
  {
    field: "cr_id",
    headerName: "CR ID",
    minWidth:150
  },
  {
    field: "cr_name",
    headerName: "CR Name",
    minWidth:250
  },
  {
    field: "taskname",
    headerName: "Task Name",
    minWidth:250
  },
  {
    field: "description",
    headerName: "Description",
    minWidth:350
  },
  {
    field: "created_date",
    headerName: "Create Date",
    minWidth:150
  },
  {
    field: "created_by",
    headerName: "Create By",
    minWidth:150
  },
  {
    field: "updated_date",
    headerName: "Update Date",
    minWidth:150
  },
  {
    field: "updated_by",
    headerName: "Update By",
    minWidth:150
  },
];


const model = {
  RightId: sessionStorage.getItem("right_id"),
  TeamId: sessionStorage.getItem("team_id"),
  Session_Token: sessionStorage.getItem("session_token"),
  userId: sessionStorage.getItem("user_id")
};

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      fetch("https://localhost:7229/api/task-manage/show-initial-task/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(model),
      })
        .then((response) => response.json())
        .then((data) => setTasks(data));
    } catch {
      //   console.log(onError());
    }
  }, []);

  return (
    <DataGrid
      checkboxSelection
      rows={tasks}
      columns={columns}
      getRowId={(row) => row.taskid}
    />
  );
};

export default TaskTable;
