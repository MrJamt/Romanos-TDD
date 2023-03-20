import romano from "./romano.js";

describe("Romanos", () => {
  it("Genenar numero romano de 1", () => {
    expect(romano(1)).toEqual('I');
  });
});
