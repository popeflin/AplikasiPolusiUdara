
import {View,Text} from "react-native";
import {Txt} from "../UIComponent/Txt/Txt";
import { useRoute } from "@react-navigation/native";
import { Header } from "../UIComponent/Header/Header";

export function Detail(){
  const params = useRoute();
  console.log(params.params.cityName);
    return (
      <>
      <Header/>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
    </>
    );
}