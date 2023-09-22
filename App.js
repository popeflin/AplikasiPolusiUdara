import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import background from './assets/background.png';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {useCallback, useState} from "react";
import {s} from "./App.style"
//geolocation
import { requestForegroundPermissionsAsync,getCurrentPositionAsync } from 'expo-location';
import { useEffect } from 'react';
import {PolusiAPI} from './api/polusi';
import { getAirQualityIndexes } from './api/hitungpolusi';
import { Home } from './UIScreen/Home/Home';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { Detail } from './UIScreen/Detail/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageScreen } from './UIScreen/ImageScreen/ImageScreen';

const Stack = createNativeStackNavigator();

const navTheme ={
  colors :{
    background:"transparent"
  }
}
export default function App() {

  const [fontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  

  const [dataPolusi, setDataPolusi] = useState();
  const [coordinate, setCoordinate] = useState();
  const [cityName, setCityName] = useState();

  useEffect(() => {
    getUserCoordinates();
  },[]);



useEffect(() => {
if(coordinate){
  console.log("fetching data polusi");
  fetchDataPolusi();
  fetchLocationToCity()
}else{
  return;
}
},[coordinate]);








async function getUserCoordinates (){

   const {status} = await requestForegroundPermissionsAsync();

   if(status === "granted"){
    
    console.log("Awating GPS");
    const location = await getCurrentPositionAsync();
 
    console.log(location);
    const coordinate = {latitude: location.coords.latitude, longitude: location.coords.longitude};
    
    setCoordinate(coordinate);
   

     return;
   }

}

 async function fetchDataPolusi(){
  //const data = await PolusiAPI.getDataPolusi(coordinate);
  const data = {"co":1495.36,"no":0.23,"no2":37.7,"o3":94.41,"so2":18.84,"pm2_5":64.07,"pm10":78.22,"nh3":12.29}
  const dataQuality =  getAirQualityIndexes(data);

  setDataPolusi(dataQuality);

 }

 async function fetchLocationToCity(){
    const cityName = await PolusiAPI.getNamaKota(coordinate);
    setCityName(cityName);
    console.log(cityName.address.city);
    
 }

 const aqiDescription = [
  "Baik - Kualitas udara dianggap memuaskan, dan polusi udara menimbulkan sedikit atau tidak ada risiko.",
  "Cukup - Kualitas udara dapat diterima; namun, mungkin ada kekhawatiran kesehatan yang sedang bagi sejumlah kecil orang yang mungkin lebih sensitif terhadap polusi udara.",
  "Sedang - Anggota kelompok sensitif mungkin mengalami efek kesehatan. Masyarakat umum kemungkinan besar tidak akan terpengaruh.",
  "Buruk - Semua orang mungkin mulai mengalami efek kesehatan; anggota kelompok sensitif mungkin mengalami efek kesehatan yang lebih serius.",
  "Sangat Buruk - Peringatan kesehatan: semua orang mungkin mengalami efek kesehatan yang lebih serius.",
];



 





  return (
    <NavigationContainer theme={navTheme} >
    <ImageBackground imageStyle={s.img} source={background} style={s.backgroundImage}>
    <SafeAreaProvider>
    <SafeAreaView style={s.container} >
  {  fontLoaded && coordinate && dataPolusi && cityName &&(
    <Stack.Navigator screenOptions = {{

      headerShown: false,
    }} initialRouteName='Camera' >

      
      

      
      <Stack.Screen name="Home">
        {() => (

            <Home dataPolusi = {dataPolusi} cityName = {cityName}/>

        )}
        </Stack.Screen>

        
      
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Camera" component={ImageScreen}/>
      
    
  
      </Stack.Navigator>
)}
    </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
    </NavigationContainer>
  );
}


