"use client";

import { useState, useEffect } from "react";
import { getUsername } from "@/services/auth";
import { useRouter } from "next/navigation";
import { getImages } from "@/services/images";

export default function DashboardPage() {
  const [user, setUser] = useState();
  const [images, setImages] = useState();
  const router = useRouter();

  useEffect(() => {
    const username = getUsername();
    const gettingImages = async () => {
      const data = await getImages();
      setImages(data);
    };
    if (username !== "") {
      setUser(username);
      gettingImages();
    } else {
      router.push("/login");
    }
  }, [router]);
  return (
    <div className="dashboard-div">
      <h1>Hello, Dashboard Page! {user}</h1>
    </div>
  );
}
