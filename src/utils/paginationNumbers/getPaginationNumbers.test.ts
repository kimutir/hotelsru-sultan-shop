import getPaginationNumbers from "./getPaginationNumbers";

describe("getPaginationNumbers function", () => {
  it("returns with 0 value", () => {
    const pages = 0;
    expect(getPaginationNumbers({ pagesAmount: pages })).toEqual([]);
  });

  it("returns with 5 value", () => {
    const pages = 5;
    expect(getPaginationNumbers({ pagesAmount: pages })).toEqual([1, 2, 3, 4, 5]);
  });
});
