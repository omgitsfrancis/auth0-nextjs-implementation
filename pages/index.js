import MainLayout from "../layouts/main";
import { withAuth, withLoginRequired  } from "use-auth0-hooks";

function Home({auth}) {
  const { user } = auth;

  return (
    <MainLayout>
      <div style={{ margin: "2rem" }}>
        <h1>Home - Requires login</h1>
        <p>You redirected here after login</p>
      </div>
    </MainLayout>
  );
}

export default withLoginRequired(
  withAuth(Home)
);