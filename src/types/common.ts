type Values<T extends object> = T[keyof T];
type Keys<T extends object> = keyof T;

export type { Values, Keys };
