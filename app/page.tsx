import Link from "next/link";
import DashboardPage from "./dashboard/page";

export default async function Page() {
  return (
    <main className="main">
      <DashboardPage />
    </main>
  );
}
