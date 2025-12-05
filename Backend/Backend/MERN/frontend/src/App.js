import { Route, Routes } from "react-router-dom";

import CreateEmployeePage from "./pages/CreateEmployeePage";
import './App.css';
import AdminPage from "./pages/AdminPage";
import Voting from "./components/Voting";
import Sort from "./components/Sort";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/addemployee" element={<CreateEmployeePage />} /> */}
        {/* <Route path="/" element={<AdminPage/>}/> */}

      <Route path="/" element={<Voting/>}/>
      <Route path="/ok" element={<Sort/>}/>
      <Route path="/o" element={<Login/>}/>
      

      </Routes>
    </div>
  );
}

export default App;
