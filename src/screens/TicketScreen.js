import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const TicketScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030303" }}>
      {/* Status Bar */}
      <StatusBar style="light"></StatusBar>

      {/* Main */}
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({});
