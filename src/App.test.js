import { render } from "@testing-library/svelte";
import { expect } from "chai";
import App from "./App.svelte";

describe("<App>", () => {
  it('renders Travel Search Engine link', () => {
    const { getByText } = render(App);
    const linkElement = getByText(/Travel Search Engine/i);
    expect(document.body.contains(linkElement));
  });
});
