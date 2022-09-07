import { FC } from "react";
import { Card } from "@nextui-org/react";

interface Props {
  mainImage: string;
  name: string;
}

export const DetailsMainImageCard: FC<Props> = ({ mainImage, name }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Image src={mainImage} title={name} width="100%" height={300} />
      </Card.Body>
    </Card>
  );
};
