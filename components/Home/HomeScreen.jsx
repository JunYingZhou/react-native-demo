import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
// import Carousel from "react-native-snap-carousel";
import BetterBanner from 'react-native-better-banner';
// const { width } = Dimensions.get("window"); // Get the device width for carousel sizing

const carouselItems = [
  {
    id: "1",
    text: "Slide 1",
    image: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_640.jpg",
  },
  {
    id: "2",
    text: "Slide 2",
    image: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_640.jpg",
  },
  {
    id: "3",
    text: "Slide 3",
    image: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_640.jpg",
  },
];

function HomeScreen() {
  // const renderItem = ({ item }) => (
  //   <View style={styles.carouselItem}>
  //     <Image source={{ uri: item.image }} style={styles.carouselImage} />
  //     <Text style={styles.carouselText}>{item.text}</Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <BetterBanner
                    //   bannerComponents={[
                    //     <View style={{
                    //         width: '100%',
                    //         height: '100%',
                    //         backgroundColor: '#1997fc',
                    //         alignItems: 'center',
                    //         justifyContent: 'center'
                    //     }}>
                    //         <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>Page 01</Text>
                    //         <Text style={{fontSize: 15, color: '#fff'}}>Welcome! have a good time</Text>
                    //     </View>,
                    //     <View style={{
                    //         width: '100%',
                    //         height: '100%',
                    //         backgroundColor: '#da578f',
                    //         alignItems: 'center',
                    //         justifyContent: 'center'
                    //     }}>
                    //         <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>Page 02</Text>
                    //         <Text style={{fontSize: 15, color: '#fff'}}>Welcome! have a good time</Text>
                    //     </View>,
                    //     <View style={{
                    //         width: '100%',
                    //         height: '100%',
                    //         backgroundColor: '#7c3fe4',
                    //         alignItems: 'center',
                    //         justifyContent: 'center'
                    //     }}>
                    //         <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>Page 03</Text>
                    //         <Text style={{fontSize: 15, color: '#fff'}}>Welcome! have a good time</Text>
                    //     </View>,
                    // ]}
        bannerImages={[
          {uri: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_640.jpg"},
          {uri: "http://attachments.gfan.net.cn/forum/attachments2/201402/05/211342pkd8axiibj5axizi.jpg.thumb.jpg"},
          {uri: "http://attachments.gfan.net.cn/forum/attachments2/201402/05/2113441e4dw5zvv49jkdow.jpg.thumb.jpg"},
          {uri: "http://attachments.gfan.net.cn/forum/attachments2/201402/05/2113472s3y3y1w62n2io6y.jpg.thumb.jpg"},
      ]}
        bannerTitles={[
          "Page 01 ",
          "Page 02",
          "Page 03",
          "Page 04",
        ]}
        onPress={(index) => alert("you pressed index is : " + index)}
        indicatorContainerBackgroundColor={"rgba(0,0,0,0.3)"} // 指示器背景颜色
        isSeamlessScroll={true} // 是否无缝滚动
        isAutoScroll={true} // 是否自动滚动
        scrollInterval={3000} // 滚动间隔时间
      />
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
    // justifyContent: 'center',
  },
  carouselContainer: {
    height: 200, // Adjust as needed
    marginBottom: 20,
  },
  carouselItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  carouselText: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
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
