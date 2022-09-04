import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PokeAPP</title>
        <meta name="description" content="PokeAPP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to PokeAPP</h1>
        <Button>Click me</Button>
      </main>
    </div>
  );
};

export default Home;
