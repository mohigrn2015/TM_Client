import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import TeamTable from "../../data/TeamData";

import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Team = () => {
  const [selected, setSelected] = useState("Dashboard");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="40px">
      {/* <Item
        title="Create Team"
        to="/dashboard"
        // icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      /> */}
      <Button
        variant="contained"
        color="secondary"
        //startIcon={<EditIcon />}
        //onClick={() => editTeam(row)}
      >
        Create
      </Button>
      
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <TeamTable />
      </Box>
    </Box>
  );
};

export default Team;
