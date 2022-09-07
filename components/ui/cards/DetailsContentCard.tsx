import { FC } from "react";
import { Badge, Card, Col, Image, Row, Text } from "@nextui-org/react";
import { FavButton } from "../buttons/FavButton";

interface Props {
  name: string;
  specie: string;
  abilities: string[];
  imageList: string[];
}
export const DetailsContentCard: FC<Props> = ({
  name,
  specie,
  abilities,
  imageList,
}) => {
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
            label="Agregar a favorito"
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
