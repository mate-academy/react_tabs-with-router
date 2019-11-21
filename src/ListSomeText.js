import React from 'react';
import { useRoutes, A } from "hookrouter";

const ListSomeText = () => {
  const routers = {
    "/": () => <p>Some text 1</p>,
    "/Tab_2": () => <p>Some text 2</p>,
    "/Tab_3": () => <p>Some text 3</p>,
  };

  const routeResult = useRoutes(routers);
  return (
    <>
      <A href="/">Home</A>
      <A href="/Tab_2">Profile</A>
      <A href="/Tab_3">Contact</A>
      <div>{routeResult}</div>
    </>
  );
}


export default ListSomeText;
