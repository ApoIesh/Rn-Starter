import React from "react";
import { render } from "react-dom";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend #1", age: 20 },
    { name: "friend #2", age: 21 },
    { name: "friend #3", age: 22 },
    { name: "friend #4", age: 23 },
    { name: "friend #5", age: 24 },
    { name: "friend #6", age: 25 },
    { name: "friend #7", age: 26 },
    { name: "friend #8", age: 27 },
    { name: "friend #9", age: 28 },
  ];

  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={true}
      keyExtractor={(frind) => frind.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - age{item.age}
          </Text>
        );
        // element === {item: {name: 'friend #1'}, index: 0 }
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: 'green',
    marginVertical: 20,
    marginHorizontal: 20,
    
  },
});

export default ListScreen;
