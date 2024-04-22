import { StatusBar } from 'expo-status-bar';
import { Image,ScrollView,Text, View } from 'react-native';
import {Link,Redirect,router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import  {images} from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height:'100%'}}>
          <View className="w-full justify-center 
          items-center min-h-[82vh] px-4">
            <Image
               source={images.logo}
               className ='w-[200px] h-[84px]'
               resizeMode ="contain"
               />
            <Image
               source={images.cards}
               className ='max w-[380px] h-[300px]'
               resizeMode ="contain"
               />
            <View className="relative mt-5 ">
              <Text className="text-center text-secondary text-3xl font-bold ">
                Talent Nexa Copilot
              </Text>

              <Image
               source={images.path}
               className="w-[210px] h-[29px] absoloute
              -bottom-1 -right-10 "
              resizeMode='contain'
              />
              <Text className="text-center text-white text-xl font-bold">
                Develop talent Employee-Bussiness
              </Text>
              <Text className="text-sm text-white  font-pregular">
                We're a career advisory and business networking platform, aiding individuals in their career growth.
              </Text>
              <CustomButton
            title="Continue with Login"
            handlePress={()=>router.push('/sign-in')}
            containerStyles="mt-7"
          />

          </View>
          </View>

        </ScrollView>
        <StatusBar backgroundColor='#161622'
         style='light'
        />
      </SafeAreaView>

  );
}
