import { Text } from "react-native";
import { s } from "./Txt.style";


export function Txt({children,style,...restProps}){
    const fontSize =  style?.fontSize || s.txt.fontSize

    return (
        <Text style = {[s.txt ,style, fontSize]}  {...restProps}>{children}</Text>
    );

}