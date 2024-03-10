"use client";

import { useState, useEffect } from "react";
import { getUsername } from "@/services/auth";

export default function DashboardPage() {
  const [user, setUser] = useState();

  useEffect(() => {
    const data = getUsername();
    if (data) {
      setUser(data);
    }
  }, []);

  return (
    <div className="dashboard-div">
      <h1>Hello, Dashboard Page! {user}</h1>
    </div>
  );
}
