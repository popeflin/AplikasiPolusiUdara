import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {useState} from "react";
import {s} from "./App.style"
//geolocation
import { requestForegroundPermissionsAsync,getCurrentPositionAsync } from 'expo-location';
import { useEffect } from 'react';
import {PolusiAPI} from './api/polusi';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function App() {

  const [coordinate, setCoordinate] = useState();

  useEffect(() => {
    getUserCoordinates();
  },[]);

  useEffect(() => {
    if(coordinate){
      
      getDataPolusi();
    }
  },[coordinate]);

async function getDataPolusi(){
  const data = await PolusiAPI.getDataPolusi(coordinate);
  console.log(data);
  return data;
}


async function getUserCoordinates (){

   const {status} = await requestForegroundPermissionsAsync();
   console.log(status);

   if(status === "granted"){
    
    console.log("Awating GPS");
    const location = await getCurrentPositionAsync();
    console.log(location);
    setCoordinate({latitude: location.coords.latitude, longitude: location.coords.longitude});

     return;
   }

}

 async function getDataPolusi(){
  const data = await PolusiAPI.getDataPolusi(coordinate);
  console.log(data);
 }



  return (
    <>
    <SafeAreaProvider>
    <SafeAreaView>
    <View style={s.container}>
      
      <Text >Hello World</Text>
      
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
    </>
  );
}


