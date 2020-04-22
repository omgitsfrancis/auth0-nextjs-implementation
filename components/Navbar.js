import React from "react";
import { useAuth } from "use-auth0-hooks";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {!isAuthenticated && <button onClick={() => login()}>Click to Log in</button>}

      {isAuthenticated && <button onClick={() => logout({returnTo: `${process.env.URL}/login`})}>Click to Log out</button>}

      <div style={{margin: "1rem"}}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/login">
          <a style={{margin: "1rem"}}>Login</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
