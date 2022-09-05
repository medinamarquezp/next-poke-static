import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Container } from "@nextui-org/react";
import { Header } from "../components/template/Header";

interface Props extends PropsWithChildren {
  title?: string;
  description?: string;
}

export const MainLayout: FC<Props> = ({ children, title, description }) => {
  const pageTitle = title || "PokeApp";
  const pageDescription = description || "NextJS poke api static app";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/pokeball.svg" />
      </Head>
      <Container>
        <Header />
        {children}
      </Container>
    </>
  );
};
