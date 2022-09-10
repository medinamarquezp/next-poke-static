/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { Grid, Row, Text } from "@nextui-org/react";
import { MainLayout } from "../../layouts/MainLayout";
import { getFavorites } from "../../services/favorites.service";
import { PokemonCard } from "../../components/ui/cards/PokemonCard";

const Favorites: NextPage = () => {
  const [favorites, setFavorites] = useState<[string, number][]>([]);

  useEffect(() => {
    const savedFavorites = getFavorites();
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <MainLayout>
        <Grid.Container gap={2} justify="flex-start">
          {favorites.length ? (
            favorites.map(([name, id]) => {
              return <PokemonCard id={id} name={name} key={id} />;
            })
          ) : (
            <Row justify="center" css={{ marginTop: "$15" }}>
              <Text h2>No se han agregago favoritos</Text>
            </Row>
          )}
        </Grid.Container>
      </MainLayout>
    </div>
  );
};

export default Favorites;
