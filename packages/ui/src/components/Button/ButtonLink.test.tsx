import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as stories from "./ButtonLink.stories";

const ButtonLinkStories = composeStories(stories);

describe("Link", () => {
  it("renders a link", () => {
    render(<ButtonLinkStories.Default />);

    const link = screen.getByRole("link", { name: "Link" });

    expect(link).toHaveAttribute("href", "https://ruijadom.com/");
  });
});
