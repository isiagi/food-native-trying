import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Color } from "../constants";
import Selection from "../components/Selection";
import Items from "../components/Items";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>I Want To Eat!</Text>
      <View>
        <Selection />
        <Items navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "400",
    color: Color.dark,
  },
});
