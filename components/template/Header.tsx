import { Link, Navbar } from "@nextui-org/react";
import { FavButton } from "../ui/buttons/FavButton";
import { NavBrand } from "../brand/NavBrand";

export const Header = () => {
  return (
    <Navbar isBordered variant="static">
      <Link href="/">
        <Navbar.Brand>
          <NavBrand />
        </Navbar.Brand>
      </Link>
      <Navbar.Content>
        <Navbar.Link>
          <FavButton />
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};
