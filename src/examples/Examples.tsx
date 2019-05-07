import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { StyleSheet, View, Text } from "react-native-web";

import useStyles, {
  ThemeSwitcherProvider,
  useTheme,
  useSetTheme,
} from "../useStyles";

import Toto from "../components/Toto";

const App = () => (
  <ThemeSwitcherProvider>
    <Examples />
  </ThemeSwitcherProvider>
);

const Examples = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();
  const styles = useStyles(stylesheet);

  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  console.log(`render`);
  return (
    <View style={styles.container}>
      <Toto />
      <View style={styles.box} onClick={changeTheme}>
        <Text style={styles.text}>theme is {theme}</Text>
      </View>
    </View>
  );
};

const stylesheet = {
  container: {
    backgroundColor: "{bg00}",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
  },
  box: {
    justifyContent: "center",
    height: 48,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "hsla(0, 0%, 0%, 0.2)",
    backgroundColor: "{bg01}",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  text: {
    color: "{fg00}",
  },
};

export default hot(module)(App);
