import Link from "next/link";

export async function getData() {
  const response = await fetch("http://localhost:8000/");
  const data = await response.json();

  return {
    data,
  };
}

export default async function Page() {
  const { data } = await getData();

  return (
    <main className="main">
      <div className="main-message">{data.message}</div>
      <div className="main-author">{data.author}</div>
      <div className="main-version">{data.version}</div>
      <div className="main-links">
        <div className="main-links-login">
          <Link href="/login">Login Page</Link>
        </div>
        <div className="main-links-registration">
          <Link href="/registration">Registration Page</Link>
        </div>
        <div className="main-links-dashboard">
          <Link href="/dashboard">Dashboard Page</Link>
        </div>
      </div>
    </main>
  );
}
