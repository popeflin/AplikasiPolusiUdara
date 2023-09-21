import { View } from "react-native";
import { Txt } from "../Txt/Txt";
import { s } from "./HomeHeader.style";



export function HomeHeader(){

return(
    <>
    <View>
        <Txt>Bogor</Txt>
    </View>

    <View style = {s.textMiring}>
        <Txt style = {s.textMiring_txt}>Data Interpertasi</Txt>
    </View>

    <View style ={s.iconBox}>
        <Txt style={s.icon}>Icon</Txt>
    </View>
   
    </>
);

}