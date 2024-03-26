"use client";
import { useSelector } from "react-redux";
import { selectUser } from "@/lib/slices/userSlice";
import Link from "next/link";
import AddForm from "../components/forms/add_form";
export default function AddPage() {
  const user = useSelector(selectUser);
  return (
    <div className="add-container">
      {user && user.user ? (
        <>
          <AddForm />
        </>
      ) : (
        <li>
          <Link href="/login">Please, login to add an image</Link>
        </li>
      )}
    </div>
  );
}
