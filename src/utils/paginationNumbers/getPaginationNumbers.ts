export default function getPaginationNumbers({ pagesAmount }: { pagesAmount: number }) {
  const result = [];

  for (let page = 1; page <= pagesAmount; page++) {
    result.push(page);
  }

  return result;
}
