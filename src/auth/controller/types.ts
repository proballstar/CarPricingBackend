export type Params<T extends abstract new (...args: any) => any> = ConstructorParameters<T>[0]
