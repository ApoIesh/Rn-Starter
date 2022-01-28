import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";

const HomeScreen = (props) => {
  // console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        // console.log('Button.pressed')
        title="Go to Components Demo"
      />

      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        {/* console.log('List Pressed') */}
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate("List")}
      />

      <Button
        title="Go to Image Demo"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => props.navigation.navigate("Square")}
      />
      <Button
        title="Go to flex Demo"
        onPress={() => props.navigation.navigate("flex")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Text")}>
        <Text>Go to Text Demo</Text>
      </TouchableOpacity>
      <Button
        title="Go to box Demo"
        onPress={() => props.navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
