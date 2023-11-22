export type ExceptedType<T, K> = T extends K ? never : T;
export type ExceptedNumber<T> = ExceptedType<T, number>;
export type ExceptedString<T> = ExceptedType<T, string>;
export type ExceptedArray<T> = ExceptedType<T, any[]>;
export type ExceptedObject<T> = ExceptedType<T, object>;
export type ExceptedFunction<T> = ExceptedType<T, Function>;
export type ExceptedUndefined<T> = ExceptedType<T, undefined>;