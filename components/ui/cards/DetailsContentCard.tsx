import { FC, useState } from "react";
import confetti from "canvas-confetti";
import { Badge, Card, Col, Image, Row, Text } from "@nextui-org/react";
import { FavButton } from "../buttons/FavButton";
import {
  toggleFavorite,
  isInFavorites,
} from "../../../services/favorites.service";

interface Props {
  id: number;
  name: string;
  specie: string;
  abilities: string[];
  imageList: string[];
}
export const DetailsContentCard: FC<Props> = ({
  id,
  name,
  specie,
  abilities,
  imageList,
}) => {
  const [bordered, setBordered] = useState(!isInFavorites(name));

  const toggleFav = () => {
    toggleFavorite({ [name]: id });
    setBordered(!bordered);
    if (bordered) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  return (
    <Card style={{ padding: "1rem 2rem" }}>
      <Row>
        <Col>
          <Card.Body>
            <Row style={{ display: "block" }}>
              <Text h2 weight="bold">
                {name}
              </Text>
              <Text
                h3
                color="grey"
                weight="normal"
                style={{ marginTop: "-1rem" }}
              >
                {specie}
              </Text>
            </Row>
            <Row>
              {abilities.map((abailability) => {
                return (
                  <Badge key={abailability} color="secondary">
                    {abailability}
                  </Badge>
                );
              })}
            </Row>
          </Card.Body>
        </Col>
        <Col>
          <FavButton
            styles={{ float: "right", margin: "1rem 0rem" }}
            label={bordered ? "Agregar a favorito" : "En favoritos"}
            bordered={bordered}
            onClick={toggleFav}
          />
        </Col>
      </Row>
      <Row style={{ width: "60%" }}>
        {imageList.map((image) => (
          <Image width={100} key={image} alt={name} src={image} />
        ))}
      </Row>
    </Card>
  );
};
