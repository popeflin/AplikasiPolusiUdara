import { TouchableOpacity, View } from "react-native";
import { Txt } from "../Txt/Txt";
import { s } from "./HomeHeader.style";
import { useNavigation } from '@react-navigation/native';



export function HomeHeader({dataPolusi, cityName}){
    const nav = useNavigation();

return(
    <>
    <View>
        <Txt>{cityName.address.city}</Txt>
    </View>

    <View style = {s.textMiring}>
        <Txt style = {s.textMiring_txt}>Data Interpertasi</Txt>
    </View>

    <View style ={s.iconBox}>
        <TouchableOpacity onPress={() => nav.navigate('Detail')}>
        <Txt style={s.icon}>Icon</Txt>
        </TouchableOpacity>
    </View>
   
    </>
);

}