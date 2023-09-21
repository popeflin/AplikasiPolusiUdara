import { View } from "react-native";
import { s } from "./Home.style";
;
import { HomeHeader } from "../UIComponent/HomeHeader/HomeHeader";
import { HomeFooter } from "../UIComponent/HomeFooter/HomeFooter";
export function Home() {
 
  return (
    <>
      <View style={s.homeheader}>
        <HomeHeader />
      </View>
      <View style={s.searchbar_container}>
     
      </View>
      <View style={s.homefooter}>
        <HomeFooter/>
      </View>
    </>
  );
}
