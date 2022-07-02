import localeFile from "../locale/index.json";
import { getLocaleAndPath } from "./getLocaleAndPath";

export function getTitle(key: string, locale?: string): string {
  const currentLocale = locale ?? getLocaleAndPath().locale;

  {/* @ts-ignore: Unreachable code error*/ }
  return localeFile[currentLocale][key] ?? "";
}

export function getTitleLocale(key: string, locale: string): string {
  const currentLocale = locale ?? "fa";

  {/* @ts-ignore: Unreachable code error*/ }
  return localeFile[currentLocale][key] ?? "";
}

export function getAllTitle(): object {
  const currentLocale = getLocaleAndPath().locale;

  {/* @ts-ignore: Unreachable code error*/ }
  return localeFile[currentLocale] ?? {};
}