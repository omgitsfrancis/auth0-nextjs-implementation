import MainLayout from "../layouts/main";
import { useAuth } from "use-auth0-hooks";

export default function Login() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div style={{ margin: "2rem" }}>
        <h1>Login Page</h1>
        <div>{isAuthenticated ? "YOU ARE AUTHED" : "YOU ARE NOT AUTHED"}</div>
      </div>
    </MainLayout>
  );
}
