import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import { Text } from "../text";
import { Container } from "./Style";

export default function NavBar(props) {
  const { children } = props;
  return (
    <>
      <Container>
        {routes.map((route) => (
          <Link key={route.id} to={route.path}>
            <Text>{route.name}</Text>
          </Link>
        ))}
      </Container>
      {children}
    </>
  );
}
