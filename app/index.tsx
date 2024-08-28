import React from 'react';
import { View, Text, ImageBackground, SafeAreaView } from 'react-native';
import beachImage from '@/assets/meditation-images/beach.webp';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import CustomButtom from '@/components/CustomButton';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';
const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        className="flex-1"
        resizeMode="cover"
      >
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <SafeAreaView className="flex-1 px-1 my-12 mx-5 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => router.push('/nature-meditate')}
                title="Get Started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
