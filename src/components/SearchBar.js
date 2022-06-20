import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const SearchBar = () => {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Feather name="search" color="#FBFBFB" size={25} />
        <Text
          style={{
            color: "#595959",
            fontFamily: "Poppins-Regular",
            fontSize: 16,
            marginLeft: 15,
          }}
        >
          Find amazing events
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#DF496A",
          padding: 5,
          borderRadius: 10,
          shadowColor: "#E95979",
          shadowOffset: { width: -1, height: 4 },
          shadowOpacity: 0.6,
          shadowRadius: 15,
        }}
      >
        <Ionicons name="options-outline" size={25} color="#FFFEFE" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    backgroundColor: "#1C1C1C",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
