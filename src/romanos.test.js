import romano from "./romano.js";

describe("Romanos", () => {
  it("Genenar numero romano de 1", () => {
    expect(romano(1)).toEqual('I');
  });

  it("Genenar numero romano de 5", () => {
    expect(romano(5)).toEqual('V');
  });

  it("Genenar numero romano de 10", () => {
    expect(romano(10)).toEqual('X');
  });
});
