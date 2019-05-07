import React from "react";
import { View, Text } from "react-native-web";

import useStyles from "../useStyles";

export default () => {
  const styles = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hop hop</Text>
    </View>
  );
};

const stylesheet = {
  container: {
    backgroundColor: "{bg01}",
    marginBottom: 20,
  },
  text: {
    color: "{fg00}",
  },
};
