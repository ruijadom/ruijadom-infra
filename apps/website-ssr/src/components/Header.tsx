import type { FunctionComponent } from "react";
import { Header } from "ui";

const links = {
  leftLinks: [
    { children: "About", href: "about", variant: "text" },
    { children: "Pricing", href: "pricing", variant: "text" },
  ],
  rightLinks: [
    {
      children: "Sign\u00a0in",
      className: "hidden xs:block",
      classNameMobile: "block xs:hidden",
      href: "/signin",
      variant: "text",
    },
  ],
} as const;

const PageHeader: FunctionComponent = () => {
  return <Header {...links} />;
};

export { PageHeader as Header };
