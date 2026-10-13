import Sort from "@/types/sortEnum";

export function sortBy<T extends Record<string, any>>(arr: T[], by: keyof T, order: Sort = Sort.ASC): T[] {
  return [...arr].sort((a, b) => {
    const valA = a[by];
    const valB = b[by];

    const typeA = typeof valA as 'string' | 'number';
    const typeB = typeof valB;

    if (typeA !== typeB) {
      console.warn('Cannot sort differnt types:' , typeA, typeB)
      return 0;
    }

    const notSupportedTypes = ['bigint', 'boolean', 'symbol', 'object', 'function'];
    if (notSupportedTypes.includes(typeA)) {
      console.warn('Sorting by type:' , typeA, 'not supported')
      return 0;
    }

    const sortByTypeFunc = {
      string: {
        ASC: () => valA.localeCompare(valB),
        DESC: () => valB.localeCompare(valA),
      },
      number: {
        ASC: () => valA - valB,
        DESC: () => valB - valA,
      }
      
    }

    const sortFunc = sortByTypeFunc[typeA][order];
    return sortFunc();
  });
}
