import { useFonts } from "expo-font";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  const [loaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Date and Info */}
      <View>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "#686868",
            fontSize: 15,
            letterSpacing: 1,
          }}
        >
          February 14, 10:30 PM
        </Text>
        <Text
          style={{ fontFamily: "Poppins-Bold", color: "#FEFEFE", fontSize: 30 }}
        >
          Discover Events
        </Text>
      </View>

      <Image
        style={{ width: 60, height: 60, borderRadius: "50%" }}
        source={require("../../assets/images/user.png")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    paddingTop: 20,
  },
});
