export function NegativeArray<T>(array: T[]): T[] {
    return new Proxy(array, {
      get(target, prop: string | symbol) {
        const index = Number(prop);
        if (!isNaN(index)) {
          return target[index < 0 ? target.length + index : index];
        }
        return target[prop as keyof T[]]; // Handle other properties like 'length'
      }
    });
  }