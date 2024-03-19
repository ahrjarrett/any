export type {
  string,
}

import type { any } from "../any/exports"
import type { nonempty } from "../empty"
import type { Kind } from "../kind/exports"
import type { check } from "../check/exports"
import type * as Internal from "./_internal"
import type { join, startsWith, endsWith } from "./_internal"
import type { is } from "./_internal"

import type { char } from "./char"

declare namespace HKT {
  interface show extends Kind<[any.showable]> { [-1]: string.show<this[0]> }
  interface replace<needle extends any.showable, next extends any.showable> extends Kind<[string]> {
    [-1]: string.replace<needle, next, this[0]>
  }
  interface snake extends Kind<[string]> { [-1]: string.snake<this[0]> }
  namespace is {
    interface uppercaseAlphaChar extends Kind<[any.showable]> { [-1]: char.is.uppercaseAlpha<`${this[0]}`> }
  }
}

declare namespace string {
  /** namespace exports */
  export {
    is,
    lowercase,
    uppercase,
    capitalize,
    uncapitalize,
    snake,
    kebab,
    screaming,
  }

  /** nullary types */
  export {
    Digits,
    Digit,
    LowercaseChars,
    LowercaseChar,
    UppercaseChars,
    UppercaseChar,
  }

  /** direct exports */
  export {
    join,
    endsWith,
    startsWith,
    replace,
    head,
    tail,
    behead,
    second,
    show,
    split,
    concat,
    between,
    prefix,
    postfix,
    unprefix,
    unpostfix,
    takeUntilInclusive,
    takeUntilExclusive,
    delimitedCase,
  }
}

type Digits = typeof char.Digits
type Digit = Digits[number]
type LowercaseChars = typeof char.Lowers
type LowercaseChar = LowercaseChars[number]
type UppercaseChars = typeof char.Uppers
type UppercaseChar = UppercaseChars[number]

type show<type extends any.showable> = `${type}`

type replace<needle extends any.showable, next extends any.showable, haystack extends string>
  = [haystack] extends [`${infer before}${needle}${infer after}`] ? `${before}${next}${after}` : haystack

type head<chars extends string> = chars extends nonempty.string<infer head, any> ? head : never
type tail<chars extends string> = chars extends nonempty.string<any, infer tail> ? tail : never
type behead<chars extends string> = chars extends nonempty.string<infer head, infer tail> ? [head: head, tail: tail] : never
type second<chars extends string> = chars extends nonempty.string<any, infer tail> ? head<tail> : never

type concat<left extends string, right extends string> = `${left}${right}`
type between<left extends string, middle extends string, right extends string> = `${left}${middle}${right}`
type prefix<before extends any.showable, text extends string> = `${before}${text}`
type postfix<after extends any.showable, text extends string> = `${text}${after}`
type unprefix<prefix extends any.showable, text extends string> = text extends `${prefix}${infer tail}` ? tail : never
type unpostfix<suffix extends any.showable, text extends string> = text extends `${infer head}${suffix}` ? head : never

type split<
  text extends string,
  matcher extends Kind<[any.showable]> | any.array<any.showable>,
  onMatch extends Kind<[any.showable]> = HKT.show
> = Internal.intercalate<``, Internal.split<[], ``, text, matcher, onMatch>>

type takeUntilInclusive<
  text extends string,
  matchers extends any.showables
> = Internal.takeUntilInclusive<"", text, matchers>

type takeUntilExclusive<
  text extends string,
  matchers extends any.showables
> = Internal.takeUntilExclusive<"", text, matchers>

namespace screaming { screaming.snake = screamingSnake; screaming.kebab = screamingKebab; }
declare namespace screaming { export { screamingSnake as snake, screamingKebab as kebab, } }

