import type { NextPage } from "next";
import { Text } from "@nextui-org/react";
import { MainLayout } from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <Text h2>Welcome to PokeApp</Text>
      </MainLayout>
    </div>
  );
};

export default Home;
