import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import beachImage from "@/assets/meditation-images/beach.webp";
import {LinearGradient} from 'expo-linear-gradient';
const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground source={beachImage} className="flex-1" resizeMode="cover">
        <LinearGradient className='flex-1' colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
         <Text>App</Text>
         </LinearGradient>
         </ImageBackground>
     
    </View>
  )
}

export default App
