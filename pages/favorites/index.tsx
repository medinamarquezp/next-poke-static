import type { NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { MainLayout } from "../../layouts/MainLayout";

const Favorites: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <Grid.Container gap={2} justify="flex-start"></Grid.Container>
      </MainLayout>
    </div>
  );
};

export default Favorites;
