///<reference path="fourslash.ts" />

// @allowJs: true
// @checkJs: true
// @strict: true
// @noEmit: true
// @noLib: true

// @Filename: func.js
////export function func(/** @type {string} */ param) {}

// @Filename: use-it.ts
////import { func } from './func.js'
////type FuncParam/**/ = (typeof func) extends (...args: infer P) => any ? P : never;

goTo.marker();
verify.quickInfoIs(`type FuncParam = [param: string]`)