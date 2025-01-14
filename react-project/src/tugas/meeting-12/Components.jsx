import { Link, useParams } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>SOAL - 1 Home Page</h1>
      <Link
        to="/about"
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Soal 3 - Button Link to About
      </Link>
      <h1>Soal 5 - Dashboard</h1>
      <Link
        to={"/dashboard"}
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Soal 5 - Button Link to Dashboard
      </Link>
      <br />
      <Link
        to={"/profile"}
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Soal 4 - Button Link to Profile
      </Link>
      
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>SOAL - 2 About Page</h1>{" "}
      <Link
        to="/"
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Soal 3 - Button Link to Home
      </Link>
    </div>
  );
}

function NotFoundPage() {
  return <h1>SOAL - 2 Halaman tidak ditemukan</h1>;
}

function Dashboard() {
  return (
    <div>
      <h1>SOAL - 3 Dashboard</h1>{" "}
      <Link
        to="/"
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline",
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Soal 3 - Button Link to Home
      </Link>
      <Link
        to="/dashboard/settings"
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline",
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Soal 5 - Button Link to Settings
      </Link>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h1>SOAL - 5 Settings</h1>{" "}
      <Link
        to="/dashboard"
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Soal 3 - Button Link to Dashboard
      </Link>
    </div>
  );
}

function Profile () {
  return (
    <div>
      <h1>SOAL - 4 Profile</h1>
      <p>Please enter Id on the URL</p>
      <Link
        to="/"
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Soal 3 - Button Link to Home
      </Link>
    </div>
  );
}

function ProfilePage() {
  const { userId } = useParams();

  return (
    <div>
      <h1>SOAL - 4 Profile</h1>
      <p>Halo {userId}</p>
      <Link
        to="/"
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Soal 3 - Button Link to Home
      </Link>
    </div>
  );
}

export { HomePage, AboutPage, NotFoundPage, Dashboard, Settings, ProfilePage, Profile };



