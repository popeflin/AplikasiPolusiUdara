import { View } from "react-native"
import { HomeFooter } from "../UIComponent/HomeFooter/HomeFooter"
import { HomeHeader } from "../UIComponent/HomeHeader/HomeHeader"
import { s } from "./Home.style";



export function Home(){


    return (
    <>

      <View style = {s.homeheader}>
      <HomeHeader/>
      </View>

      <View style = {s.homebody}></View>
    
      <View style = {s.homefooter}>
      <HomeFooter/>
      </View>
    
    </>
    );

}