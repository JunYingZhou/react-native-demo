import React from 'react';
import { View, Text, ImageBackground, Image, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from '../../apis/user';
import { useState } from 'react';
function MainScreen() {
    const navigation = useNavigation();
    const backImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1g11zahP5Eb3_DIvUAgNnPOhSs0XHOgLKw&s";
    const imageUrl = "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_640.jpg";
  

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
      navigation.navigate('Home');
    };

    const handleSubmit = async() => {
      const res = await login({username, password})
      console.log("=====================================================================================res========================================================",res);
      if(res.token !== null){
      // alert.alert('Success', `Username: ${username}\nPassword: ${password}`);
      navigation.navigate('Home');
      }else{
      // alert.alert('Error', 'Please enter both username and password');
      }


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
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Submit" onPress={handleSubmit} />
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
