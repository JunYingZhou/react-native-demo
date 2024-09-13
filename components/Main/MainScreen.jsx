import React from 'react';
import { View, Text, ImageBackground, Image, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MainScreen() {
    const navigation = useNavigation();
    const backImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1g11zahP5Eb3_DIvUAgNnPOhSs0XHOgLKw&s";
    const imageUrl = "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_640.jpg";
  
    const handlePress = () => {
      navigation.navigate('Home');
    };
    
    return (
      <ImageBackground source={{ uri: backImageUrl }} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Hello World</Text>
          <Text>
            <Text style={styles.redText}>让我们 </Text>
            <Text style={styles.blueText}>探索 </Text>
            <Text style={styles.greenText}>神奇的世界</Text>
          </Text>
          <View style={styles.redBox} />
          <Image 
            source={{ uri: imageUrl }} 
            style={styles.image}
          />
          <TextInput style={styles.input} placeholder="输入文本" />
          <Button
            title="跳转到Home"
            onPress={handlePress}
          />
        </View>
      </ImageBackground>
    );
  }
  const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    redText: {
      color: 'red',
    },
    blueText: {
      color: 'blue',
    },
    greenText: {
      color: 'green',
    },
    redBox: {
      width: 100,
      height: 100,
      backgroundColor: 'red',
    },
    image: {
      width: 200,
      height: 200,
    },
    input: {
      width: 200,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 10,
    },
  });
  
  export default MainScreen;
