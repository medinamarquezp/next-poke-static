import { Link, Button, Navbar, Text } from "@nextui-org/react";
import { BrandIcon } from "../brand/BrandIcon";

export const Header = () => {
  return (
    <Navbar isBordered variant="static">
      <Link href="/">
        <Navbar.Brand>
          <BrandIcon></BrandIcon>
          <Text weight="bold" size="$2xl" css={{ marginLeft: "$2" }}>
            PokeApp
          </Text>
        </Navbar.Brand>
      </Link>
      <Navbar.Content>
        <Navbar.Link>
          <Button
            bordered
            auto
            size="md"
            color="gradient"
            css={{ textTransform: "uppercase", fontWeight: "$bold" }}
          >
            Favoritos
          </Button>
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};
