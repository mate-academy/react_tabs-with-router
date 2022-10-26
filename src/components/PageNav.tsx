import { PageNavLink } from "./PageNavLink";

export const PageNav = () => (
  <>
    <PageNavLink
      to="/"
      text="Home page"
      end
    />
    <PageNavLink
      to="/tabs"
      text="Tabs page"
    />
  </>
);
