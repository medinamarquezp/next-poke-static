import { FC } from "react";
import { GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { MainLayout } from "../../layouts/MainLayout";
import { Item } from "../../api/pokeapi/pokeapi.interfaces";
import { getPokemon, getPokemonList } from "../../api/pokeapi/pokeapi.api";
import { DetailsContentCard } from "../../components/ui/cards/DetailsContentCard";
import { DetailsMainImageCard } from "../../components/ui/cards/DetailsMainImageCard";

interface Props {
  pokeDetail: Item;
}

const PokemonDetail: FC<Props> = ({
  pokeDetail: { id, name, specie, abilities, mainImage, imageList },
}) => {
  return (
    <MainLayout>
      <Grid.Container gap={2} justify="flex-start">
        <Grid xs={12} sm={4}>
          <DetailsMainImageCard mainImage={mainImage} name={name} />
        </Grid>
        <Grid xs={12} sm={8}>
          <DetailsContentCard
            id={id}
            name={name}
            specie={specie}
            abilities={abilities}
            imageList={imageList}
          />
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths = async () => {
  const pokeList = await getPokemonList(151);
  const paths = pokeList.map(({ name }) => ({
    params: { id: name },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

const redirectToRoot = () => {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokeDetail = await getPokemon(id);
  if (!pokeDetail) return redirectToRoot();
  return {
    props: {
      pokeDetail,
    },
    revalidate: 43200, // 12 hours
  };
};

export default PokemonDetail;
