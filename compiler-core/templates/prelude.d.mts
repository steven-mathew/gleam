export class CustomType {
  withFields<K extends keyof this>(fields: { [P in K]: this[P] }): this;
}

export class List<T> implements Iterable<T> {
  head?: T;
  tail?: List<T>;
  static fromArray<T>(array: Array<T>): List<T>
  toArray(): Array<T>;
  atLeastLength(desired: number): boolean;
  hasLength(desired: number): boolean;
  countLength(): number;

  [Symbol.iterator](): Iterator<T>
}

export function toList<T>(array: Array<T>): List<T>;

export class Empty<T = never> extends List<T> {}

export class NonEmpty<T> extends List<T> {}

export class BitArray {
  buffer: Uint8Array;
  get length(): number;
  byteAt(index: number): number;
  floatAt(index: number): number;
  intFromSlice(start: number, end: number): number;
  binaryFromSlice(state: number, end: number): BitArray;
  sliceAfter(index: number): BitArray;
}

export class Utf8Codepoint {
    value: string;
}

export function toBitArray(segments: Array<number | Uint8Array>): BitArray;

export function sizedInt(int: number, size: number): Uint8Array;

export function byteArrayToInt(byteArray: Uint8Array): number;

export function byteArrayToFloat(byteArray: Uint8Array): number;

export function stringBits(string: string): Uint8Array;

export function codepointBits(codepoint: Utf8Codepoint): Uint8Array;

export function float64Bits(float: number): Uint8Array;

export class Result<T, E> extends CustomType {
  static isResult(data: unknown): boolean;
  isOk(): boolean;
}

export class Ok<T, E> extends Result<T, E> {
  0: T;
  constructor(value: T);
}

export class Error<T, E> extends Result<T, E> {
  0: E;
  constructor(value: E);
}

export function isEqual(a: any, b: any): boolean;

export function remainderInt(a: number, b: number): number;

export function divideInt(a: number, b: number): number;

export function divideFloat(a: number, b: number): number;
