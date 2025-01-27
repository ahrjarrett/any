/** exports that come with an (empty) term-level equivalent */
export {
  assert,
  describe,
  expect,
  expectToFail
} from "./test/exports.js"

export type inline<T> = T

export type { empty } from "./empty/exports.js"
export type { nonempty } from "./nonempty/exports.js"
export type { array, nonemptyArray, queue, tuple } from "./array/exports.js"
export type { some } from "./some/some.js"
export type { match } from "./match/exports.js"
export type { object } from "./object/exports.js"
export type { boolean } from "./boolean/exports.js"
export type { cache } from "./cache/exports.js"
export type { evaluate } from "./evaluate/exports.js"
export type { has } from "./has/exports.js"
export type { check, typecheck } from "./check/exports.js"
export type {
  Catch,
  Catch as Match,
  enforce,
  Err,
  Msg,
  Partial,
  partial,
} from "./err/exports.js"

export type { TypeError } from "./type-error/exports.js"

export type {
  bigint,
  int,
  nat,
  number,
  real,
} from "./number/exports.js"

export type {
  Kind,
  Ext,
  Extensible,
  Extractable,
  guard,
  Guard,
  Intersectable,
  Negate,
} from "./kind/exports.js"

export type * as experimental from "./kind-new/exports.js"

export type { traversable, traversal } from "./traversable/exports.js"
export type { Tree } from "./tree/exports.js"
export type { iter } from "./iter/exports.js"
export type {
  mut,
  /** @deprecated use the `mut` type or `mut` namespace instead */
  mut as mutable
} from "./mutable/exports.js"
export type { pathsof } from "./paths/exports.js"
export type { never } from "./never/exports.js"
export type {
  newtype,
  /** @deprecated use {@link newtype `newtype`} instead */
  newtype as Identity,
} from "./newtype.js"
export type { id } from "./util.js"
export type {
  char,
  charset,
  string
} from "./string/exports.js"
export type { Universal } from "./universal/exports.js"
export type { to } from "./to.js"

export {
  Focus,
  type FocusConstructor
} from "./lens/focus.js"

export type { Widen } from "./widen/exports.js"

export type {
  any,
  ANY_TS_VERSION,
  any_array,
  any_arraylike,
  any_dict,
  any_entry,
  any_enumerable,
  any_field,
  any_index,
  any_invertible,
  any_json,
  any_key,
  any_nonnullable,
  any_nullable,
  any_object,
  any_scalar,
  any_struct,
  any_type,
  instanceOf,
} from "./any/exports.js"
