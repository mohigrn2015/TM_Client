import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scense/global/Topbar";
import Sidebar from "./scense/global/Sidebar";
import Dashboard from "./scense/dashboard";
import Team from "./scense/team";
import Invoices from "./scense/invoices";
import Contacts from "./scense/contacts";
import Bar from "./scense/bar";
import Form from "./scense/form";
import Line from "./scense/line";
import Pie from "./scense/pie";
import FAQ from "./scense/faq";
import Geography from "./scense/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scense/calendar/calendar";
import Login from "./scense/Login";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  //var value = sessionStorage.getItem("data")
  //const logoninfo = Logins.Login();
  //console.log(value);
  const value = sessionStorage.getItem("session_token");

  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 

        {value === null ? 
        <Login/>
        :
        <div className="app">
         <Sidebar isSidebar={isSidebar} /> 
         <main className="content">
         <Topbar setIsSidebar={setIsSidebar} />  
           <Routes> 
             {/* <Route path="/login" element={<Login />} />  */}
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/team" element={<Team />} />
             <Route path="/contacts" element={<Contacts />} />
             <Route path="/invoices" element={<Invoices />} />
             <Route path="/form" element={<Form />} />
             <Route path="/bar" element={<Bar />} />
             <Route path="/pie" element={<Pie />} />
             <Route path="/line" element={<Line />} />
             <Route path="/faq" element={<FAQ />} />
             <Route path="/calendar" element={<Calendar />} />
             <Route path="/geography" element={<Geography />} />
           </Routes>
          </main>
       </div> 
        }
       
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
