import RegistrationForm from "../components/registration_form";
import styles from "@/app/registration/registration.module.css";

export default function RegistrationPage() {
  return (
    <div className={styles.registration_page_div}>
      <RegistrationForm />
    </div>
  );
}
