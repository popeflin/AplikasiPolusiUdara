import { Text, View } from "react-native";
import {StyledContainer, s} from "./HomeFooter.style";


export function HomeFooter(){

    return (
        
        <View style = {s.container}>
          <StyledContainer>
            <Text>Hello1A</Text>
            <Text>Hello1B</Text>
          </StyledContainer>

          <StyledContainer>
            <Text>Hello2A</Text>
            <Text>Hello2B</Text>
          </StyledContainer>

          <StyledContainer>
            <Text>Hello3A</Text>
            <Text>Hello3B</Text>
          </StyledContainer>



        </View>


    );



}