import { Text } from "@nextui-org/react";
import { BrandIcon } from "./BrandIcon";

export const NavBrand = () => {
  return (
    <>
      <BrandIcon></BrandIcon>
      <Text weight="bold" size="$2xl" css={{ marginLeft: "$2" }}>
        PokeApp
      </Text>
    </>
  );
};
