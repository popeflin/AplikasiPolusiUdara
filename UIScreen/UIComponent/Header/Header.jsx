import { TouchableOpacity, View } from "react-native";
import { Txt } from "../Txt/Txt";
import { s } from "./Header.style";
import { useNavigation } from "@react-navigation/native";



export function Header(){

    const nav = useNavigation();
    return(

        <View style = {s.container}>
            <TouchableOpacity style = {s.back_btn} onPress={nav.goBack}>
                <Txt>{"<"}</Txt>
            </TouchableOpacity>
            <View style = {s.header_txt}>
                <Txt style = {s.title}>Details</Txt>
            </View>

        </View>

    );


}