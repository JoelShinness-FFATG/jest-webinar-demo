// implementation changed
function chainOfJoels(n: number): string {
  return new Array(n).fill("Joel").join(" & ");
}

// test
describe("chainOfJoels(n)", () => {
  it("chains some Joels", () => {
    expect(chainOfJoels(3)).toMatchInlineSnapshot(`"Joel & Joel & Joel"`);
  });
});
