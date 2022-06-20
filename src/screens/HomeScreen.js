import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  const [loaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030303" }}>
      {/* Main */}
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Header />
        <SearchBar />

        {/* Popular Section */}
        <LabelAndMore name="Popular" />
        <Card />

        {/* Categories Section */}
        <LabelAndMore name="Categories" />
      </ScrollView>
    </SafeAreaView>
  );
};

const LabelAndMore = ({ name }) => (
  <View
    style={{
      paddingHorizontal: 15,
      marginTop: 25,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Text
      style={{ fontFamily: "Poppins-Medium", color: "#FEFEFE", fontSize: 20 }}
    >
      {name}
    </Text>
    <TouchableOpacity>
      <Text
        style={{ color: "#D64665", fontSize: 15, fontFamily: "Poppins-Medium" }}
      >
        See All
      </Text>
    </TouchableOpacity>
  </View>
);

const Card = ({ date, name, location, pict }) => (
  <View style={styles.card}>
    <Image />
    <View style={styles.dateSection}>
      <Text>Feb</Text>
      <Text>25</Text>
    </View>
    <View style={styles.info}>
      <Text>2000s Hip Hop Night</Text>
      <View style={styles.loc}>
        <Feather name="map-pin" color="#D64665" size={30} />
      </View>
    </View>
    <View>
      <Feather name="arrow-right" color="#FEFEFE" size={30} />
    </View>
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  card: {},
});
