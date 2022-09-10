import { useRouter } from "next/router";
import { Link, Navbar } from "@nextui-org/react";
import { FavButton } from "../buttons/FavButton";
import { NavBrand } from "../../brand/NavBrand";

export const Header = () => {
  const router = useRouter();
  const bordered = router.pathname !== "/favorites";
  return (
    <Navbar isBordered variant="static">
      <Link href="/">
        <Navbar.Brand>
          <NavBrand />
        </Navbar.Brand>
      </Link>
      <Navbar.Content>
        <Navbar.Link href="/favorites">
          <FavButton bordered={bordered} />
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};
