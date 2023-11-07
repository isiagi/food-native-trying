import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Selection = () => {
  return (
    <View style={styles.select}>
      <View style={styles.item}>
        <Image
          source={require("../../assets/icons/donut.png")}
          style={styles.img}
        />
        <Text>Donut</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={require("../../assets/icons/burger.png")}
          style={styles.img}
        />
        <Text>Burger</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={require("../../assets/icons/smoothie.png")}
          style={styles.img}
        />
        <Text>Smoothie</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={require("../../assets/icons/cake.png")}
          style={styles.img}
        />
        <Text>PanCake</Text>
      </View>
      <View>
        <Image
          source={require("../../assets/icons/pizza.png")}
          style={styles.img}
        />
        <Text>Pizza</Text>
      </View>
    </View>
  );
};

export default Selection;

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
    resizeMode: "stretch",
  },
  select: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
});
