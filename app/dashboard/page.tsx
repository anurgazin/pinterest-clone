"use client";
import DisplayImages from "../components/display_images";
import { useSelector } from "react-redux";
import { selectUser } from "@/lib/slicers/userSlicer";
import Link from "next/link";
export default function DashboardPage() {
  const user = useSelector(selectUser);
  return (
    <div className="dashboard-container">
      {user && user.user ? (
        <>
          <DisplayImages />
        </>
      ) : (
        <li>
          <Link href="/login">Please, login to watch dashboard</Link>
        </li>
      )}
    </div>
  );
}
