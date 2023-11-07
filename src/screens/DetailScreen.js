import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.name,
      headerStyle: { backgroundColor: "#FEF7F2" },
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <StatusBar style="light" />
        <Image source={{ uri: item.image }} style={styles.img} />
        <Text>DetailScreen</Text>
        <Text>{JSON.stringify(item)}</Text>
        <View></View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  container: {
    // backgroundColor: "#FEF7F2",
    flex: 1,
    backgroundColor: "#FEF7F2",
  },
});
