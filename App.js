import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {useState} from "react";
import {s} from "./App.style"
//geolocation
import { requestForegroundPermissionsAsync,getCurrentPositionAsync } from 'expo-location';
import { useEffect } from 'react';
import {PolusiAPI} from './api/polusi';
import { getAirQualityIndexes } from './api/hitungpolusi';


export default function App() {

  const [dataPolusi, setDataPolusi] = useState();
  const [coordinate, setCoordinate] = useState();

  useEffect(() => {
    getUserCoordinates();
  },[]);



useEffect(() => {
if(coordinate){
  console.log("fetching data polusi");
  fetchDataPolusi();
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

 const aqiDescription = [
  "Baik - Kualitas udara dianggap memuaskan, dan polusi udara menimbulkan sedikit atau tidak ada risiko.",
  "Cukup - Kualitas udara dapat diterima; namun, mungkin ada kekhawatiran kesehatan yang sedang bagi sejumlah kecil orang yang mungkin lebih sensitif terhadap polusi udara.",
  "Sedang - Anggota kelompok sensitif mungkin mengalami efek kesehatan. Masyarakat umum kemungkinan besar tidak akan terpengaruh.",
  "Buruk - Semua orang mungkin mulai mengalami efek kesehatan; anggota kelompok sensitif mungkin mengalami efek kesehatan yang lebih serius.",
  "Sangat Buruk - Peringatan kesehatan: semua orang mungkin mengalami efek kesehatan yang lebih serius.",
];



 
function getDataPolusiDetail(){
  console.log(dataPolusi);
  return dataPolusi.map(({pollutant, value, index, label, range}, idx) => (
    <View key={idx} style={s.section}>
      <Text style={s.text}>{pollutant}: {value} µg/m³</Text>
      <Text style={s.text}>{label} ({index}): {range[0]} - {range[1]}</Text>
      <Text style={s.text}>Kesimpulan: Kualitas udara {label.toLowerCase()} untuk {pollutant}</Text>
    </View>
  ));
}




  return (
    <>
    <SafeAreaProvider>
    <SafeAreaView>
  
    <View style={s.container}>
      <Text style={s.header}>Deskripsi Indeks Kualitas Udara (AQI)</Text>
      <ScrollView>
      {dataPolusi && getDataPolusiDetail()}
      </ScrollView>
    </View>
  

    </SafeAreaView>
    </SafeAreaProvider>
    </>
  );
}


