"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/services/auth";
import { useDispatch } from "react-redux";
import { login as loginRedux } from "@/lib/slicers/userSlicer";
import styles from "@/app/components/style/registration_form.module.css";
import Link from "next/link";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { message, user } = await register(username, email, password);
      if (user.user) {
        dispatch(loginRedux(user.user));
        router.push("/dashboard");
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Request failed with status code 409") {
          alert("User with the same email already exists");
        }
      }
    }
  };

  return (
    <div className={styles.registration_form_container}>
      <form
        className={styles.registration_form_content}
        onSubmit={handleSubmit}
      >
        <h1 className={styles.registration_form_h1}>Registration</h1>
        <input
          type="email"
          value={email}
          placeholder="E-mail"
          className={styles.registration_form_input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="username"
          value={username}
          placeholder="Username"
          className={styles.registration_form_input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className={styles.registration_form_input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.registration_form_submit} type="submit">
          Login
        </button>
        <div className={styles.registration_form_log}>
          <div className="registration-form-log-p">
            Already have an account?
          </div>
          <Link href="/login" className={styles.registration_form_log_link}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