type lowercase<type extends any.showable> = globalThis.Lowercase<`${type}`>
type lowercaseKey<type extends any.primitive> = type extends any.showable ? globalThis.Lowercase<`${type}`> : type
type lowercaseKeys<type extends any.object> = { [ix in keyof type as lowercaseKey<ix>]: type[ix] }
type lowercaseArrayValues<type extends any.showables> = { [ix in keyof type]: lowercase<type[ix]> }
type lowercaseObjectValues<type extends any.dict<any.showable>> = { [ix in keyof type]: lowercase<type[ix]> }
type lowercaseValues<type extends any.showables | Record<string, any.showable>>
  = [type] extends [any.showables] ? lowercaseArrayValues<type>
  : [type] extends [any.dict<any.showable>] ? lowercaseObjectValues<type>
  : never
  ;

declare namespace lowercase {
  export {
    lowercaseKey as key,
    lowercaseKeys as object,
    lowercaseValues as values,
  }
}

type uppercase<type extends any.showable> = globalThis.Uppercase<`${type}`>
type uppercaseKey<type extends any.primitive> = type extends any.showable ? uppercase<type> : type
type uppercaseKeys<type extends any.object> = { [ix in keyof type as uppercaseKey<ix>]: type[ix] }
type uppercaseArrayValues<type extends any.showables> = { [ix in keyof type]: uppercase<type[ix]> }
type uppercaseObjectValues<type extends any.dict<any.showable>> = { [ix in keyof type]: uppercase<type[ix]> }
type uppercaseValues<type extends any.showables | any.dict<any.showable>>
  = [type] extends [any.showables] ? uppercaseArrayValues<type>
  : [type] extends [any.dict<any.showable>] ? uppercaseObjectValues<type>
  : never
  ;

declare namespace uppercase {
  export {
    uppercaseKey as key,
    uppercaseKeys as object,
    uppercaseValues as values,
  }
}

type capitalize<type extends any.showable> = globalThis.Capitalize<`${type}`>
type capitalizeKey<type extends any.primitive> = type extends any.showable ? capitalize<type> : type
type capitalizeKeys<type extends any.object> = { [ix in keyof type as capitalizeKey<ix>]: type[ix] }
type capitalizeArrayValues<type extends any.showables> = { [ix in keyof type]: capitalize<type[ix]> }
type capitalizeObjectValues<type extends any.dict<any.showable>> = { [ix in keyof type]: capitalize<type[ix]> }
type capitalizeValues<type extends any.showables | any.dict<any.showable>>
  = [type] extends [any.showables] ? capitalizeArrayValues<type>
  : [type] extends [any.dict<any.showable>] ? capitalizeObjectValues<type>
  : never
  ;
declare namespace capitalize {
  export {
    capitalizeKey as key,
    capitalizeKeys as object,
    capitalizeValues as values,
  }
}

type uncapitalize<type extends any.showable> = globalThis.Uncapitalize<`${type}`>
type uncapitalizeKey<type extends any.primitive> = type extends any.showable ? uncapitalize<type> : type
type uncapitalizeKeys<type extends any.object> = { [ix in keyof type as uncapitalizeKey<ix>]: type[ix] }
type uncapitalizeArrayValues<type extends any.showables> = { [ix in keyof type]: uncapitalize<type[ix]> }
type uncapitalizeObjectValues<type extends any.dict<any.showable>> = { [ix in keyof type]: uncapitalize<type[ix]> }
type uncapitalizeValues<type extends any.showables | any.dict<any.showable>>
  = [type] extends [any.showables] ? uncapitalizeArrayValues<type>
  : [type] extends [any.dict<any.showable>] ? uncapitalizeObjectValues<type>
  : never
  ;
declare namespace uncapitalize {
  export {
    uncapitalizeKey as key,
    uncapitalizeKeys as object,
    uncapitalizeValues as values,
  }
}

type delimitedCase<text extends any.showable, delimiter extends any.showable>
  = Internal.delimitedCase<`${text}`, `${delimiter}`>
