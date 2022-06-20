import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const [save, setSave] = useState("");

  const [loaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#030303" }}>
      {/* Main */}
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.headerImg}>
          <Image
            source={{
              uri: item.pict,
            }}
            style={{ height: "100%", width: "100%" }}
          />
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              top: 50,
              left: 25,
              width: "88%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "#201F21",
                padding: 14,
                width: 50,
                height: 50,
                borderRadius: "50%",
                borderColor: "#383637",
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="chevron-left" color="#FEFEFE" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSave("Save");
                alert("✨ Saved!");
              }}
              style={{
                backgroundColor: "#201F21",
                padding: 14,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                borderColor: "#383637",
                borderWidth: 2,
              }}
            >
              {!save ? (
                <Feather name="bookmark" color="#FEFEFE" size={20} />
              ) : (
                <FontAwesome name="bookmark" color="#FEFEFE" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoWrapper}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 25,
              color: "#FEFEFE",
            }}
          >
            {item.name}
          </Text>
          <View style={[styles.loc, { marginTop: 10 }]}>
            <Feather name="map-pin" color="#D64665" size={20} />
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 15,
                color: "#5A5A5A",
                marginLeft: 8,
              }}
            >
              {item.location}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 3 }}>
            <View style={styles.loc}>
              <Feather name="calendar" color="#D64665" size={20} />
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 15,
                  color: "#5A5A5A",
                  marginLeft: 8,
                }}
              >
                {item.date} 2022
              </Text>
            </View>

            <View style={[styles.loc, { marginLeft: 12 }]}>
              <Feather name="clock" color="#D64665" size={20} />
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 15,
                  color: "#5A5A5A",
                  marginLeft: 8,
                }}
              >
                07.30 PM
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <View style={styles.buyers}>
              <Image
                source={require("../../assets/images/user.png")}
                style={styles.buyerImg}
              />
              <Image
                source={{
                  uri: "https://i.scdn.co/image/ab67616d0000b27353f6fa0d2589c6a7174f4b81",
                }}
                style={[styles.buyerImg, styles.buyerZIndex]}
              />
              <Image
                source={{
                  uri: "https://i.scdn.co/image/ab67616d0000b2737815a98b22b6914a45263190",
                }}
                style={[styles.buyerImg, styles.buyerZIndex]}
              />
              <Image
                source={{
                  uri: "https://i.scdn.co/image/ab6761610000e5eb05cead99b1a81b82a9a42838",
                }}
                style={[styles.buyerImg, styles.buyerZIndex]}
              />
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrxa_7BJaBZd39Hooz1tYCSd9UmnoZFv3vBbjvXV6K8pttDuGr_It2q-A4LuXgYLiN4o&usqp=CAU",
                }}
                style={[styles.buyerImg, styles.buyerZIndex]}
              />
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg",
                }}
                style={[styles.buyerImg, styles.buyerZIndex]}
              />
            </View>

            <Text
              style={{
                fontFamily: "Poppins-Regular",
                color: "#FEFEFE",
                fontSize: 17,
              }}
            >
              2,330 Tickets Sold
            </Text>
          </View>
        </View>

        <View style={styles.aboutWrapper}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 19,
              color: "#FEFEFE",
            }}
          >
            About
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 15,
              color: "#9C9C9C",
              textAlign: "justify",
              marginTop: 10,
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, eius
            ex consectetur eaque ab alias vitae obcaecati sed ullam numquam, est
            sint quo minus? Doloribus saepe numquam velit nulla dolore sunt
            natus explicabo vel hic rerum consequatur, aspernatur asperiores
            odit!
          </Text>
          <View style={styles.buyTicketWrapper}>
            <Text
              style={{
                color: "#DF496A",
                fontFamily: "Poppins-Bold",
                fontSize: 25,
              }}
            >
              $320.45
            </Text>
            <TouchableOpacity
              style={styles.btnTicket}
              onPress={() => {
                alert("✨ Buy Ticket Successfully ✨");
                navigation.push("Ticket", {item: item});
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Regular",
                  color: "#FEFEFE",
                }}
              >
                Buy Ticket
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  headerImg: {
    height: 340,
  },
  info: {
    backgroundColor: "red",
    padding: 20,
    backgroundColor: "#030303",
  },
  aboutWrapper: {
    backgroundColor: "#1C1C1C",
    marginTop: 10,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buyTicketWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  btnTicket: {
    backgroundColor: "#DF496A",
    padding: 10,
    width: 200,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#E95979",
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
  },
  infoWrapper: {
    marginHorizontal: 25,
    marginVertical: 20,
  },
  loc: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  buyers: {
    flexDirection: "row",
  },
  buyerImg: { width: 35, height: 35, borderRadius: 100 },
  buyerZIndex: {
    marginLeft: -8,
    zIndex: 3,
  },
});
