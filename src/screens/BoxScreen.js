import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      {/* <View style={styles.viewStyle}>
       <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTowStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3 </Text>  */}
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderColor: "black",
    borderWidth: 5,
    // alignItems: 'center',
    flexDirection: "row",
    height: 200,
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    top: 140,
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },

  //   textOneStyle: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     flex: 4,
  //   },
  //   textTowStyle: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     flex: 4,
  //     fontSize: 18,
  //     //    ...StyleSheet.absoluteFillObject
  //     // position: "absolute",
  //     // top: 0,
  //     // right: 0,
  //     // bottom: 0,
  //     // left: 0,
  //   },
  //   textThreeStyle: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     flex: 2,
  //     // ...StyleSheet.absoluteFillObject
  //   },
});

export default BoxScreen;
