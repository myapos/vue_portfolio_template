import { version } from "../../package.json";

export const basePropertyKey = "toggledTheme";
export const propertyKeyToLocalStore = `${version}--${basePropertyKey}`;

export const basePropertyKeyForLanguage = "toggledLanguage";
export const propertyKeyForLanguage = `${version}--${basePropertyKeyForLanguage}`;
