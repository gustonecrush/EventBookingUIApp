import React, { useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Populars from "../../assets/data/Populars";
import { Animated } from "react-native";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Populars.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              location={item.location}
              pict={item.pict}
              date={item.date}
              nav={navigation}
              item={item}
            />
          ))}
        </ScrollView>

        {/* Categories Section */}
        <LabelAndMore name="Categories" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.btn}>
            <View
              style={{
                backgroundColor: "#DF496A",
                padding: 9,
                borderRadius: 15,
                marginRight: 10,
                shadowColor: "#DF496A",
                shadowOffset: { width: -1, height: 4 },
                shadowOpacity: 0.6,
                shadowRadius: 15,
              }}
            >
              <Feather name="video" size={25} color={"#FEFEFE"} />
            </View>
            <View>
              <Text style={{ fontFamily: "Poppins-Medium", color: "#FEFEFE" }}>
                Movies
              </Text>
              <Text style={{ fontFamily: "Poppins-Regular", color: "#FEFEFE" }}>
                45 <Text style={{ color: "#5a5a5a" }}>Events</Text>{" "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <View
              style={{
                backgroundColor: "#FEA002",
                padding: 9,
                borderRadius: 15,
                marginRight: 10,
                shadowColor: "#FEA002",
                shadowOffset: { width: -1, height: 4 },
                shadowOpacity: 0.6,
                shadowRadius: 15,
              }}
            >
              <FontAwesome5 name="guitar" size={25} color={"#FEFEFE"} />
            </View>
            <View>
              <Text style={{ fontFamily: "Poppins-Medium", color: "#FEFEFE" }}>
                Concerts
              </Text>
              <Text style={{ fontFamily: "Poppins-Regular", color: "#FEFEFE" }}>
                87 <Text style={{ color: "#5a5a5a" }}>Events</Text>{" "}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <View
              style={{
                backgroundColor: "#56CCF2",
                padding: 9,
                borderRadius: 15,
                marginRight: 10,
                shadowColor: "#56CCF2",
                shadowOffset: { width: -1, height: 4 },
                shadowOpacity: 0.6,
                shadowRadius: 15,
              }}
            >
              <Feather name="video" size={25} color={"#FEFEFE"} />
            </View>
            <View>
              <Text style={{ fontFamily: "Poppins-Medium", color: "#FEFEFE" }}>
                Festival
              </Text>
              <Text style={{ fontFamily: "Poppins-Regular", color: "#FEFEFE" }}>
                210 <Text style={{ color: "#5a5a5a" }}>Events</Text>{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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

const Card = ({ date, name, location, pict, nav, item }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: pict }}
      style={{
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
        borderRadius: 20,
      }}
    />
    <View style={styles.dateSection}>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          color: "#FFFFFF",
          marginBottom: -4,
        }}
      >
        {date.slice(0, 3)}
      </Text>
      <Text
        style={{ fontFamily: "Poppins-Bold", color: "#FFFFFF", fontSize: 30 }}
      >
        {date.slice(4, 7)}
      </Text>
    </View>
    <View
      style={{
        marginBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
      }}
    >
      <View style={styles.info}>
        <Text
          style={{ fontFamily: "Poppins-Bold", fontSize: 20, color: "#FEFEFE" }}
        >
          {name}
        </Text>
        <View style={styles.loc}>
          <Feather name="map-pin" color="#D64665" size={25} />
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 15,
              color: "#5A5A5A",
              marginLeft: 8,
            }}
          >
            {location}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => nav.navigate("Detail", { item: item })}
        style={{
          backgroundColor: "#201F21",
          padding: 14,
          borderRadius: "50%",
          borderColor: "#383637",
          borderWidth: 2,
          marginLeft: 20,
        }}
      >
        <Feather name="arrow-right" color="#FEFEFE" size={20} />
      </TouchableOpacity>
    </View>
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    backgroundColor: "#201F21",
    marginHorizontal: 15,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
  },
  card: {
    backgroundColor: "red",
    marginHorizontal: 15,
    marginTop: 25,
    borderRadius: 20,
    height: 400,
    width: 300,
    justifyContent: "flex-end",
  },
  dateSection: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  info: {},
  loc: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  dateSection: {
    position: "absolute",
    top: 35,
    right: 20,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#201F21",
    borderColor: "#383637",
    borderWidth: 2,
  },
});
