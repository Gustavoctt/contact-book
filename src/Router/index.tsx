import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { AddContact } from "../pages/AddContatc";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<AddContact />} />
      <Route index path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
