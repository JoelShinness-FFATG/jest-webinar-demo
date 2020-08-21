import { chainJoels } from "./utils";

function hundredJoelsAnd1Max() {
  return `${chainJoels(100)} & Max`;
}

describe("hundredJoelsAnd1Max()", () => {
  it("has one hundred joels and 1 max", () => {
    expect(hundredJoelsAnd1Max()).toMatchInlineSnapshot(
      `"Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Joel & Max"`
    );
  });
});