type delimitedCaseKey<type extends any.primitive, delimiter extends any.showable>
  = [type] extends [any.showable] ? delimitedCase<type, delimiter> : type
type delimitedCaseKeys<type extends any.object, delimiter extends any.showable>
  = { [ix in keyof type as delimitedCaseKey<ix, delimiter>]: type[ix] }
type delimitedCaseArrayValues<type extends any.showables, delimiter extends any.showable>
  = { [ix in keyof type]: delimitedCase<type[ix], delimiter> }
type delimitedCaseObjectValues<type extends any.dict<any.showable>, delimiter extends any.showable>
  = { [ix in keyof type]: delimitedCase<type[ix], delimiter> }
type delimitedCaseValues<type extends any.showables | any.dict<any.showable>, delimiter extends any.showable>
  = [type] extends [any.showables] ? delimitedCaseArrayValues<type, delimiter>
  : [type] extends [any.dict<any.showable>] ? delimitedCaseObjectValues<type, delimiter>
  : never
  ;

declare namespace delimitedCase {
  export {
    delimitedCaseKey as key,
    delimitedCaseKeys as object,
    delimitedCaseValues as values,
  }
}

/** For an example implementation, see `./impl.ts` */
declare function delimitedCase<delimiter extends check.is.stringLiteral<string, "shh">>(delimiter: delimiter): {
  <text extends check.is.stringLiteral<text, "shh">>(text: text): delimitedCase<text, delimiter>
  <type extends any.showable>(showable: type): delimitedCase<type, delimiter>
  <type extends any.primitive>(key: type): delimitedCaseKey<type, delimiter>
  (string: string): Uncapitalize<string>
}

type snake<type extends any.showable> = Internal.snake<`${type} `>
type snakeKey<type extends any.primitive> = type extends any.showable ? snake<type> : type
type snakeKeys<type extends any.object> = { [ix in keyof type as snakeKey<ix>]: type[ix] }
type snakeArrayValues<type extends any.showables> = { [ix in keyof type]: snake<type[ix]> }
type snakeObjectValues<type extends any.dict<any.showable>> = { [ix in keyof type]: snake<type[ix]> }
type snakeValues<type extends any.showables | any.dict<any.showable>>
  = [type] extends [any.showables] ? snakeArrayValues<type>
  : [type] extends [any.dict<any.showable>] ? snakeObjectValues<type>
  : never
  ;

declare function snake<text extends check.is.stringLiteral<text, "shh">>(string: text): snake<text>
declare function snake<type extends any.showable>(showable: type): snake<type>
declare function snake<type extends any.primitive>(key: type): snakeKey<type>
declare function snake(text: string): globalThis.Lowercase<string>

namespace snake { snake.case = snake; }
declare namespace snake {
  export {
    snake as case,
    snakeKey as key,
    snakeKeys as object,
    snakeValues as values,
  }
}

type screamingSnake<type extends any.showable> = Internal.screamingSnake<`${type} `>
type screamingSnakeKey<type extends any.primitive> = type extends any.showable ? screamingSnake<`${type} `> : type
type screamingSnakeKeys<type extends any.object> = { [ix in keyof type as screamingSnakeKey<ix>]: type[ix] }
type screamingSnakeArrayValues<type extends any.showables> = { [ix in keyof type]: screamingSnake<type[ix]> }
type screamingSnakeObjectValues<type extends any.dict<any.showable>> = { [ix in keyof type]: screamingSnake<type[ix]> }
type screamingSnakeValues<type extends any.showables | any.dict<any.showable>>
  = [type] extends [any.showables] ? screamingSnakeArrayValues<type>
  : [type] extends [any.dict<any.showable>] ? screamingSnakeObjectValues<type>
  : never
  ;

