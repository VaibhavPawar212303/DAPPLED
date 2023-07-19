import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Projects from "./components/Project/Projects";
// import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
// import CreateProject from "./components/CreateProject/CreateProject";
// import Board from "./components/Board/Board";
import Builds from "./components/Board/Builds";
// import Help from "./components/Board/Help";
// import BuildDetails from "./components/Board/BuildDetails";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Navbar />} />
      <Route path="/">
        <Route path="/build" index element={<Builds />} />
      </Route>
    </Routes>

    //   <Route path="/" element={<ProjectDetails />}>
    //     <Route path="/dashboard" index element={<Board />} />
    //     <Route path="/testDetails" index element={<BuildDetails />} />
    //     <Route path="/help" index element={<Help />} />
    //   </Route>
    //   <Route path="/createproject" element={<CreateProject />} />
    //   <Route path="/project" element={<Projects />} />
  );
}

export default App;
