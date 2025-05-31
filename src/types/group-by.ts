export {};

declare global {
  interface ObjectConstructor {
    groupBy<T>(
      items: readonly T[],
      callback: (item: T, index: number) => PropertyKey
    ): Record<string, T[]>;
  }
}
