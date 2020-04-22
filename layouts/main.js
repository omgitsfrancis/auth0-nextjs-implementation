import Head from "next/head";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {
  const { children } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {children}
      </main>
      <footer>
        <a
          href="https://github.com/omgitsfrancis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @omgitsfrancis
        </a>
      </footer>{" "}
    </div>
  );
}
