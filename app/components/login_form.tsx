"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login as loginRedux } from "@/lib/slicers/userSlicer";
import { login } from "@/services/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call your API endpoint to authenticate the user
    try {
      // Your API call here
      // Upon successful login, navigate to the dashboard

      const response = await login(email, password);
      const data = response;
      if (data === "Incorrect Password/Username") {
        alert(data);
      } else if (data === "User not found") {
        alert(data);
      } else {
        dispatch(loginRedux(data.user));
        router.push("/dashboard");
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Request failed with status code 404") {
          alert("User not found");
        } else if (error.message === "Request failed with status code 401") {
          alert("Incorrect Password/Username");
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
