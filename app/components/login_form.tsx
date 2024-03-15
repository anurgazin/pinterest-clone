"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login as loginRedux } from "@/lib/slicers/userSlicer";
import { login } from "@/services/auth";

import styles from "@/app/components/style/login_form.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
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
    <div className={styles.login_form_container}>
      <form className={styles.login_form_content} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="login-form-input-email" className="login-form-label-email">Email:</label>
        <input
          id="login-form-input-email"
          type="email"
          className="login-form-input-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="login-form-input-password" className="login-form-label-password">Password:</label>
        <input
          id="login-form-input-password"
          type="password"
          className="login-form-input-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className={styles.login_form_submit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
