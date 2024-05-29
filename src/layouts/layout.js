import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Layout() {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
    </div>
  );
}
