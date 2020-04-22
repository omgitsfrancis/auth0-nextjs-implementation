import MainLayout from "../layouts/main";
import { useAuth, withAuth, withLoginRequired  } from "use-auth0-hooks";

function Profile({auth}) {
  const { isLoading, isAuthenticated } = useAuth();
  const { user } = auth;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div style={{ margin: "2rem" }}>
        <h1>Profile Page - Requires login</h1>
        {isAuthenticated && <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>}
      </div>
    </MainLayout>
  );
}

export default withLoginRequired(
  withAuth(Profile)
);