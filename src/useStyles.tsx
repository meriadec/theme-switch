import React from "react";
import { StyleSheet } from "react-native-web";
import { createContext, useState, useContext } from "react";

import themeDark from "./themes/dark";
import themeLight from "./themes/light";

const ThemeContext = createContext();
const SetThemeContext = createContext();

const themes = [themeDark, themeLight];
const stylesSheetMap = new Map();

// retrieve correct stylesheet based on theme, create it if not found
export default function useStyles(definitions: Record<string, any>) {
  const theme = useTheme();
  let def = stylesSheetMap.get(definitions);
  if (!def) {
    def = {};
    stylesSheetMap.set(definitions, def);
  }
  if (!def[theme]) {
    const themeConfig = themes.find(t => t.name === theme);
    def[theme] = StyleSheet.create(applyTheme(definitions, themeConfig));
  }
  return def[theme];
}

// only run once for every stylesheet definition in components
function applyTheme(definitions, theme) {
  const out = {};
  for (const elName in definitions) {
    if (definitions.hasOwnProperty(elName)) {
      const el = {};
      for (const prop in definitions[elName]) {
        if (definitions[elName].hasOwnProperty(prop)) {
          let value = definitions[elName][prop];
          if (typeof value === "string" && value.startsWith("{")) {
            const keyInTheme = value.substr(1, value.length - 2);
            value = theme[keyInTheme];
          }
          el[prop] = value;
        }
      }
      out[elName] = el;
    }
  }
  return out;
}

// ability to get/set the theme
export function ThemeSwitcherProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export const useSetTheme = () => useContext(SetThemeContext);
