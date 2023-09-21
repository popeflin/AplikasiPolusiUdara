
import { StyleSheet ,View} from "react-native";


export const s = StyleSheet.create({


    container : {
        flexDirection: "row",
        backgroundColor: "#0000005c",
        flex:1,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
    },

    styledContainer :{
        alignItems: "center",
    },



});

export function StyledContainer ({children}){
    return(
        <View style={s.styledContainer}>
            {children}
        </View>
    )
}

