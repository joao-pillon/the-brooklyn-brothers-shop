import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/index";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
