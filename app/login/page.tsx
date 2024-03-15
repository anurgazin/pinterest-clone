import styles from '@/app/login/login.module.css'

import LoginForm from "../components/login_form";

export default function LoginPage() {
  return (
    <div className={styles.login_page_div}>
      <LoginForm />
    </div>
  );
}
