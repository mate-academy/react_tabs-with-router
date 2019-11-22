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
      <div className={"nav align-content-start flex-column"}>
        <A class="btn btn-dark m-3" href="/">no home</A>
        <A class="btn btn-dark m-3" href="/Tab_2">Profile</A>
        <A class="btn btn-dark m-3" href="/Tab_3">Contact</A>
      </div>
      <div className={"badge badge-primary text-wrap mr-5"}>{routeResult || <p>Some text 1</p>}</div>
    </>
  );
}


export default ListSomeText;
