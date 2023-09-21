import { Text, View } from "react-native";
import {StyledContainer, StyledLabel, StyledValue, s} from "./HomeFooter.style";


export function HomeFooter(){

    return (
        
        <View style = {s.container}>
          <StyledContainer>
            <StyledLabel>123</StyledLabel>
            <StyledValue>CO2</StyledValue>
          </StyledContainer>

          <StyledContainer>
          <StyledLabel>234</StyledLabel>
          <StyledValue>NO2</StyledValue>
          </StyledContainer>

          <StyledContainer>
          <StyledLabel>456</StyledLabel>
          <StyledValue>O2</StyledValue>
          </StyledContainer>



        </View>


    );



}