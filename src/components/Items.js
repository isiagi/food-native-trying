import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Color, mealData } from "../constants";
import { StyleSheet } from "react-native";

import { HeartIcon } from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native";

const Items = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("DetailScreen", { item })}
      >
        <View style={styles.price}>
          <Text>$36</Text>
        </View>
        <View>
          <Image source={{ uri: item.image }} style={styles.img} />
          <Text>{item.name}</Text>
        </View>
        <View style={styles.last}>
          <HeartIcon size={20} color={Color.dark} />
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={mealData}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#eff7fb",
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  img: {
    width: "100%",
    height: 100,
  },
  price: {
    padding: 5,
    alignItems: "flex-end",
  },
  last: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});
