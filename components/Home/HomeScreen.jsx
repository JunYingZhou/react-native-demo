import React from 'react';
import { View, Text, ScrollView, StyleSheet } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.text}>欢迎来到首页</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>
          <Text style={styles.subText}>这里是您的个人中心</Text>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#555',
  },
});

export default HomeScreen;
