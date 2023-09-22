import { ScrollView, TouchableOpacity ,View,Text, Image } from "react-native";
import {s} from "./ImageScreen.style";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

export function ImageScreen() {
    
    const [imgUrl,setImgUrl] = useState([]);

    async function pickImage(){
        const image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

        if(image.canceled === true){
           alert("No image selected");
        }else{
            setImgUrl([...imgUrl,image.assets[0].uri])
            console.log(image.assets[0].uri);
        }
    };


return (
    <View style = {{flex :1}}>
    <View style = {s.body}>    
    <ScrollView>
        {imgUrl.map((item,index) => (
          
            <Image key= {index} source = {{uri:item}} style={{ width: 200, height: 200 }} />
          
        ))}
    </ScrollView>
    </View>

    <View style = {s.footer}>
        <TouchableOpacity style = {s.btn} onPress={pickImage}>
            <Text style ={{color:"white"}}>Add Picture</Text>
        </TouchableOpacity>
    </View>
    </View>
);

}