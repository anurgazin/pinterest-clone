"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "@/lib/slicers/userSlicer";
import pinterestLogo from "@/public/Pinterest-logo.png";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="w-full h-16 bg-white bg-opacity-95 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full text-black">
            <ul className="hidden md:flex gap-x-5">
              <li>
                <Link href="/dashboard">
                  <Image
                    src={pinterestLogo}
                    alt="Pinterest Logo"
                    height={30}
                    width={30}
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/add">
                  <p>Create</p>
                </Link>
              </li>
            </ul>
            <ul className="hidden md:flex gap-x-2">
              <li>
                <Link href="/dashboard">
                  <p>Dashboard</p>
                </Link>
              </li>
              {user && user.isAuthenticated ? (
                <>
                  <li>{user.user.username}</li>
                  <li>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-full"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full"
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
