import { View, Button } from "react-native"
import { HomeFooter } from "../UIComponent/HomeFooter/HomeFooter"
import { HomeHeader } from "../UIComponent/HomeHeader/HomeHeader"
import { s } from "./Home.style";



export function Home({navigation}){


    return (
    <>

      <View style = {s.homeheader}>
      <HomeHeader/>
      </View>

      <View style = {s.homebody}>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.push('Detail')}
      /> */}
      </View>
    
      <View style = {s.homefooter}>
      <HomeFooter/>
      </View>
    
    </>
    );

}