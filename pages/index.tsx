import type { GetStaticProps, NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { MainLayout } from "../layouts/MainLayout";
import { PokemonCard } from "../components/ui/cards/PokemonCard";
import { getPokemonList } from "../api/pokeapi/pokeapi.api";
import { ListItems } from "../api/pokeapi/pokeapi.interfaces";

interface Props {
  pokeList: ListItems[];
}

const Home: NextPage<Props> = ({ pokeList }) => {
  return (
    <div>
      <MainLayout>
        <Grid.Container gap={2} justify="flex-start">
          {pokeList.map(({ id, name }) => {
            return <PokemonCard id={id} name={name} key={id} />;
          })}
        </Grid.Container>
      </MainLayout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pokeList: ListItems[] = await getPokemonList(150);
  return {
    props: {
      pokeList,
    },
    revalidate: 43200, // 12 hours
  };
};

export default Home;