declare function screamingSnake<text extends check.is.stringLiteral<text, "shh">>(string: text): screamingSnake<text>
declare function screamingSnake<type extends any.showable>(showable: type): screamingSnake<type>
declare function screamingSnake<type extends any.primitive>(key: type): screamingSnakeKey<type>
declare function screamingSnake(text: string): globalThis.Uppercase<string>

namespace screamingSnake { screamingSnake.case = screamingSnake; }
declare namespace screamingSnake {
  export {
    screamingSnake as case,
    screamingSnakeKey as key,
    screamingSnakeKeys as object,
    screamingSnakeValues as values,
  }
}

type kebab<type extends any.showable> = Internal.kebab<`${type} `>
type kebabKey<type extends any.primitive> = type extends any.showable ? kebab<type> : type
type kebabKeys<type extends any.object> = { [ix in keyof type as kebabKey<ix>]: type[ix] }
type kebabArrayValues<type extends any.showables> = { [ix in keyof type]: kebab<type[ix]> }
type kebabObjectValues<type extends any.dict<any.showable>> = { [ix in keyof type]: kebab<type[ix]> }
type kebabValues<type extends any.showables | any.dict<any.showable>>
  = [type] extends [any.showables] ? kebabArrayValues<type>
  : [type] extends [any.dict<any.showable>] ? kebabObjectValues<type>
  : never
  ;

declare function kebab<text extends check.is.stringLiteral<text, "shh">>(text: text): kebab<text>
declare function kebab<type extends any.showable>(showable: type): kebab<type>
declare function kebab<type extends any.primitive>(key: type): kebabKey<type>
declare function kebab(text: string): globalThis.Lowercase<string>

namespace kebab { kebab.case = kebab; }
declare namespace kebab {
  export {
    kebab as case,
    kebabKey as key,
    kebabKeys as object,
    kebabValues as values,
  }
}

type screamingKebab<type extends any.showable> = Internal.screamingKebab<`${type} `>
type screamingKebabKey<type extends any.primitive> = type extends any.showable ? Internal.screamingKebab<`${type} `> : type
type screamingKebabKeys<type extends any.object> = { [ix in keyof type as screamingKebabKey<ix>]: type[ix] }
type screamingKebabArrayValues<type extends any.showables> = { [ix in keyof type]: screamingKebab<type[ix]> }
type screamingKebabObjectValues<type extends any.dict<any.showable>> = { [ix in keyof type]: screamingKebab<type[ix]> }
type screamingKebabValues<type extends any.showables | any.dict<any.showable>>
  = [type] extends [any.showables] ? screamingKebabArrayValues<type>
  : [type] extends [any.dict<any.showable>] ? screamingKebabObjectValues<type>
  : never
  ;

declare function screamingKebab<text extends check.is.stringLiteral<text, "shh">>(string: text): screamingKebab<text>
declare function screamingKebab<type extends any.showable>(showable: type): screamingKebab<type>
declare function screamingKebab<type extends any.primitive>(key: type): screamingKebabKey<type>
declare function screamingKebab(text: string): globalThis.Uppercase<string>

namespace screamingKebab { screamingKebab.case = screamingKebab; }
declare namespace screamingKebab {
  export {
    screamingKebab as case,
    screamingKebabKey as key,
    screamingKebabKeys as object,
    screamingKebabValues as values,
  }
}

/**
 * TODO:
 * - [ ]: currently `options` are not respected. Add support for:
 *        - [ ]: specifying whether the operation should be applied once, or recursively
 * - [ ]: better error messages to handle union inputs
 */
// type splitOn<
//   delimiter extends any.showable,
//   text extends string,
// // _options extends Config.options = Config.default
// >
//   = Union.is<delimiter> extends true ? "Union delimiters are not currently supported"
//   : char.is<`${delimiter}`> extends true ? Internal.splitOnceOnChar<text, delimiter>
//   : charset.is<`${delimiter}`> extends true ? Internal.splitOnceOnChars<empty.string, text, delimiter>
//   : never.illegal_state
//   ;
