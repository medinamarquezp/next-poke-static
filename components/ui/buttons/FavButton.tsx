import { FC, MouseEventHandler } from "react";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "../icons/HeartIcon";

interface Props {
  label?: string;
  styles?: object;
  onClick?: MouseEventHandler;
  bordered?: boolean;
}

export const FavButton: FC<Props> = ({ onClick, label, styles, bordered }) => {
  const buttonLabel = label || "Favoritos";
  return (
    <Button
      auto
      bordered={bordered}
      size="md"
      color="gradient"
      css={{ ...styles, textTransform: "uppercase", fontWeight: "$bold" }}
      icon={<HeartIcon />}
      onClick={onClick}
    >
      {buttonLabel}
    </Button>
  );
};
