import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

const TicketScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030303" }}>
      {/* Main */}
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: "#201F21",
              padding: 14,
              borderRadius: "50%",
              borderColor: "#383637",
              borderWidth: 2,
            }}
          >
            <Feather name="chevron-left" color="#FEFEFE" size={20} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: "#FEFEFE",
              fontFamily: "Poppins-Bold",
              marginLeft: -50,
            }}
          >
            Ticket
          </Text>
          <Text></Text>
        </View>

        {/* Tickets */}
        <View style={styles.ticketWrapper}>
          <View style={styles.ticketOne}>
            <Image
              source={{
                uri: item.pict,
              }}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              }}
            />

            <View style={styles.infoWrapper}>
              <Text style={styles.title}>{item.name} </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  color: "#FEFEFE",
                  textAlign: "center",
                  zIndex: 4,
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </Text>
            </View>
          </View>

          <View style={styles.decoration}>
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: "#030303",
                borderRadius: "50%",
                position: "absolute",
                left: -15,
              }}
            ></View>
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: "#030303",
                borderRadius: "50%",
                alignSelf: "flex-end",
                position: "absolute",
                top: 0,
                right: -15,
              }}
            ></View>
          </View>

          {/* Info Buyer */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 25,
              marginTop: 68,
            }}
          >
            <View>
              <View style={{ marginBottom: 15 }}>
                <Text
                  style={{ fontFamily: "Poppins-Medium", color: "#5c5c5c" }}
                >
                  Name
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: "#FBFBFB",
                    fontSize: 18,
                  }}
                >
                  Farhan Malik
                </Text>
              </View>

              <View style={{ marginBottom: 15 }}>
                <Text
                  style={{ fontFamily: "Poppins-Medium", color: "#5c5c5c" }}
                >
                  Booking No
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: "#FBFBFB",
                    fontSize: 18,
                  }}
                >
                  DR78246546
                </Text>
              </View>

              <View>
                <Text
                  style={{ fontFamily: "Poppins-Medium", color: "#5c5c5c" }}
                >
                  Date
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: "#FBFBFB",
                    fontSize: 18,
                  }}
                >
                  {item.date} 2022
                </Text>
              </View>
            </View>

            <View>
              <View style={{ marginBottom: 15 }}>
                <Text
                  style={{ fontFamily: "Poppins-Medium", color: "#5c5c5c" }}
                >
                  Quantity
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: "#FBFBFB",
                    fontSize: 18,
                  }}
                >
                  1 Ticket
                </Text>
              </View>

              <View style={{ marginBottom: 15 }}>
                <Text
                  style={{ fontFamily: "Poppins-Medium", color: "#5c5c5c" }}
                >
                  Show Time
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: "#FBFBFB",
                    fontSize: 18,
                  }}
                >
                  07.30 PM
                </Text>
              </View>

              <View>
                <Text
                  style={{ fontFamily: "Poppins-Medium", color: "#5c5c5c" }}
                >
                  Phone Number
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: "#FBFBFB",
                    fontSize: 18,
                  }}
                >
                  00 0212 0212
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.decoration, styles.decoration2]}>
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: "#030303",
                borderRadius: "50%",
                position: "absolute",
                left: -15,
              }}
            ></View>
          </View>

          <View style={[styles.decoration, styles.decoration2, { left: -5 }]}>
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: "#030303",
                borderRadius: "50%",
                position: "absolute",
                left: -15,
              }}
            ></View>
          </View>

          {/* Barcode */}
          <Image
            source={require("../../assets/images/barcode.png")}
            style={{
              width: "70%",
              height: 80,
              position: "absolute",
              bottom: 25,
              left: 0,
              right: 0,
              marginLeft: 50,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 10,
    justifyContent: "space-between",
  },
  ticketWrapper: {
    marginHorizontal: 25,
    marginVertical: 15,
    backgroundColor: "#191919",
    borderRadius: 40,
    height: 650,
  },
  ticketOne: {
    backgroundColor: "#191919",
    height: 265,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: "relative",
    // borderBottomColor: "#5A5A5A",
    // borderBottomWidth: 5,
  },
  infoWrapper: {
    position: "absolute",
    bottom: 35,
    right: 0,
    left: 0,
    zIndex: 6,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#FEFEFE",
    textAlign: "center",
  },
  decoration: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -20,
  },
  decoration2: {
    bottom: 150,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
  },
});
