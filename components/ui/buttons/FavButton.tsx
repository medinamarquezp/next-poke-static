import { FC, MouseEventHandler } from "react";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "../icons/HeartIcon";

interface Props {
  onClick?: MouseEventHandler;
}

export const FavButton: FC<Props> = ({ onClick }) => {
  return (
    <Button
      bordered
      auto
      size="md"
      color="gradient"
      css={{ textTransform: "uppercase", fontWeight: "$bold" }}
      icon={<HeartIcon />}
      onClick={onClick}
    >
      Favoritos
    </Button>
  );
};
