"use client";
import DisplayImages from "../components/display_images";
import { useSelector } from "react-redux";
import { selectUser } from "@/lib/slicers/userSlicer";
import { redirect } from "next/navigation";
export default function DashboardPage() {
  const user = useSelector(selectUser);
  if (user.user) {
    return (
      <div className="dashboard-container">
        <h1>
          Welcome <span className="user_name">{user.user.username}</span>
        </h1>
        <DisplayImages />
      </div>
    );
  } else {
    redirect("/login");
  }
}
