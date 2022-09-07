import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
}

export const PokemonCard: FC<Props> = ({ id, name }) => {
  return (
    <>
      <Grid xs={6} sm={3} md={2}>
        <Link href={`/pokemon/${name}`}>
          <Card isPressable isHoverable>
            <Card.Body>
              <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width="100%"
                height={120}
                alt={name}
              />
            </Card.Body>
            <Card.Footer
              css={{
                justifyItems: "flex-start",
                backgroundColor: "$gray400",
              }}
            >
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{name}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Link>
      </Grid>
    </>
  );
};
