import { s } from "./HomeHeader.style";
import { Txt } from "../Txt/Txt";
import { Image, TouchableOpacity, View } from "react-native";
import { Clock } from "../Clock/Clock";


export function HomeHeader() {
    console.log();
    
    return (
      <>
     <View style={s.clock}>
      <Clock/>
      </View>
        <View>
          <Txt>Bogor</Txt>
        </View>
  
        <View style={s.interpretation}>
          <Txt style={s.interpretation_txt}> Interpretation</Txt>
        </View>
  
        <View style={s.temperature_box}>
          <TouchableOpacity  >
            <Txt style={s.temperature}>39°</Txt>
          </TouchableOpacity>
          <Image style={s.image} />
        </View>
      </>
    );
}