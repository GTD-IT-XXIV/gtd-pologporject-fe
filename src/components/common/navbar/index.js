import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";

export default function NavBar(props) {
  const { children } = props;
  return (
    <div>
      {routes.map((route) => (
        <Link key={route.id} to={route.path}>
          {route.name}
        </Link>
      ))}
      {children}
    </div>
  );
}
